export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: {
    languages?: string[];
    frameworks?: string[];
    tools?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'flow-builder',
    title: 'Flow Builder',
    description:
      'The ability for a product department to create flows that lead customers along a path to buy the best product for them by operating on a web interface.',
    techStack: {
      languages: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      frameworks: ['TailwindCSS', 'Laravel'],
      tools: [
        'Ubuntu',
        'macOS',
        'PhpStorm',
        'Neovim',
        'MariaDB',
        'Vite',
        'Alpine.js',
        'Node.js',
        'npm',
        'Docker',
        'Git',
        'GitLab',
        'Composer',
        'Envoy',
        'PlantUML',
        'Scrum',
        'Jira',
        'Microsoft 365',
        'Miro',
      ],
    },
  },
  {
    id: 'flow-controller',
    title: 'Flow Controller',
    description:
      'Software service to customize flows after creating them with the Flow Builder and provide them to the customers.',
    techStack: {
      languages: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      frameworks: ['TailwindCSS', 'Laravel'],
      tools: [
        'Ubuntu',
        'macOS',
        'PhpStorm',
        'Neovim',
        'MariaDB',
        'Vite',
        'Alpine.js',
        'Node.js',
        'npm',
        'Docker',
        'Git',
        'GitLab',
        'Composer',
        'Envoy',
        'PlantUML',
        'Figma',
        'Scrum',
        'Jira',
        'Microsoft 365',
        'Miro',
      ],
    },
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    description:
      'The heart of all products. In a web interface, a product department can create the background structure based on calculations of new products and their services.',
    techStack: {
      languages: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      frameworks: ['Bootstrap', 'TailwindCSS', 'Laravel'],
      tools: [
        'Ubuntu',
        'macOS',
        'PhpStorm',
        'Neovim',
        'MariaDB',
        'Vite',
        'jQuery',
        'Alpine.js',
        'Node.js',
        'npm',
        'Docker',
        'Git',
        'GitLab',
        'Composer',
        'Envoy',
        'PlantUML',
        'Scrum',
        'Jira',
        'Microsoft 365',
        'Miro',
      ],
    },
  },
  {
    id: 'sales-crm',
    title: 'Sales CRM',
    description:
      'A CRM system for the sales department to manage the customers and their bookings.',
    techStack: {
      languages: ['HTML', 'CSS', 'SCSS', 'JS', 'PHP', 'SQL'],
      frameworks: ['Bootstrap', 'TailwindCSS', 'Laravel'],
      tools: [
        'Ubuntu',
        'macOS',
        'PhpStorm',
        'Neovim',
        'MariaDB',
        'jQuery',
        'Node.js',
        'npm',
        'Docker',
        'Git',
        'GitLab',
        'Composer',
        'Envoy',
        'PlantUML',
        'Scrum',
        'Jira',
        'Microsoft 365',
        'Miro',
      ],
    },
  },
  {
    id: 'company-wiki',
    title: 'Company Wiki',
    description:
      "Implementation of a company wiki with Wiki.js to document the company's knowledge.",
    techStack: {
      languages: ['Markdown', 'SQL'],
      tools: [
        'Ubuntu',
        'macOS',
        'Wiki.js',
        'PostgreSQL',
        'Digital Ocean Pods',
        'Scrum',
        'Jira',
        'Microsoft 365',
      ],
    },
  },
  {
    id: 'scrum',
    title: 'Scrum',
    description:
      'Implementation of Scrum in the several departments to interact in a more agile way with Jira, GitFlow and deployment areas.',
    techStack: {
      languages: ['Markdown', 'JSON'],
      tools: [
        'macOS',
        'REST',
        'JetBrains YouTrack',
        'JetBrains Space',
        'Jira',
        'Microsoft 365',
        'Kanban',
        'GitLab',
      ],
    },
  },
  {
    id: 'vcs-relocation',
    title: 'VCS Relocation',
    description:
      'Switching from in house on premises GitLab to GitLab.com with all the software projects because of reliability and functionality.',
    techStack: {
      tools: ['Ubuntu', 'Git', 'GitLab', 'JetBrains YouTrack', 'JetBrains Space', 'Kanban'],
    },
  },
  {
    id: 'online-contracts',
    title: 'Online Contracts',
    description: 'Legacy projects with all the old funnels, product- and landing pages.',
    techStack: {
      languages: ['HTML', 'CSS', 'SCSS', 'JS', 'PHP', 'SQL'],
      frameworks: ['Bootstrap', 'CakePHP'],
      tools: [
        'Ubuntu',
        'PhpStorm',
        'MySQL',
        'jQuery',
        'Node.js',
        'npm',
        'Docker',
        'Git',
        'GitLab',
        'GitLab CI/CD',
        'Composer',
      ],
    },
  },
  {
    id: 'automatized-reports',
    title: 'Automatized Reports',
    description:
      'A business intelligence (BI) tool to create automatized reports for the management and sales department.',
    techStack: {
      languages: ['C++', 'CSS', 'SQL'],
      frameworks: ['Qt'],
      tools: ['Windows', 'Visual Studio', 'Firebird SQL', 'Treesoft ERP', 'Git', 'GitLab'],
    },
  },
  {
    id: 'datanorm-interface',
    title: 'Datanorm Interface',
    description:
      'Interface to exchange article master data in an ERP system between suppliers, wholesalers and craft enterprises.',
    techStack: {
      languages: ['C++', 'CSS', 'SQL'],
      frameworks: ['Qt'],
      tools: ['Windows', 'Visual Studio', 'Firebird SQL', 'Treesoft ERP', 'Git', 'GitLab'],
    },
  },
  {
    id: 'erp-refactoring',
    title: 'ERP Refactoring',
    description:
      'Refactoring of the ERP system to improve the performance and usability for optimizing the business processes.',
    techStack: {
      languages: ['VBA', 'SQL'],
      tools: ['Windows', 'Microsoft SQL', 'Miclas.X', 'Microsoft Excel'],
    },
  },
  {
    id: 'course-booker',
    title: 'Course Booker',
    description:
      'Platform to offer courses on various topics provided by a company and to book them by their customers.',
    techStack: {
      languages: ['HTML', 'CSS', 'JS', 'TS', 'SQL'],
      tools: [
        'Windows',
        'WSL2',
        'macOS',
        'Neovim',
        'TailwindCSS',
        'Tailwind Variants',
        'React',
        'Next.js',
        'Remix',
        'React Router',
        'Prisma',
        'Azure',
        'Microsoft SQL',
        'Git',
        'GitHub',
      ],
    },
  },
];
