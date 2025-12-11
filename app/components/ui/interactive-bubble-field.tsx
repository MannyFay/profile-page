import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { motion, useSpring } from 'framer-motion';
import { skillBubble, getColorForCategory, getSizeForLevel, type SkillData } from './skill-bubble';

//-------------------------------------------------------------------------------------------------
// Interactive Bubble Field - Props

interface BubblePosition {
  x: number;
  y: number;
}

interface ChaosValues {
  x: number;
  y: number;
}

interface InteractiveBubbleFieldProps {
  skills: SkillData[];
}

const REPEL_RADIUS = 100; // Distance at which repulsion starts
const REPEL_STRENGTH = 35; // Maximum repulsion distance in pixels
const IDLE_AMPLITUDE = 5; // Pixels of idle movement
const CHAOS_OFFSET = 6; // Max random position offset
const SPRING_CONFIG = { stiffness: 150, damping: 15, mass: 0.5 };

//-------------------------------------------------------------------------------------------------
// Interactive Bubble Field - Helpers

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getDaySeed(): number {
  const now = new Date();
  return now.getFullYear() * 1000 + now.getMonth() * 32 + now.getDate();
}

function separateSmallBubbles(array: SkillData[]): SkillData[] {
  const result = [...array];

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i].level === 'beginner' && result[i + 1].level === 'beginner') {
      // Find a non-beginner bubble to swap with
      for (let j = i + 2; j < result.length; j++) {
        if (result[j].level !== 'beginner') {
          [result[i + 1], result[j]] = [result[j], result[i + 1]];
          break;
        }
      }
    }
  }

  return result;
}

//-------------------------------------------------------------------------------------------------
// Single Bubble Component

interface BubbleProps {
  skill: SkillData;
  index: number;
  hoveredIndex: number | null;
  chaos: ChaosValues;
  onHover: (index: number | null) => void;
  getBubbleCenter: (index: number) => BubblePosition | null;
}

function Bubble({ skill, index, hoveredIndex, chaos, onHover, getBubbleCenter }: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Spring-based position offsets for repulsion
  const springX = useSpring(0, SPRING_CONFIG);
  const springY = useSpring(0, SPRING_CONFIG);

  // Idle animation offset (unique phase per bubble)
  const idlePhase = index * 0.7;
  const [idleOffset, setIdleOffset] = useState({ x: 0, y: 0 });

  // Idle floating animation
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      const time = Date.now() / 1000;
      setIdleOffset({
        x: Math.sin(time + idlePhase) * IDLE_AMPLITUDE,
        y: Math.cos(time * 0.8 + idlePhase) * IDLE_AMPLITUDE,
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [idlePhase]);

  // Calculate repulsion when another bubble is hovered
  useEffect(() => {
    if (hoveredIndex === null || hoveredIndex === index) {
      springX.set(0);
      springY.set(0);
      return;
    }

    const myCenter = getBubbleCenter(index);
    const hoveredCenter = getBubbleCenter(hoveredIndex);

    if (!myCenter || !hoveredCenter) return;

    const dx = myCenter.x - hoveredCenter.x;
    const dy = myCenter.y - hoveredCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < REPEL_RADIUS && distance > 0) {
      const force = (1 - distance / REPEL_RADIUS) * REPEL_STRENGTH;
      const angle = Math.atan2(dy, dx);

      const repelX = Math.cos(angle) * force;
      const repelY = Math.sin(angle) * force;

      springX.set(repelX);
      springY.set(repelY);
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [hoveredIndex, index, getBubbleCenter, springX, springY]);

  // Combine chaos offset + idle animation
  const totalOffsetX = chaos.x + idleOffset.x;
  const totalOffsetY = chaos.y + idleOffset.y;

  return (
    <motion.div
      ref={ref}
      data-index={index}
      className="-m-1"
      style={{
        x: springX,
        y: springY,
        translateX: totalOffsetX,
        translateY: totalOffsetY,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onTouchStart={() => onHover(index)}
      onTouchEnd={() => onHover(null)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className={skillBubble({
          color: getColorForCategory(skill.category),
          size: getSizeForLevel(skill.level),
        })}
      >
        <h2
          dangerouslySetInnerHTML={{
            __html: skill.name.replace('-', '<br/>').replace(' ', '<br/>'),
          }}
        />
      </div>
    </motion.div>
  );
}

//-------------------------------------------------------------------------------------------------
// Interactive Bubble Field - Component

export function InteractiveBubbleField({ skills }: InteractiveBubbleFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Shuffle skills on each page load
  const shuffledSkills = useMemo(() => {
    const shuffled = seededShuffle(skills, getDaySeed());
    return separateSmallBubbles(shuffled);
  }, [skills]);

  // Generate stable random values for each bubble (organic/chaotic look)
  const chaosValues = useMemo(() => {
    return shuffledSkills.map((_, index) => ({
      x: (seededRandom(index * 2) - 0.5) * CHAOS_OFFSET * 2,
      y: (seededRandom(index * 2 + 1) - 0.5) * CHAOS_OFFSET * 2,
    }));
  }, [shuffledSkills]);

  // Get the center position of a bubble by its index
  const getBubbleCenter = useCallback((index: number): BubblePosition | null => {
    if (!containerRef.current) return null;

    const bubble = containerRef.current.querySelector(`[data-index="${index}"]`);
    if (!bubble) return null;

    const rect = bubble.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    return {
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2,
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-0 px-2 py-2"
    >
      {shuffledSkills.map((skill, index) => (
        <Bubble
          key={skill.name}
          skill={skill}
          index={index}
          hoveredIndex={hoveredIndex}
          chaos={chaosValues[index]}
          onHover={setHoveredIndex}
          getBubbleCenter={getBubbleCenter}
        />
      ))}
    </div>
  );
}
