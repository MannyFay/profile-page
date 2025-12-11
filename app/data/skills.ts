import type { SkillData, SkillCategory, SkillLevel } from '~/components/ui/skill-bubble';

//-------------------------------------------------------------------------------------------------
// Skills Data - Helper

type SkillInput = { name: string; level: SkillLevel };

function createSkills(category: SkillCategory, items: SkillInput[]): SkillData[] {
  return items.map((skill) => ({ ...skill, category }));
}

//-------------------------------------------------------------------------------------------------
// Skills Data - By Category

const languages = createSkills('language', [
  { name: 'C++', level: 'intermediate' },
  { name: 'CSS', level: 'expert' },
  { name: 'HTML', level: 'expert' },
  { name: 'JS', level: 'advanced' },
  { name: 'PHP', level: 'advanced' },
  { name: 'SCSS', level: 'intermediate' },
  { name: 'Shell Script', level: 'advanced' },
  { name: 'SQL', level: 'advanced' },
  { name: 'TS', level: 'advanced' },
  { name: 'YAML', level: 'intermediate' },
]);

const frameworks = createSkills('framework', [
  { name: 'Alpine.js', level: 'beginner' },
  { name: 'Boot-strap', level: 'advanced' },
  { name: 'Hugo', level: 'advanced' },
  { name: 'Laravel', level: 'advanced' },
  { name: 'Qt', level: 'beginner' },
  { name: 'React', level: 'advanced' },
  { name: 'Tailwind CSS', level: 'expert' },
  { name: 'Vue.js', level: 'beginner' },
]);

const tools = createSkills('tool', [
  { name: 'Ansible', level: 'intermediate' },
  { name: 'Azure', level: 'intermediate' },
  { name: 'BEM', level: 'expert' },
  { name: 'CI/CD', level: 'intermediate' },
  { name: 'Composer', level: 'advanced' },
  { name: 'CRM', level: 'advanced' },
  { name: 'Docker', level: 'advanced' },
  { name: 'Envoy', level: 'beginner' },
  { name: 'ERP', level: 'advanced' },
  { name: 'Figma', level: 'advanced' },
  { name: 'Git', level: 'expert' },
  { name: 'GitHub', level: 'expert' },
  { name: 'GitLab', level: 'expert' },
  { name: 'Google Workspace', level: 'advanced' },
  { name: 'Jira', level: 'expert' },
  { name: 'MariaDB', level: 'advanced' },
  { name: 'Microsoft 365', level: 'intermediate' },
  { name: 'Miro', level: 'intermediate' },
  { name: 'MySQL', level: 'advanced' },
  { name: 'Neovim', level: 'expert' },
  { name: 'Node.js', level: 'expert' },
  { name: 'Php Storm', level: 'advanced' },
  { name: 'Plant UML', level: 'advanced' },
  { name: 'Prisma', level: 'intermediate' },
  { name: 'SEO', level: 'advanced' },
  { name: 'Space', level: 'intermediate' },
  { name: 'Terminal', level: 'expert' },
  { name: 'UI/UX', level: 'advanced' },
  { name: 'Visual Studio', level: 'intermediate' },
  { name: 'Vite', level: 'intermediate' },
  { name: 'VS Code', level: 'advanced' },
  { name: 'You-Track', level: 'intermediate' },
]);

const operatingSystems = createSkills('os', [
  { name: 'Arch', level: 'beginner' },
  { name: 'macOS', level: 'expert' },
  { name: 'Ubuntu', level: 'expert' },
  { name: 'Windows', level: 'beginner' },
]);

const methodologies = createSkills('methodology', [
  { name: 'Scrum', level: 'expert' },
  { name: 'Super-visor', level: 'advanced' },
  { name: 'Water-fall Model', level: 'advanced' },
]);

//-------------------------------------------------------------------------------------------------
// Skills Data - Export

export const skills: SkillData[] = [
  ...languages,
  ...frameworks,
  ...tools,
  ...operatingSystems,
  ...methodologies,
];
