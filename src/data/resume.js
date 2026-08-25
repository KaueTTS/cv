export const profile = {
  name: 'Kauê Bertaze de Oliveira',
  headline: 'Desenvolvedor Back-End',
  ageAndBirthDate: '21 anos — Nascido em 17/11/2004',
  email: 'kauebertaze2004@gmail.com',
  phone: '(11) 98815-5315',
  phoneHref: '+5511988155315',
  location: 'Diadema/SP, Brasil',
  mapUrl: 'https://www.google.com/maps/place/Diadema,+SP',
  github: 'github.com/KaueTTS',
  githubUrl: 'https://github.com/KaueTTS',
  linkedin: 'linkedin.com/in/kauebertaze',
  linkedinUrl: 'https://www.linkedin.com/in/kauebertaze/',
  website: 'cv-kauebertaze.vercel.app',
  websiteUrl: 'https://cv-kauebertaze.vercel.app/',
};

export const professionalSummary = [
  'Desenvolvedor Back-End com experiência prática em arquitetura de microsserviços utilizando Go.',
  'Atuação em sistemas B2B de alta demanda, com foco em performance, escalabilidade, manutenibilidade e integração entre serviços.',
  'Experiência com observabilidade (Datadog), cache (Redis), mecanismos de busca (Elasticsearch/OpenSearch) e bancos de dados SQL e NoSQL.',
];

export const interests = [
  'Programação', 'Leitura', 'Musculação', 'Vídeo Game',
  'Atividades ao ar livre', 'Jogos de Tabuleiro', 'Esportes',
];

export const experiences = [
  {
    title: 'Desenvolvedor Back-End Jr',
    companyName: 'Grupo Multilaser',
    company: 'Grupo Multilaser - Remoto',
    workMode: 'Remoto',
    date: 'jul/2025 — atual',
    summary: 'Atuação no desenvolvimento de nova plataforma para substituição do sistema legado de vendas, evoluindo para soluções de frente de vendas e e-commerce B2B.',
    highlights: [
      { text: 'Desenvolve e mantém microsserviços e APIs REST com Golang, Fiber e PHP/Laravel para uma plataforma B2B de vendas e e-commerce que substitui o sistema legado.', showOnPdf: true },
      { text: 'Implementa integrações internas e externas e regras de negócio nos domínios de produtos, carrinho, pedidos, clientes, orçamento e Backend for Frontend (BFF).', showOnPdf: true },
      { text: 'Realiza consultas, indexação e modelagem de dados com Elasticsearch/OpenSearch, MySQL, SQL Server, PostgreSQL e MongoDB.', showOnPdf: true },
      { text: 'Aplica Redis como camada de cache em endpoints críticos, reduzindo latência e melhorando a performance das APIs.', showOnPdf: true },
      { text: 'Monitora e investiga falhas com Datadog, além de documentar contratos de API com Swagger/OpenAPI.', showOnPdf: true },
      { text: 'Colabora com times de produto e engenharia na evolução da arquitetura, escalabilidade e manutenibilidade da plataforma.', showOnPdf: true },
    ],
  },
  {
    title: 'Analista de Sistemas Jr',
    companyName: 'Grupo Multilaser',
    company: 'Grupo Multilaser - Híbrido',
    workMode: 'Híbrido',
    date: 'mar/2024 — jun/2025',
    highlights: [
      { text: 'Consultou e validou dados com MySQL, MongoDB e SQL Server e executou ajustes pontuais em projetos e procedures por meio de GMUD.', showOnPdf: true },
      { text: 'Investigou erros e inconsistências com Datadog e Grafana e realizou validações/correções em APIs com Postman e Swagger.', showOnPdf: true },
      { text: 'Prestou suporte N1 e N2 a sistemas internos, registrando e acompanhando demandas na plataforma Jira.', showOnPdf: true },
      { text: 'Documentou processos no Confluence e criou dashboards e kanbans com Jira Query Language (JQL).', showOnPdf: true },
      { text: 'Prestou suporte aos sistemas Multi, incluindo Mercury, Multiyou, Intranet, Revendedor e CP.', showOnPdf: false },
      { text: 'Apoiou equipes de Desenvolvimento, Microinformática e Backoffice na análise e resolução de demandas.', showOnPdf: false },
    ],
  },
  {
    title: 'Auxiliar de Suporte',
    companyName: 'Grupo Multilaser',
    company: 'Grupo Multilaser - Presencial',
    workMode: 'Presencial',
    date: 'dez/2023 — fev/2024',
    highlights: [
      { text: 'Automatizou tarefas operacionais com scripts Batch/Shell e planilhas, além de criar e ajustar processos de suporte.', showOnPdf: true },
      { text: 'Atendeu chamados no Jira Workspace e realizou configuração do Microsoft Office 365, impressoras e imagens ISO.', showOnPdf: true },
    ],
  },
  {
    title: 'Jovem Aprendiz',
    companyName: 'Grupo Multilaser',
    company: 'Grupo Multilaser - Presencial',
    workMode: 'Presencial',
    date: 'fev/2023 — nov/2023',
    highlights: [
      { text: 'Prestou suporte a hardware, software e sistemas operacionais Windows, macOS, Linux, Android e iOS, incluindo preparação e reparo de dispositivos.', showOnPdf: true },
      { text: 'Gerenciou usuários no Active Directory e apoiou o controle de estoque, chips e envio de equipamentos.', showOnPdf: true },
    ],
  },
];

export const skillGroups = [
  ['Linguagens e Frameworks', ['Golang', 'PHP', 'JavaScript', 'Python', 'Node.js', 'Laravel', 'Fiber', 'React', 'HTML', 'CSS', 'Cypress']],
  ['Arquitetura e Desenvolvimento de Software', ['Microsserviços', 'Monólitos', 'REST APIs', 'Swagger', 'DDD (Domain-Driven Design)', 'GoF (Design Patterns)', 'OOP (Object-Oriented Programming)', 'JWT (JSON Web Tokens)']],
  ['Bancos de Dados e Armazenamento', ['SQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Redis', 'SQLite', 'JQL', 'Postgres']],
  ['DevOps, Cloud e Infraestrutura', ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Grafana', 'Datadog', 'Keycloak']],
  ['Versionamento e Qualidade de Software', ['Git', 'GitHub', 'GitLab', 'Testes unitários']],
  ['Outros Conhecimentos Tecnológicos', ['Kanban', 'Scrum', 'Active Directory', 'PowerShell', 'Windows', 'MacOS', 'Linux', 'Confluence', 'Jira', 'Markdown']],
  ['Soft Skills', ['Trabalho em equipe', 'Resolução de problemas', 'Pensamento analítico', 'Adaptabilidade', 'Organização', 'Proatividade', 'Gestão do tempo', 'Mentalidade ágil', 'Aprendizado contínuo', 'Resiliência']],
];

export const resumeSkillGroups = [
  ['Linguagens e frameworks', 'Golang, PHP, JavaScript, Fiber, Laravel'],
  ['APIs e arquitetura', 'Microsserviços, APIs REST, Swagger/OpenAPI, JSON, Backend for Frontend (BFF), DDD, Design Patterns (GoF), OOP, JWT'],
  ['Dados e cache', 'MySQL, SQL Server, MongoDB, Elasticsearch, OpenSearch, Redis, SQLite, PostgreSQL'],
  ['DevOps e observabilidade', 'AWS, Docker, Kubernetes, CI/CD, Datadog, Grafana, Git, GitLab, Keycloak'],
  ['Ferramentas e práticas', 'Postman, Jira, JQL, Confluence, Kanban, Scrum, testes unitários, PowerShell'],
];

export const education = {
  degree: 'Bacharelado em Engenharia de Software',
  institution: 'Universidade Estácio de Sá — EAD',
  period: '2023 — 2026 (em andamento)',
};

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Básico — A2 (em desenvolvimento)' },
];

export const courses = [
  { name: 'Microsserviços: padrões de projeto', provider: 'Alura', year: '2026', duration: '6h', url: 'https://cursos.alura.com.br/user/kaue-bertaze/course/microsservicos-padroes-projeto/certificate' },
  { name: 'Linguagem Go', provider: 'Alura', year: '2025', duration: '51h', url: 'https://cursos.alura.com.br/user/kaue-bertaze/degree-go-298528/certificate' },
  { name: 'Microsoft SQL Server', provider: 'Alura', year: '2024', duration: '79h', url: 'https://cursos.alura.com.br/user/kaue-bertaze/degree-microsoft-sql-server-2022-501719/certificate' },
  { name: 'Full-Stack Development', provider: 'Mimo', year: '2024', url: 'https://drive.google.com/file/d/1HlWv9bFTM8EZn2clSAjxCO-9ApBlVJ9_/view?usp=drive_link' },
];
