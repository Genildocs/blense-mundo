export const brandData = {
  name: 'blense',
  tagline: 'Criatividade, Código Limpo & Arquitetura Web Moderna',
  description:
    'Estúdio digital focado em desenvolvimento Frontend de alto impacto, arquitetura escalável de aplicações web e criação de APIs eficientes.',
  location: 'Brasil',
  social: {
    github: 'https://github.com/Genildocs',
    linkedin: 'https://linkedin.com/in/genildocs',
    email: 'genildocs@gmail.com',
    website: 'https://www.blense.fun',
  },
  metrics: [
    { value: '60+', label: 'Repositórios & Projetos' },
    { value: '4+', label: 'Anos de Experiência' },
    { value: '100%', label: 'Foco em Qualidade' },
    { value: 'Modern', label: 'Stack Tecnológica' },
  ],
};

export const aboutData = {
  title: 'Manifesto & Visão',
  subtitle: 'Construindo o futuro da web com precisão técnica e design refinado',
  paragraphs: [
    'A blense nasceu com a missão de transformar ideias em produtos digitais velozes, acessíveis e visualmente memoráveis. Acreditamos que a união entre design refinado e engenharia de software rigorosa é a chave para experiências digitais extraordinárias.',
    'Especializados no ecossistema React, Vite, Styled Components e APIs modernas, nosso fluxo de trabalho une componentização modular, design systems consistentes e arquiteturas preparadas para escala.',
  ],
  pillars: [
    {
      title: 'Design Systems Escaláveis',
      desc: 'Criação de componentes atômicos, tipografia consistente e tokens de design reaproveitáveis que aceleram o desenvolvimento.',
      badge: 'Design & Code',
    },
    {
      title: 'Performance & SEO',
      desc: 'Código otimizado para carregamento instantâneo, Core Web Vitals no verde e melhores práticas de acessibilidade.',
      badge: 'Velocidade',
    },
    {
      title: 'Arquitetura Limpa',
      desc: 'Estruturas modulares, separação clara de responsabilidades, tipagem e manutenção simplificada a longo prazo.',
      badge: 'Engenharia',
    },
    {
      title: 'Integrações & APIs',
      desc: 'Conexão fluida entre frontends modernos e serviços backends, bancos de dados em nuvem e ecossistemas inteligentes.',
      badge: 'Conectividade',
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: 'Blense Design System',
    category: 'Design System',
    description:
      'Sistema de design completo com tokens reutilizáveis, suporte a temas Dark/Light, transient props e componentes de interface consistentes.',
    tags: ['React 19', 'Styled Components', 'Design Tokens', 'Vite'],
    github: 'https://github.com/Genildocs/blense-mundo',
    demo: 'https://github.com/Genildocs/blense-mundo',
    featured: true,
  },
  {
    id: 2,
    title: 'Mundo Analytics Hub',
    category: 'Frontend',
    description:
      'Painel interativo para acompanhamento de métricas, visualização de dados em tempo real e monitoramento de performance com UI responsiva.',
    tags: ['React', 'CSS-in-JS', 'Vite', 'Charts'],
    github: 'https://github.com/Genildocs',
    demo: 'https://github.com/Genildocs',
    featured: true,
  },
  {
    id: 3,
    title: 'Core API Engine',
    category: 'Backend',
    description:
      'Microsserviço de alta disponibilidade para orquestração de requisições, tratamento de payloads e integração com bancos de dados modernos.',
    tags: ['Node.js', 'REST API', 'JSON Schema', 'Microservices'],
    github: 'https://github.com/Genildocs',
    demo: 'https://github.com/Genildocs',
    featured: false,
  },
  {
    id: 4,
    title: 'Agile Task Canvas',
    category: 'Frontend',
    description:
      'Interface colaborativa estilo Kanban com drag-and-drop intuitivo, persistência local e animações fluidas baseadas em microinterações.',
    tags: ['React', 'Styled Components', 'State Management'],
    github: 'https://github.com/Genildocs',
    demo: 'https://github.com/Genildocs',
    featured: false,
  },
];

export const servicesData = [
  {
    id: 1,
    title: 'Desenvolvimento Frontend Avançado',
    description:
      'Criação de Single Page Applications (SPAs) modernas, ultra-rápidas e responsivas utilizando React, Vite e as melhores práticas de mercado.',
    icon: 'code',
    technologies: ['React', 'JavaScript (ES6+)', 'Vite', 'HTML5/CSS3'],
  },
  {
    id: 2,
    title: 'Design Systems & Componentes UI',
    description:
      'Construção de bibliotecas de componentes reutilizáveis baseadas em tokens de design, garantindo padronização visual e produtividade máxima.',
    icon: 'palette',
    technologies: ['Styled Components', 'Design Tokens', 'Figma to Code', 'CSS-in-JS'],
  },
  {
    id: 3,
    title: 'Construção & Integração de APIs',
    description:
      'Desenvolvimento de endpoints seguros e integração completa entre interfaces frontend e serviços em nuvem ou bancos de dados.',
    icon: 'server',
    technologies: ['REST APIs', 'Node.js', 'JSON', 'Fetch / Axios'],
  },
  {
    id: 4,
    title: 'Auditoria & Otimização de Performance',
    description:
      'Análise de performance, eliminação de re-renderizações desnecessárias, lazy loading e aprimoramento dos índices Core Web Vitals.',
    icon: 'zap',
    technologies: ['Core Web Vitals', 'Lighthouse', 'Bundle Analyzer', 'SEO'],
  },
];

export const skillsList = [
  { name: 'React 19', level: 'Avançado' },
  { name: 'Styled Components', level: 'Especialista' },
  { name: 'Vite', level: 'Avançado' },
  { name: 'JavaScript (Modern)', level: 'Avançado' },
  { name: 'Git & GitHub CLI', level: 'Avançado' },
  { name: 'REST APIs & Node.js', level: 'Intermediário' },
  { name: 'Design Tokens & UI/UX', level: 'Avançado' },
  { name: 'Acessibilidade & Performance', level: 'Avançado' },
];
