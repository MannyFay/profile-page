import { useState, useMemo } from 'react';
import { Layout } from '~/components/layout';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Modal } from '~/components/ui/modal';
import { projects, type Project } from '~/data/projects';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// Projects Page - Helpers

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

//-------------------------------------------------------------------------------------------------
// Projects Page - Meta Data

export function meta() {
  return createMeta({ title: 'Projects', path: '/projects' });
}

export function links() {
  return createLinks({ path: '/projects' });
}

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (project: Project) => void;
}) {
  return (
    <Card className="flex h-80 w-72 flex-col items-center text-center">
      <h2 className="text-2xl">{project.title}</h2>
      <p className="mt-6">{project.description}</p>
      <Button
        variant="primary"
        fullWidth
        className="mt-auto"
        onClick={() => onOpenModal(project)}
      >
        Tech Stack
      </Button>
    </Card>
  );
}

const TAG_STYLES = {
  language: 'bg-sky-200 text-sky-950',
  framework: 'bg-fuchsia-200 text-fuchsia-950',
  tool: 'bg-emerald-200 text-emerald-950',
} as const;

function Tag({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: keyof typeof TAG_STYLES;
}) {
  return (
    <span className={`rounded-full px-3 py-1 text-sm ${TAG_STYLES[variant]}`}>{children}</span>
  );
}

function TechStackModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      footer={
        <Button
          variant="primary"
          fullWidth
          onClick={onClose}
        >
          Close
        </Button>
      }
    >
      {project.techStack.languages && (
        <>
          <h3 className="mb-5 mt-2 text-xl">Languages</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {project.techStack.languages.map((lang) => (
              <li key={lang}>
                <Tag variant="language">{lang}</Tag>
              </li>
            ))}
          </ul>
        </>
      )}

      {project.techStack.frameworks && (
        <>
          <h3 className="mb-5 mt-8 text-xl">Frameworks</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {project.techStack.frameworks.map((fw) => (
              <li key={fw}>
                <Tag variant="framework">{fw}</Tag>
              </li>
            ))}
          </ul>
        </>
      )}

      {project.techStack.tools && (
        <>
          <h3 className="mb-5 mt-8 text-xl">Tools</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {project.techStack.tools.map((tool) => (
              <li key={tool}>
                <Tag variant="tool">{tool}</Tag>
              </li>
            ))}
          </ul>
        </>
      )}
    </Modal>
  );
}

//-------------------------------------------------------------------------------------------------
// Projects Page - Component

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shuffledProjects = useMemo(() => seededShuffle(projects, getDaySeed()), []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout>
      <main className="mb-14 mt-20 max-w-sm px-6 hyphens-auto md:max-w-lg lg:mt-36 lg:max-w-2xl">
        <h1 className="text-center text-3xl">Projects</h1>
        <p className="mt-6 text-center">
          To protect the integrity of the companies I have had the privilege of working for, the
          projects have fictitious but descriptive names. The projects are also not sorted in
          chronological order.
        </p>
        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">
          {shuffledProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </main>

      <TechStackModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Layout>
  );
}
