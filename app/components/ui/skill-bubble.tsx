import { tv, type VariantProps } from 'tailwind-variants';

//-------------------------------------------------------------------------------------------------
// Skill Bubble - Variants

export const skillBubble = tv({
  base: 'flex items-center justify-center rounded-full text-center leading-tight opacity-80',
  variants: {
    color: {
      emerald: 'bg-emerald-200 text-emerald-950',
      sky: 'bg-sky-200 text-sky-950',
      fuchsia: 'bg-fuchsia-200 text-fuchsia-950',
      amber: 'bg-amber-200 text-amber-950',
      stone: 'bg-stone-200 text-stone-900',
    },
    size: {
      sm: 'h-12 w-12 text-[0.6rem]',
      md: 'h-16 w-16 text-[0.8rem]',
      lg: 'h-20 w-20 text-[0.9rem]',
      xl: 'h-24 w-24 text-[1rem]',
    },
  },
  defaultVariants: {
    color: 'emerald',
    size: 'lg',
  },
});

export type SkillBubbleVariants = VariantProps<typeof skillBubble>;

//-------------------------------------------------------------------------------------------------
// Skill Categories & Color Mapping

export type SkillCategory = 'tool' | 'language' | 'framework' | 'os' | 'methodology';
export type SkillColor = 'emerald' | 'sky' | 'fuchsia' | 'amber' | 'stone';
export type SkillSize = 'sm' | 'md' | 'lg' | 'xl';

export const CATEGORY_COLORS: Record<SkillCategory, SkillColor> = {
  tool: 'emerald',
  language: 'sky',
  framework: 'fuchsia',
  os: 'stone',
  methodology: 'amber',
};

export function getColorForCategory(category: SkillCategory): SkillColor {
  return CATEGORY_COLORS[category];
}

//-------------------------------------------------------------------------------------------------
// Skill Levels & Size Mapping

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export const LEVEL_SIZES: Record<SkillLevel, SkillSize> = {
  beginner: 'sm',
  intermediate: 'md',
  advanced: 'lg',
  expert: 'xl',
};

export function getSizeForLevel(level: SkillLevel): SkillSize {
  return LEVEL_SIZES[level];
}

//-------------------------------------------------------------------------------------------------
// Skill Data Type

export interface SkillData {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

interface SkillBubbleProps extends SkillBubbleVariants {
  name: string;
  className?: string;
}

export function SkillBubble({ name, color, size, className }: SkillBubbleProps) {
  return (
    <div className={skillBubble({ color, size, className })}>
      <h2
        dangerouslySetInnerHTML={{
          __html: name.replace('-', '<br/>').replace(' ', '<br/>'),
        }}
      />
    </div>
  );
}
