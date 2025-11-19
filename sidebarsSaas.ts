import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  saasSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/configuration',
      ],
    },
    'user_guide',
    'tutorial',
    'agent_monitoring_tutorial',
    'release_notes',
  ],
};

export default sidebars; 