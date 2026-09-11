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
  'Desenvolvedor backend com experiência em Go/Fiber na evolução de APIs, BFFs, workers e microsserviços de uma plataforma B2B de vendas em produção.',
  'Atua com bancos relacionais e não relacionais, Redis, OpenSearch, AWS, Kubernetes e Datadog, com entregas em confiabilidade, segurança, observabilidade e otimização de recursos.',
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
    summary: 'Manutenção e evolução de APIs, BFFs, workers e cronjobs para uma plataforma B2B de vendas, incluindo uma solução B2B em produção em que os próprios clientes realizam seus pedidos.',
    highlights: [
      { text: 'Mantém e evolui APIs REST, BFF, worker e cronjob em Go, principalmente com Fiber, nos domínios de produtos, precificação, clientes, carrinho, pedidos e estoque de uma plataforma B2B com canais web e mobile.', showOnPdf: true },
      { text: 'Aumentou a confiabilidade da precificação ao corrigir regras de desconto e impedir a mistura de faixas de frete entre empresas, além de eliminar duas consultas por requisição no cálculo de frete.', showOnPdf: true },
      { text: 'Migrou fluxos de empresas e condições de pagamento do SQL Server para MySQL, reduziu pela metade as consultas nos fluxos de pagamento e frete e eliminou a dependência do SQL Server no boot da API de precificação.', showOnPdf: false },
      { text: 'Corrigiu falhas críticas no fluxo de pedidos, eliminando respostas HTTP 502, evitando sobrescrita e perda de dados e antecipando a validação de regras comerciais antes do envio ao ERP.', showOnPdf: true },
      { text: 'Migrou o worker de estoque de Elasticsearch com Basic Auth para OpenSearch com IAM Role e assinatura AWS SigV4, removendo credenciais estáticas e implementando operações em lote para atualização e remoção de produtos sem estoque.', showOnPdf: true },
      { text: 'Documentou todos os endpoints da API de pedidos com Swagger/OpenAPI e implementou tracing distribuído com Datadog APM, permitindo rastreamento ponta a ponta entre os serviços da plataforma e o ERP.', showOnPdf: true },
      { text: 'Redimensionou os recursos reservados pela API de pedidos no Kubernetes, reduzindo os requests por pod de 1 CPU para 100m e de 1Gi para 200Mi, além de ampliar o maxReplicas do HPA de 2 para 3.', showOnPdf: true },
      { text: 'Estendeu a geração de PDFs com wkhtmltopdf para o fluxo de pedidos realizados diretamente pelos clientes, reutilizando estilos CSS no BFF da plataforma.', showOnPdf: false },
      { text: 'Realizou manutenção no sistema legado com PHP/Laravel, JavaScript, SQL Server e MySQL, incluindo procedures, jobs e sincronização de dados para operação online e offline.', showOnPdf: false },
    ],
  },
  {
    title: 'Analista de Sistemas Jr',
    companyName: 'Grupo Multilaser',
    company: 'Grupo Multilaser - Híbrido',
    workMode: 'Híbrido',
    date: 'mar/2024 — jun/2025',
    highlights: [
      { text: 'Investigou e corrigiu incidentes em APIs e inconsistências de dados utilizando Datadog, Grafana, Postman, Swagger, MySQL, SQL Server e MongoDB.', showOnPdf: true },
      { text: 'Prestou suporte N1 e N2 a sistemas internos e executou mudanças controladas via GMUD em aplicações e procedures, acompanhando as demandas no Jira.', showOnPdf: true },
      { text: 'Documentou processos no Confluence e criou dashboards e kanbans com Jira Query Language (JQL).', showOnPdf: false },
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
      { text: 'Atendeu chamados no Jira Workspace e realizou configuração do Microsoft Office 365, impressoras e imagens ISO.', showOnPdf: false },
    ],
  },
  {
    title: 'Jovem Aprendiz',
    companyName: 'Grupo Multilaser',
    company: 'Grupo Multilaser - Presencial',
    workMode: 'Presencial',
    date: 'fev/2023 — nov/2023',
    highlights: [
      { text: 'Prestou suporte a hardware, software e sistemas operacionais e gerenciou usuários no Active Directory, incluindo preparação e reparo de dispositivos.', showOnPdf: true },
      { text: 'Atuou com ambientes Windows, macOS, Linux, Android e iOS e apoiou o controle de estoque, chips e envio de equipamentos.', showOnPdf: false },
    ],
  },
];

export const skillGroups = [
  ['Linguagens e Frameworks', ['Golang', 'PHP', 'JavaScript', 'Python', 'Node.js', 'Laravel', 'Fiber', 'React', 'HTML', 'CSS', 'Cypress']],
  ['Arquitetura e Desenvolvimento de Software', ['Microsserviços', 'Monólitos', 'REST APIs', 'Swagger', 'DDD (Domain-Driven Design)', 'GoF (Design Patterns)', 'OOP (Object-Oriented Programming)', 'JWT (JSON Web Tokens)']],
  ['Bancos de Dados e Armazenamento', ['MySQL', 'SQL Server', 'MongoDB', 'Elasticsearch', 'OpenSearch', 'Redis', 'SQLite', 'JQL', 'PostgreSQL']],
  ['DevOps, Cloud e Infraestrutura', ['AWS SQS', 'AWS IAM', 'AWS Secrets Manager', 'RabbitMQ', 'Docker', 'Kubernetes', 'CI/CD', 'Grafana', 'Datadog', 'Keycloak']],
  ['Versionamento e Qualidade de Software', ['Git', 'GitHub', 'GitLab', 'Testes unitários']],
  ['Outros Conhecimentos Tecnológicos', ['Kanban', 'Scrum', 'Active Directory', 'PowerShell', 'Windows', 'MacOS', 'Linux', 'Confluence', 'Jira', 'Markdown']],
  ['Soft Skills', ['Trabalho em equipe', 'Resolução de problemas', 'Pensamento analítico', 'Adaptabilidade', 'Organização', 'Proatividade', 'Gestão do tempo', 'Mentalidade ágil', 'Aprendizado contínuo', 'Resiliência']],
];

export const resumeSkillGroups = [
  ['Backend', 'Golang, Fiber, PHP, Laravel, APIs REST, Microsserviços, BFF'],
  ['Dados e cache', 'Redis, Elasticsearch/OpenSearch, PostgreSQL, MySQL, SQL Server, MongoDB'],
  ['Infraestrutura e observabilidade', 'Docker, Kubernetes, AWS SQS, AWS IAM, AWS Secrets Manager, RabbitMQ, CI/CD, Datadog'],
  ['Arquitetura e práticas', 'Swagger/OpenAPI, DDD, Design Patterns, Testes unitários, Git/GitLab, Keycloak'],
];

export const education = {
  degree: 'Bacharelado em Engenharia de Software',
  institution: 'Universidade Estácio de Sá — EAD',
  period: '2023 — atual',
};

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Básico — A2' },
];

export const courses = [
  { name: 'Microsserviços: padrões de projeto', provider: 'Alura', year: '2026', url: 'https://cursos.alura.com.br/user/kaue-bertaze/course/microsservicos-padroes-projeto/certificate' },
  { name: 'Linguagem Go', provider: 'Alura', year: '2025', url: 'https://cursos.alura.com.br/user/kaue-bertaze/degree-go-298528/certificate' },
  { name: 'Microsoft SQL Server', provider: 'Alura', year: '2024', url: 'https://cursos.alura.com.br/user/kaue-bertaze/degree-microsoft-sql-server-2022-501719/certificate' },
  { name: 'Full-Stack Development', provider: 'Mimo', year: '2024', url: 'https://drive.google.com/file/d/1HlWv9bFTM8EZn2clSAjxCO-9ApBlVJ9_/view?usp=drive_link', showOnPdf: false },
];
