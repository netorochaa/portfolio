/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO DATA — edite aqui para personalizar
═══════════════════════════════════════════════════════════════ */
const PORTFOLIO = {
  name:  'José Neto',
  role:  { pt: 'Analista e Desenvolvedor de Sistemas', en: 'Systems Analyst and Developer' },
  photo: 'assets/jose_neto.jpg',

  skills: [
    {
      label: { pt: 'Back-end', en: 'Back-end' },
      tags: ['PHP', 'Java', '.Net', 'Laravel', 'Symfony', 'CakePHP', 'Spring Boot', 'Quarkus', 'PHPUnit', 'Pest', 'JUnit'],
    },
    {
      label: { pt: 'Front-end', en: 'Front-end' },
      tags: ['JavaScript', 'TypeScript', 'Vue.js', 'Angular (9–19)', 'Alpine.js', 'Livewire', 'Bootstrap', 'Tailwind CSS', 'PrimeFlex', 'Sass / Scss / Less', 'Shadcn', 'Vuetify', 'PrimeVue', 'Angular Material', 'PrimeNG', 'WireUI', 'Vue Test Utils', 'Jest', 'Jasmine', 'Karma'],
    },
    {
      label: { pt: 'Banco de Dados', en: 'Database' },
      tags: ['MySQL', 'MariaDB', 'PostgreSQL', 'Oracle'],
    },
    {
      label: { pt: 'DevOps & Cloud', en: 'DevOps & Cloud' },
      tags: ['Docker', 'Red Hat OpenShift', 'AWS (SQS, S3, EC2, Lambda)', 'MinIO', 'Amezmo', 'Vapor', 'Envoyer', 'Forge', 'Jenkins', 'GitHub', 'GitLab', 'Bitbucket'],
    },
    {
      label: { pt: 'Integrações & APIs', en: 'Integrations & APIs' },
      tags: ['REST', 'SOAP', 'LDAP', 'OAuth2', 'Google Maps API', 'Swagger', 'Twilio', 'SendGrid', 'Aurora Solar API', 'gov.br (SSO & CadÚnico)', 'Microsoft Azure', 'Stripe', 'Pagar.me', 'Getnet', 'Mercado Pago'],
    },
    {
      label: { pt: 'Boas Práticas, Qualidade e Observabilidade', en: 'Best Practices, Quality and Observability' },
      tags: ['PSR', 'Clean Code', 'SOLID', 'TDD', 'Testes Unitários', 'Integração', 'e2e', 'APF', 'Casos de Uso', 'SonarQube', 'New Relic', 'PHPStan', 'PHP CS Fixer'],
    },
  ],

  experience: [
    {
      period:  { pt: '2023 — atual', en: '2023 — present' },
      role:    { pt: 'Software Developer', en: 'Software Developer' },
      company: 'Minsait',
      desc: {
        pt: 'Desenvolvimento e arquitetura de aplicações para órgãos públicos federais e estaduais de alta demanda e grande escala. Participação em decisões arquiteturais de sistemas de microsserviços. Atuação fullstack, condução de code reviews e elaboração de documentação técnica e funcional.',
        en: 'Development and architecture of applications for high-demand federal and state public agencies at large scale. Participation in architectural decisions for microservices systems. Full-stack work, code reviews and technical/functional documentation.',
      },
    },
    {
      period:  { pt: '2021 — 2023', en: '2021 — 2023' },
      role:    { pt: 'PHP Fullstack Developer', en: 'PHP Fullstack Developer' },
      company: 'DevSquad',
      desc: {
        pt: 'Desenvolvimento de aplicações SaaS (single e multi-tenant). Cobertura de testes mantida acima de 90%. Gerenciamento e monitoramento de ambientes cloud. Participação ativa em code reviews.',
        en: 'Development of SaaS applications (single and multi-tenant). Test coverage maintained above 90%. Cloud environment management and monitoring. Active participation in code reviews.',
      },
    },
    {
      period:  { pt: '2021', en: '2021' },
      role:    { pt: 'Web Developer', en: 'Web Developer' },
      company: 'Yogha',
      desc: {
        pt: 'Desenvolvimento de novas funcionalidades, correção de bugs, testes unitários e integrações com APIs externas.',
        en: 'Development of new features, bug fixes, unit testing and integrations with external APIs.',
      },
    },
    {
      period:  { pt: '2020 — 2021', en: '2020 — 2021' },
      role:    { pt: 'Coordenador de TI', en: 'IT Coordinator' },
      company: 'Laboratório Roseanne Dore',
      desc: {
        pt: 'Liderança da equipe de TI, gestão de infraestrutura, contratos e projetos de software. Coordenação de migração de ERP e implantação de soluções de comunicação, monitoramento e automação.',
        en: 'IT team leadership, infrastructure management, contracts and software projects. ERP migration coordination and deployment of communication, monitoring and automation solutions.',
      },
    },
    {
      period:  { pt: '2014 — 2020', en: '2014 — 2020' },
      role:    { pt: 'Analista de TI', en: 'IT Analyst' },
      company: 'Laboratório Roseanne Dore',
      desc: {
        pt: 'Suporte avançado, manutenção de servidores e desenvolvimento de integrações com os principais sistemas da organização.',
        en: 'Advanced support, server maintenance and development of integrations with the organization\'s main systems.',
      },
    },
    {
      period:  { pt: '2014', en: '2014' },
      role:    { pt: 'Estagiário de TI', en: 'IT Intern' },
      company: 'PBPREV — Paraíba Previdência',
      desc: {
        pt: 'Desenvolvimento de relatórios e fórmulas no sistema de folha de pagamento TOTVS, modelagem de banco de dados e controle de versão.',
        en: 'Development of reports and formulas in the TOTVS payroll system, database modeling and version control.',
      },
    },
  ],

  projects: [
    {
      name: { pt: 'Projetos em Órgãos Públicos', en: 'Public Sector Projects' },
      desc: {
        pt: 'Sistemas de grande escala para órgãos públicos federais e estaduais desenvolvidos na Minsait. Aplicações críticas com alta demanda de usuários, foco em segurança, autenticação integrada ao gov.br e Active Directory, documentação APF e cobertura de testes rigorosa.',
        en: 'Large-scale systems for federal and state public agencies developed at Minsait. Mission-critical applications with high user demand, security focus, gov.br and Active Directory authentication, APF documentation and rigorous test coverage.',
      },
      stack: ['PHP', 'Java', 'Laravel', 'Spring', 'Quarkus', 'Angular', 'Vue.js', 'OpenShift'],
    },
    {
      name: 'Jobflo',
      desc: {
        pt: 'Plataforma SaaS multi-tenant para gestão de negócios desenvolvida na DevSquad. Foco em performance, interfaces dinâmicas e integrações com serviços externos de pagamento, comunicação e monitoramento solar.',
        en: 'Multi-tenant SaaS platform for business management developed at DevSquad. Focus on performance, dynamic interfaces and integrations with external payment, communication and solar monitoring services.',
      },
      stack: ['Laravel', 'Vue.js', 'Livewire', 'Alpine.js', 'Tailwind CSS', 'AWS', 'Stripe', 'Aurora Solar'],
      link: 'https://www.jobflo.com/',
    },
    {
      name: 'Transparent Maintenance',
      desc: {
        pt: 'Aplicação SaaS desenvolvida na DevSquad para gestão transparente de manutenções. Solução multi-tenant com foco em comunicação entre prestadores de serviço e clientes.',
        en: 'SaaS application developed at DevSquad for transparent maintenance management. Multi-tenant solution focused on communication between service providers and clients.',
      },
      stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'PostgreSQL'],
      link: 'https://www.transparentmaintenance.com/',
    },
    {
      name: { pt: 'Sistema de Agendamento de Visitas', en: 'Visit Scheduling System' },
      desc: {
        pt: 'Sistema para gerenciar e organizar agendamentos e criar rotas para visitas de colaboradores a clientes. Desenvolvido para organizações de grande porte com foco em escalabilidade e boas práticas.',
        en: 'System to manage and organize appointments and create routes for employee visits to clients. Built for large organizations with a focus on scalability and best practices.',
      },
      stack: ['Laravel', 'MySQL', 'PSR', 'MVC'],
      link: 'https://coleta.roseannedore.com.br/',
    },
    {
      name: 'GreMef',
      desc: {
        pt: 'Sistema desktop desenvolvido em C# para cálculo e visualização gráfica dinâmica de grelhas em elementos finitos. Criado em cooperação ao TCC da engenheira civil Layanne Mary (CREA-PB 1619147963).',
        en: 'Desktop system developed in C# for dynamic calculation and graphical visualization of finite element grids. Created in cooperation with civil engineer Layanne Mary\'s thesis (CREA-PB 1619147963).',
      },
      stack: ['C#', '.Net', 'Visual Studio'],
      link: 'https://drive.google.com/open?id=1NkqLRxQccd9nopObfi0EhuZise02Et8M',
    },
  ],

  education: [
    {
      title: { pt: 'Ensino Superior, Análise e Desenvolvimento de Software', en: 'Bachelor\'s Degree, Software Analysis and Development' },
      inst:  'Estácio',
      year:  '2012 — 2014',
    },
    {
      title: { pt: 'Pós-graduação Lato Sensu — Especialização, Desenvolvimento de Aplicações Web', en: 'Postgraduate Specialization, Web Application Development' },
      inst:  'Unipê — Centro Universitário de João Pessoa',
      year:  { pt: '2018 — o momento', en: '2018 — present' },
    },
    {
      title: { pt: 'AWS para Desenvolvedores: Melhores Práticas e Estratégias', en: 'AWS for Developers: Best Practices and Strategies' },
      inst:  'Minsait',
      year:  { pt: 'Emitido em mai. 2024', en: 'Issued May 2024' },
    },
    {
      title: { pt: 'Desenvolvendo apps mobile e PWAs com Ionic e Angular', en: 'Developing Mobile Apps and PWAs with Ionic and Angular' },
      inst:  'Minsait',
      year:  { pt: 'Emitido em ago. 2023', en: 'Issued Aug 2023' },
    },
  ],

  contact: {
    email:    'jrr.neto@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/neto-rocha/',
    github:   'https://github.com/netorochaa',
    location: { pt: 'Guarabira, PB — Brasil', en: 'Guarabira, PB — Brazil' },
  },
};

/* ═══════════════════════════════════════════════════════════════
   STRINGS — todas as strings traduzíveis
═══════════════════════════════════════════════════════════════ */
const STRINGS = {
  pt: {
    sectionLabel: 'Conversas',
    userRole:     'convidado',
    convTitles: {
      about:      'Quem é José Neto?',
      skills:     'Stack & Tecnologias',
      experience: 'Experiência Profissional',
      projects:   'Projetos em Destaque',
      education:  'Formação & Certificações',
      contact:    'Contato',
    },
    questions: {
      about:      'Quem é José Neto?',
      skills:     'Quais são as principais tecnologias que José Neto domina?',
      experience: 'Qual é a experiência profissional de José Neto?',
      projects:   'Quais projetos José Neto já desenvolveu?',
      education:  'Qual é a formação acadêmica e certificações de José Neto?',
      contact:    'Como entrar em contato com José Neto?',
    },
    aboutText: `José Neto tem 32 anos, é brasileiro, natural do estado da paraíba, cristão, casado e tem um filho.`,
    intros: {
      skills:     'Aqui estão as tecnologias e ferramentas com as quais ele possui conhecimento:',
      experience: 'Tem experiência sólida em desenvolvimento web, atuando em diferentes stacks e projetos:',
      projects:   'Alguns projetos aos quais possuem contribuição de José Neto:',
      education:  'Formação acadêmica e certificações relevantes:',
      contact:    'Fique à vontade para entrar em contato por qualquer um dos canais abaixo:',
    },
    contactLabels: {
      email:    'e-mail',
      linkedin: 'linkedin',
      github:   'github',
      location: 'localização',
    },
    projectLink:  'ver projeto →',
    photoAddHint: 'Adicione sua foto\nem assets/profile.jpg',
    inputHints: {
      about:      'Quais são as skills de José Neto?',
      skills:     'Qual é a experiência profissional?',
      experience: 'Quais projetos ele já desenvolveu?',
      projects:   'Qual é a formação acadêmica?',
      education:  'Como entrar em contato?',
      contact:    'Me fale mais sobre José Neto.',
    },
    thinking: [
      'Pensando...',
      'Lendo contexto...',
      'Analisando...',
      'Planejando resposta...',
      'Buscando...',
      'Sintetizando...',
      'Processando...',
      'Revisando...',
    ],
  },

  en: {
    sectionLabel: 'Conversations',
    userRole:     'guest',
    convTitles: {
      about:      'Who is José Neto?',
      skills:     'Stack & Technologies',
      experience: 'Professional Experience',
      projects:   'Featured Projects',
      education:  'Education & Certifications',
      contact:    'Contact',
    },
    questions: {
      about:      'Who is José Neto?',
      skills:     "What are José Neto's main technologies?",
      experience: "What is José Neto's professional experience?",
      projects:   'What projects has José Neto developed?',
      education:  "What is José Neto's academic background and certifications?",
      contact:    'How to contact José Neto?',
    },
    aboutText: `José Neto is 32 years old, lives in Guarabira in the state of Paraíba, Brazil. He is married to Layanne Mary — they are new parents of José Lucas, who is 6 months old. Fred, a pug, has also been part of the family for 6 years.`,
    intros: {
      skills:     'Here are the technologies and tools I work with on a daily basis:',
      experience: 'I have solid experience in web development, working across different stacks and projects:',
      projects:   'Some of the projects I developed or contributed to:',
      education:  'Academic background and relevant certifications:',
      contact:    'Feel free to reach out through any of the channels below:',
    },
    contactLabels: {
      email:    'email',
      linkedin: 'linkedin',
      github:   'github',
      location: 'location',
    },
    projectLink:  'view project →',
    photoAddHint: 'Add your photo\nat assets/profile.jpg',
    inputHints: {
      about:      "What are José Neto's skills?",
      skills:     'What is his professional experience?',
      experience: 'What projects has he developed?',
      projects:   'What is his educational background?',
      education:  'How to contact José Neto?',
      contact:    'Tell me more about José Neto.',
    },
    thinking: [
      'Thinking...',
      'Reading context...',
      'Analyzing...',
      'Planning response...',
      'Searching...',
      'Synthesizing...',
      'Processing...',
      'Reviewing...',
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE STATE
═══════════════════════════════════════════════════════════════ */
let currentLang = 'pt';

function s() { return STRINGS[currentLang]; }

/* ═══════════════════════════════════════════════════════════════
   CONVERSATION BUILDERS
═══════════════════════════════════════════════════════════════ */
function t(field) {
  // Resolve a bilingual field: either string or {pt, en} object
  if (typeof field === 'string') return field;
  return field[currentLang] || field.pt;
}

function buildContactListHTML() {
  const str = s();
  const c = PORTFOLIO.contact;
  const labels = str.contactLabels;
  return `
    <div class="contact-list">
      <a href="mailto:${c.email}" class="contact-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span class="contact-label">${labels.email}</span>
        <span>${c.email}</span>
      </a>
      <a href="https://${c.linkedin}" target="_blank" class="contact-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
        <span class="contact-label">${labels.linkedin}</span>
        <span>${c.linkedin}</span>
      </a>
      <a href="https://${c.github}" target="_blank" class="contact-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
        </svg>
        <span class="contact-label">${labels.github}</span>
        <span>${c.github}</span>
      </a>
      <div class="contact-item" style="cursor:default;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        <span class="contact-label">${labels.location}</span>
        <span>${t(c.location)}</span>
      </div>
    </div>
  `;
}

function buildAbout() {
  const str = s();
  return {
    title: str.convTitles.about,
    messages: [
      { type: 'user', text: str.questions.about },
      {
        type: 'ai',
        html: `
          <p>${str.aboutText}</p>
          <div class="profile-cards-row">
            <div class="photo-card">
              <div class="photo-frame" id="photo-frame"></div>
              <div class="photo-name">${PORTFOLIO.name}</div>
              <div class="photo-tag">${t(PORTFOLIO.role)}</div>
            </div>
            <a class="photo-card cv-card" href="https://drive.google.com/file/d/1UdSlM0NUWSU2Bnqpg-1mer-B3A6baUuy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <div class="cv-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="12" x2="12" y2="18"/>
                  <polyline points="9 15 12 18 15 15"/>
                </svg>
              </div>
              <div class="photo-name">${currentLang === 'pt' ? 'Currículo' : 'Resume'}</div>
              <div class="photo-tag">${currentLang === 'pt' ? 'Baixar PDF' : 'Download PDF'}</div>
            </a>
          </div>
          ${buildContactListHTML()}
        `,
      },
    ],
  };
}

function buildSkills() {
  const str = s();
  const groups = PORTFOLIO.skills.map(group => `
    <div>
      <div class="skill-group-label">${t(group.label)}</div>
      <div class="skill-tags">${group.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}</div>
    </div>
  `).join('');

  return {
    title: str.convTitles.skills,
    messages: [
      { type: 'user', text: str.questions.skills },
      { type: 'ai', html: `<p>${str.intros.skills}</p><div class="skills-grid">${groups}</div>` },
    ],
  };
}

function buildExperience() {
  const str = s();
  const items = PORTFOLIO.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-period">${t(e.period)}</div>
      <div class="timeline-role">${t(e.role)}</div>
      <div class="timeline-company">${e.company}</div>
      <div class="timeline-desc">${t(e.desc)}</div>
    </div>
  `).join('');

  return {
    title: str.convTitles.experience,
    messages: [
      { type: 'user', text: str.questions.experience },
      { type: 'ai', html: `<p>${str.intros.experience}</p><div class="timeline">${items}</div>` },
    ],
  };
}

function buildProjects() {
  const str = s();
  const cards = PORTFOLIO.projects.map(p => `
    <div class="project-card">
      <div class="project-header">
        <span class="project-name">${t(p.name)}</span>
        <a href="${p.link}" class="project-link" target="_blank">${str.projectLink}</a>
      </div>
      <div class="project-desc">${t(p.desc)}</div>
      <div class="project-stack">${p.stack.map(st => `<span class="stack-tag">${st}</span>`).join('')}</div>
    </div>
  `).join('');

  return {
    title: str.convTitles.projects,
    messages: [
      { type: 'user', text: str.questions.projects },
      { type: 'ai', html: `<p>${str.intros.projects}</p><div class="projects-grid">${cards}</div>` },
    ],
  };
}

function buildEducation() {
  const str = s();
  const items = PORTFOLIO.education.map(e => `
    <div class="cert-item">
      <div class="cert-title">${t(e.title)}</div>
      <div class="cert-inst">${e.inst}</div>
      <div class="cert-year">${typeof e.year === 'object' ? t(e.year) : e.year}</div>
    </div>
  `).join('');

  return {
    title: str.convTitles.education,
    messages: [
      { type: 'user', text: str.questions.education },
      { type: 'ai', html: `<p>${str.intros.education}</p><div class="cert-list">${items}</div>` },
    ],
  };
}

function buildContact() {
  const str = s();
  return {
    title: str.convTitles.contact,
    messages: [
      { type: 'user', text: str.questions.contact },
      { type: 'ai', html: `<p>${str.intros.contact}</p>${buildContactListHTML()}` },
    ],
  };
}

function getConversations() {
  return {
    about:      buildAbout(),
    skills:     buildSkills(),
    experience: buildExperience(),
    projects:   buildProjects(),
    education:  buildEducation(),
    contact:    buildContact(),
  };
}

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE SWITCH
═══════════════════════════════════════════════════════════════ */
// Track visited per language so switching replays animations
const visitedConvsByLang = { pt: new Set(), en: new Set() };

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update sidebar section label
  document.querySelector('.sidebar-section-label').textContent = s().sectionLabel;

  // Update guest label
  const guestLabel = document.getElementById('sidebar-guest-label');
  const guestRole  = document.getElementById('sidebar-guest-role');
  if (guestLabel) guestLabel.textContent = lang === 'pt' ? 'convidado' : 'guest';
  if (guestRole)  guestRole.textContent  = 'guest session';

  // Update sidebar conversation titles
  document.querySelectorAll('.conv-item[data-conv]').forEach(el => {
    const id = el.dataset.conv;
    el.querySelector('span').textContent = s().convTitles[id] || '';
  });

  // Reload current conversation in new language (always animated on lang switch)
  const prev = currentConv;
  currentConv = null;
  loadConversation(prev, true);
}

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function typeText(el, text, speed = 18) {
  return new Promise(resolve => {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.appendChild(cursor);

    function tick() {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i++]);
        setTimeout(tick, speed + (Math.random() * 8 - 4));
      } else {
        cursor.remove();
        resolve();
      }
    }
    tick();
  });
}

function typeBootCmd(el, text, speed = 28) {
  return new Promise(resolve => {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'boot-cursor';
    el.appendChild(cursor);

    function tick() {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i++]);
        setTimeout(tick, speed + (Math.random() * 10 - 5));
      } else {
        resolve();
      }
    }
    tick();
  });
}

function appendBootRow(container, content, className = '', delay = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      const row = document.createElement('div');
      row.className = 'boot-row' + (className ? ' ' + className : '');
      row.innerHTML = content;
      container.appendChild(row);
      resolve();
    }, delay);
  });
}

/* Type text into fake input, then clear on "submit" */
async function typeInInputAndSubmit(text) {
  fakeInputGen++;
  const gen = fakeInputGen;
  if (fakeInputTimer) clearTimeout(fakeInputTimer);

  const inputBar = document.querySelector('.input-bar');
  const textEl   = document.querySelector('.fake-input-text');

  inputBar.classList.remove('input-hidden');
  textEl.textContent = '';

  for (const ch of text) {
    if (gen !== fakeInputGen) return;
    textEl.textContent += ch;
    await sleep(26 + Math.random() * 14);
  }

  if (gen !== fakeInputGen) return;
  await sleep(700);
  if (gen !== fakeInputGen) return;

  textEl.textContent = '';
  inputBar.classList.add('input-hidden');
}

/* Cycle Claude-style thinking phrases */
async function cycleThinkingPhrases(thinkingEl, duration) {
  const phraseEl = thinkingEl.querySelector('.thinking-phase');
  if (!phraseEl) return;

  const phrases = s().thinking;
  let idx = 0;

  const interval = setInterval(async () => {
    phraseEl.classList.add('phrase-fade');
    await sleep(130);
    idx = (idx + 1) % phrases.length;
    if (phraseEl) phraseEl.textContent = phrases[idx];
    phraseEl.classList.remove('phrase-fade');
  }, 420);

  await sleep(duration);
  clearInterval(interval);
}

/* Type the first <p> then fade-in the rest of html content */
async function typeHtmlContent(el, html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  const firstP = tmp.querySelector('p');
  const introText = firstP ? firstP.textContent : '';
  if (firstP) firstP.remove();
  const restHTML = tmp.innerHTML.trim();

  const pEl = document.createElement('p');
  el.appendChild(pEl);
  await typeText(pEl, introText, 13);

  if (restHTML) {
    await sleep(160);
    const restEl = document.createElement('div');
    restEl.innerHTML = restHTML;
    restEl.style.cssText = 'opacity:0;transform:translateY(8px);transition:opacity .45s ease,transform .45s ease';
    el.appendChild(restEl);

    const photoFrame = restEl.querySelector('#photo-frame');
    if (photoFrame) renderPhoto(photoFrame);

    await sleep(30);
    restEl.style.opacity = '1';
    restEl.style.transform = 'translateY(0)';
  }
}

/* ═══════════════════════════════════════════════════════════════
   LOADING ANIMATION
═══════════════════════════════════════════════════════════════ */
async function runLoadingScreen() {
  const cmdLine = document.getElementById('boot-cmd');
  const output  = document.getElementById('boot-output');

  await typeBootCmd(cmdLine, '$ jose-neto --start');
  await sleep(150);

  const bc = cmdLine.querySelector('.boot-cursor');
  if (bc) bc.style.animation = 'none';

  await appendBootRow(output, `<span class="dim">──────────────────────────────────────</span>`, '', 80);
  await appendBootRow(output, `
    <span class="header">⬡ &nbsp;José Neto</span>
    <span class="dim">Model v1.0.1 &nbsp;(2026-03-13)</span>
  `, '', 160);
  await appendBootRow(output, `<span class="dim">──────────────────────────────────────</span>`, '', 240);
  await appendBootRow(output, ``, 'spacer', 280);

  const steps = [
    ['✓', 'Workspace initialized'],
    ['✓', 'Loading portfolio context...'],
    ['✓', 'Professional history analyzed'],
    ['✓', 'Skills & projects loaded'],
    ['✓', 'Ready'],
  ];

  let t = 360;
  for (const [icon, msg] of steps) {
    await appendBootRow(output, `<span class="check">${icon}</span><span>${msg}</span>`, '', t);
    t += 140;
  }

  await sleep(t + 150);

  const screen = document.getElementById('loading-screen');
  screen.classList.add('fade-out');
  await sleep(350);
  screen.style.display = 'none';

  const app = document.getElementById('app');
  app.classList.remove('app-hidden');
  await sleep(30);
  app.classList.add('app-visible');

  await sleep(400);
  loadConversation('about', true);
}

/* ═══════════════════════════════════════════════════════════════
   CONVERSATION RENDERING
═══════════════════════════════════════════════════════════════ */
let currentConv = null;

async function loadConversation(id, animate = false) {
  if (currentConv === id) return;
  currentConv = id;

  const conversations = getConversations();
  const conv = conversations[id];
  if (!conv) return;

  // Update sidebar
  document.querySelectorAll('.conv-item').forEach(el => {
    el.classList.toggle('active', el.dataset.conv === id);
  });

  document.getElementById('terminal-title').textContent = conv.title + ' — José Neto';

  const chatArea = document.getElementById('chat-area');

  // Fade out existing
  const existing = chatArea.querySelector('.conv-wrapper');
  if (existing) {
    existing.style.opacity = '0';
    existing.style.transform = 'translateY(-6px)';
    existing.style.transition = 'opacity .2s ease, transform .2s ease';
    await sleep(200);
  }
  chatArea.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'conv-wrapper';
  chatArea.appendChild(wrapper);

  const visited = visitedConvsByLang[currentLang];
  const alreadyVisited = visited.has(id);
  visited.add(id);

  const shouldAnimate = animate || !alreadyVisited;

  for (let i = 0; i < conv.messages.length; i++) {
    const msg = conv.messages[i];

    if (msg.type === 'user') {
      if (shouldAnimate) await typeInInputAndSubmit(msg.text);
      const el = createUserMsg(msg.text);
      wrapper.appendChild(el);
      chatArea.scrollTop = chatArea.scrollHeight;
      if (shouldAnimate) await sleep(80);
    } else {
      if (shouldAnimate) {
        const thinking = createThinking();
        wrapper.appendChild(thinking);
        chatArea.scrollTop = chatArea.scrollHeight;
        await cycleThinkingPhrases(thinking, 900 + Math.random() * 500);
        thinking.remove();
      }

      const el = createAiMsg();
      wrapper.appendChild(el);
      chatArea.scrollTop = chatArea.scrollHeight;

      const content = el.querySelector('.msg-content');

      if (shouldAnimate) {
        if (msg.html) {
          await typeHtmlContent(content, msg.html);
        } else {
          await typeText(content, msg.text, 14);
        }
      } else {
        content.innerHTML = msg.html || msg.text || '';
        const photoFrame = content.querySelector('#photo-frame');
        if (photoFrame) renderPhoto(photoFrame);
      }
    }

    chatArea.scrollTop = chatArea.scrollHeight;
  }

  animateFakeInput(id);
}

function createUserMsg(text) {
  const div = document.createElement('div');
  div.className = 'msg user';
  div.innerHTML = `
    <div class="msg-avatar">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
    <div class="msg-body">
      <div class="msg-role">${s().userRole}</div>
      <div class="msg-content">${text}</div>
    </div>
  `;
  return div;
}

function createAiMsg() {
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = `
    <div class="msg-avatar claude-avatar">
      <svg class="claude-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L21.196 7V17L12 22L2.804 17V7L12 2Z"/>
      </svg>
    </div>
    <div class="msg-body">
      <div class="msg-role">claude</div>
      <div class="msg-content"></div>
    </div>
  `;
  return div;
}

function createThinking() {
  const phrases = s().thinking;
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = `
    <div class="msg-avatar claude-avatar">
      <svg class="claude-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L21.196 7V17L12 22L2.804 17V7L12 2Z"/>
      </svg>
    </div>
    <div class="msg-body">
      <div class="msg-role">claude</div>
      <div class="msg-content">
        <div class="thinking-row">
          <span class="thinking-phase">${phrases[0]}</span>
          <span class="thinking-dots"><span></span><span></span><span></span></span>
        </div>
      </div>
    </div>
  `;
  return div;
}

function renderPhoto(frame) {
  const str = s();
  const img = new Image();
  img.src = PORTFOLIO.photo;
  img.alt = PORTFOLIO.name;
  img.onload = () => { frame.innerHTML = ''; frame.appendChild(img); };
  img.onerror = () => {
    frame.innerHTML = `
      <div class="photo-placeholder">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span>${str.photoAddHint}</span>
      </div>
    `;
  };
}

/* ═══════════════════════════════════════════════════════════════
   FAKE INPUT — hint typewriter
═══════════════════════════════════════════════════════════════ */
let fakeInputTimer = null;
let fakeInputGen   = 0;   // generation counter — cancels stale typing loops

async function animateFakeInput(convId) {
  fakeInputGen++;
  const gen = fakeInputGen;
  if (fakeInputTimer) clearTimeout(fakeInputTimer);

  const hint     = s().inputHints[convId] || '';
  const inputBar = document.querySelector('.input-bar');
  const textEl   = document.querySelector('.fake-input-text');

  textEl.textContent = '';

  await sleep(1200);
  if (gen !== fakeInputGen) return;

  for (const ch of hint) {
    if (gen !== fakeInputGen) return;
    textEl.textContent += ch;
    await sleep(35 + Math.random() * 20);
  }

  if (gen !== fakeInputGen) return;

  fakeInputTimer = setTimeout(async () => {
    while (textEl.textContent.length > 0) {
      if (gen !== fakeInputGen) return;
      textEl.textContent = textEl.textContent.slice(0, -1);
      await sleep(18);
    }
  }, 3500);
}

/* ═══════════════════════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════════════════════ */
// Sidebar collapse
function updateSidebarReopenBtn() {
  const collapsed = document.getElementById('sidebar').classList.contains('collapsed');
  document.getElementById('sidebar-reopen').style.display = collapsed ? 'flex' : 'none';
}
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('collapsed');
  updateSidebarReopenBtn();
});
document.getElementById('sidebar-reopen').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('collapsed');
  updateSidebarReopenBtn();
});

// Sidebar nav
document.getElementById('conv-list').addEventListener('click', e => {
  const item = e.target.closest('.conv-item');
  if (!item) return;
  const id = item.dataset.conv;
  if (id && id !== currentConv) loadConversation(id, true);
});

// Language toggle
document.getElementById('lang-toggle').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  switchLang(btn.dataset.lang);
});

// Keyboard navigation
const convOrder = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

document.addEventListener('keydown', e => {
  const idx = convOrder.indexOf(currentConv);
  if (e.key === 'ArrowDown' && idx < convOrder.length - 1) loadConversation(convOrder[idx + 1], true);
  if (e.key === 'ArrowUp'   && idx > 0)                   loadConversation(convOrder[idx - 1], true);
  if (e.key === 'Escape') document.getElementById('chat-area').scrollTop = 0;
});

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  runLoadingScreen();
});
