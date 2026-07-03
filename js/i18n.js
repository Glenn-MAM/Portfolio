/**
 * i18n.js — Système de traduction FR/EN
 * Portfolio Glenn MADZOU-A-MIERE
 */

const translations = {
  fr: {
    /* ── NAVIGATION ── */
    'nav.home':     'Accueil',
    'nav.projects': 'Mes Projets',
    'nav.journey':  'Mon Parcours',
    'nav.hobbies':  'Hobbies',
    'nav.contact':  'Contact',

    /* ── INDEX : HERO ── */
    'hero.greeting': 'Bonjour, je suis <span class="text-highlight">Glenn</span>',
    'hero.text':     'J\'ai <span id="age-span" class="text-highlight bold"></span> ans. Passionné par la data et le développement, je construis des solutions pour éclairer la prise de décision et optimiser les processus.',
    'hero.btn.journey':  'Voir mon <span class="bold">Parcours</span> <i class="fa-solid fa-arrow-right"></i>',
    'hero.btn.projects': '<i class="fa-solid fa-folder-open"></i> Mes Projets',

    /* ── INDEX : PROJETS À LA UNE ── */
    'featured.title':       'Projets à la une',
    'featured.subtitle':    'Découvrez l\'intégralité de mes travaux sur la page dédiée.',
    'featured.slide1.title':'Analyse Auto-Écoles',
    'featured.slide1.desc': 'Webscraping, API &amp; Cartographie Interactive',
    'featured.slide2.title':'Investissement Immobilier',
    'featured.slide2.desc': 'Préparation de données et Dashboard dynamique',
    'featured.slide3.title':'Tableau de bord Décisionnel',
    'featured.slide3.desc': 'État de l\'art des étudiants de l\'IUT de Poitiers',
    'featured.all':         'Voir tous les projets',

    /* ── INDEX : HOBBIES ── */
    'index.hobbies.title':    'Ce qui m\'anime',
    'index.hobbies.subtitle': 'Mes centres d\'intérêt et passions en dehors de la donnée.',
    'index.hobbies.video':    'Montage Photo/Vidéo',
    'index.hobbies.basket':   'Basket-ball',
    'index.hobbies.chess':    'Échecs',

    /* ── INDEX : CONTACT ── */
    'contact.title':          'Restons en contact',
    'contact.email.label':    'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.link':  'Mon Profil',
    'contact.location.label': 'Localisation',

    /* ── FOOTER ── */
    'footer': '© 2026 Glenn. Tous droits réservés.',

    /* ── PAGE PROJETS ── */
    'projects.header.title':    'Portfolio Projets',
    'projects.header.subtitle': 'Les projets menés tout au long de mon parcours s\'inscrivent dans des cadres collaboratifs proches du monde professionnel. Ils m\'ont permis de travailler sur des problématiques complètes, de la compréhension du besoin jusqu\'à la mise en œuvre technique, tout en renforçant mon autonomie et ma capacité à livrer des solutions fonctionnelles.',
    'modal.btn.download': '<i class="fa-solid fa-download"></i> Télécharger',
    'modal.btn.demo':     '<i class="fa-solid fa-eye"></i> Voir la démo',
    'modal.label.year':   'Année',
    'modal.label.duration': 'Durée',

    /* ── PAGE PARCOURS ── */
    'journey.title':    'Mon Parcours',
    'journey.subtitle': 'formations, stages et alternance',
    'journey.intro':    'Voici une sélection des étapes majeures de mon parcours académique et professionnel.',

    'journey.abb.title': 'Stage Assistant Responsable pricing et data',
    'journey.abb.period': 'Avril - Septembre 2026',
    'journey.abb.desc':  'Ce stage m\'a permis de travailler sur des missions centrées autour de l\'analyse de données tarifaires. J\'ai analysé et structuré des données de prix pour identifier les tendances du marché et optimiser les stratégies tarifaires. J\'ai exploité les outils de pricing et les plateformes d\'analyse de données pour évaluer la performance des devis et mesurer l\'impact des modifications tarifaires sur la rentabilité.<br><br>J\'ai créé des analyses comparatives et des rapports basés sur les données pour supporter la prise de décision commerciale et l\'identification des opportunités d\'optimisation. J\'ai également participé à la validation des données tarifaires dans les systèmes, en assurant la qualité et la cohérence des informations selon les standards de la Business Area. Cette expérience m\'a permis de développer des compétences solides en analyse de la cohérence et la qualité de la donnée, en visualisation de tendances tarifaires et en utilisation d\'outils de business intelligence pour créer des insights commerciaux actionnables.',

    'journey.m2.title':  'Master 2 MSI — Parcours SIA',
    'journey.m2.period': '2024 - 2026',
    'journey.m2.desc':   'Le master MSI s\'appuie sur une approche transversale mêlant technique, organisation et management. Les projets collectifs et études de cas réels m\'amènent à réfléchir non seulement à la solution technique, mais aussi à son intégration dans l\'entreprise. Cette infrastructure pédagogique favorise la prise de recul, la coordination en équipe et la conception de systèmes d\'information cohérents et durables.',

    'journey.dsh.title':  'Alternance Chargé de missions',
    'journey.dsh.period': '2023 - 2024',
    'journey.dsh.desc':   'Au sein d\'une organisation dotée d\'un système d\'information centralisé, cette alternance m\'a permis de travailler sur des données utilisées quotidiennement par les équipes. Le contexte ERP et décisionnel m\'a appris à produire des analyses fiables, compréhensibles et directement utiles, tout en collaborant avec des profils variés (utilisateurs, métiers et prestataires). Cette immersion a renforcé ma vision globale du SI.',

    'journey.seolis.title':  'Stage Data Analyst Assistant',
    'journey.seolis.period': 'Avril - Juin 2023',
    'journey.seolis.desc':   'Cette première expérience s\'est déroulée dans un environnement structuré, au contact de différents acteurs métiers. J\'y ai découvert l\'importance des processus et des outils partagés dans la gestion de la donnée. Le cadre m\'a permis de travailler de manière autonome tout en m\'inscrivant dans une organisation existante, en prenant en compte les contraintes opérationnelles réelles.',

    'journey.but.title':  'BUT Science des Données - Parcours VCOD',
    'journey.but.period': '2021-2024',
    'journey.but.desc':   'Cette formation m\'a offert un cadre très professionnalisant, rythmé par un grand nombre de projets menés en équipe. Cette organisation m\'a appris à collaborer efficacement, à répartir les rôles et à livrer des productions exploitables dans des délais contraints. J\'y ai développé des bases solides en analyse et visualisation de données, tout en comprenant comment la donnée s\'intègre dans une logique de décision collective.',

    'journey.bac.title':  'Baccalauréat Scientifique',
    'journey.bac.period': '2021',
    'journey.bac.desc':   'Obtention de mon baccalauréat scientifique.',

    /* ── PAGE HOBBIES ── */
    'hobbies.page.title':    'Mes Passions',
    'hobbies.page.subtitle': 'Ce qui m\'anime et nourrit ma créativité en dehors de la data.',
    'hobbies.montage.title': 'Vlog et Montage Vidéo',
    'hobbies.montage.desc':  'Je réalise régulièrement des montages pour des projets personnels. Au-delà de la technique, le montage m\'a appris l\'art du <strong>Storytelling</strong> : savoir assembler des éléments bruts pour raconter une histoire cohérente. Cette exigence du rythme et du détail m\'aide aujourd\'hui à structurer mes présentations de données.',
    'hobbies.basket.title':  'Basket-ball',
    'hobbies.basket.desc':   'Pratiqué en club depuis l\'adolescence, ce sport est mon école de la rigueur. Il m\'a forgé un fort <strong>esprit d\'équipe</strong> et une capacité à prendre des décisions rapides sous pression. J\'y ai appris que la performance individuelle ne vaut rien sans une coordination collective.',
    'hobbies.chess.title':   'Échecs',
    'hobbies.chess.desc':    'Passionné par la stratégie, je pratique quotidiennement en ligne. Ce jeu aiguise ma capacité d\'<strong>anticipation</strong> et de résolution de problèmes. Analyser les motifs et calculer les variantes sont des gymnastiques mentales que j\'applique dans ma vie professionnelle.',
    'hobbies.bonus.title':   'Les bonus',
    'hobbies.bonus.desc':    'Le reste de mes activités.',
  },

  en: {
    /* ── NAVIGATION ── */
    'nav.home':     'Home',
    'nav.projects': 'My Projects',
    'nav.journey':  'My Journey',
    'nav.hobbies':  'Hobbies',
    'nav.contact':  'Contact',

    /* ── INDEX : HERO ── */
    'hero.greeting': 'Hello, I am <span class="text-highlight">Glenn</span>',
    'hero.text':     'I am <span id="age-span" class="text-highlight bold"></span> years old. Passionate about data and development, I build solutions to support decision-making and optimize processes.',
    'hero.btn.journey':  'My <span class="bold">Journey</span> <i class="fa-solid fa-arrow-right"></i>',
    'hero.btn.projects': '<i class="fa-solid fa-folder-open"></i> My Projects',

    /* ── INDEX : FEATURED PROJECTS ── */
    'featured.title':       'Featured Projects',
    'featured.subtitle':    'Discover all my work on the dedicated page.',
    'featured.slide1.title':'Driving Schools Analysis',
    'featured.slide1.desc': 'Web Scraping, API &amp; Interactive Mapping',
    'featured.slide2.title':'Real Estate Investment',
    'featured.slide2.desc': 'Data Preparation &amp; Dynamic Dashboard',
    'featured.slide3.title':'Decision Dashboard',
    'featured.slide3.desc': 'Student analytics for IUT Poitiers',
    'featured.all':         'View all projects',

    /* ── INDEX : HOBBIES ── */
    'index.hobbies.title':    'What drives me',
    'index.hobbies.subtitle': 'My interests and passions beyond data.',
    'index.hobbies.video':    'Photo/Video Editing',
    'index.hobbies.basket':   'Basketball',
    'index.hobbies.chess':    'Chess',

    /* ── INDEX : CONTACT ── */
    'contact.title':          "Let's stay in touch",
    'contact.email.label':    'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.link':  'My Profile',
    'contact.location.label': 'Location',

    /* ── FOOTER ── */
    'footer': '© 2026 Glenn. All rights reserved.',

    /* ── PROJETS PAGE ── */
    'projects.header.title':    'Project Portfolio',
    'projects.header.subtitle': 'The projects carried out throughout my academic and professional journey are set in collaborative frameworks close to the professional world. They allowed me to work on complete problems, from understanding requirements to technical implementation, while strengthening my autonomy and ability to deliver functional solutions.',
    'modal.btn.download': '<i class="fa-solid fa-download"></i> Download',
    'modal.btn.demo':     '<i class="fa-solid fa-eye"></i> View demo',
    'modal.label.year':   'Year',
    'modal.label.duration': 'Duration',

    /* ── PARCOURS PAGE ── */
    'journey.title':    'My Journey',
    'journey.subtitle': 'education, internships & work-study',
    'journey.intro':    'Here is a selection of the major milestones of my academic and professional journey.',

    'journey.abb.title':  'Pricing & Data Assistant Internship',
    'journey.abb.period': 'April - September 2026',
    'journey.abb.desc':   'This internship allowed me to work on missions centered around pricing data analysis. I analyzed and structured price data to identify market trends and optimize pricing strategies. I leveraged pricing tools and data analysis platforms to evaluate quote performance and measure the impact of pricing modifications on profitability.<br><br>I created comparative analyses and data-based reports to support commercial decision-making and identify optimization opportunities. I also participated in validating pricing data in systems, ensuring quality and consistency of information according to Business Area standards. This experience helped me develop solid skills in data quality and consistency analysis, pricing trend visualization, and the use of business intelligence tools to create actionable commercial insights.',

    'journey.m2.title':  'Master 2 MSI — SIA Track',
    'journey.m2.period': '2024 - 2026',
    'journey.m2.desc':   'The MSI master\'s degree is built on a transversal approach combining technical, organizational and management perspectives. Collaborative projects and real case studies lead me to think not only about the technical solution, but also about its integration into the organization. This pedagogical framework fosters perspective-taking, team coordination and the design of coherent and sustainable information systems.',

    'journey.dsh.title':  'Work-Study — Project Officer',
    'journey.dsh.period': '2023 - 2024',
    'journey.dsh.desc':   'Within an organization with a centralized information system, this work-study program allowed me to work on data used daily by teams. The ERP and decision-making context taught me to produce reliable, understandable and directly useful analyses, while collaborating with varied profiles (users, business teams and service providers). This immersion strengthened my overall vision of information systems.',

    'journey.seolis.title':  'Data Analyst Assistant Internship',
    'journey.seolis.period': 'April - June 2023',
    'journey.seolis.desc':   'This first experience took place in a structured environment, in contact with various business stakeholders. I discovered the importance of processes and shared tools in data management. The framework allowed me to work autonomously while fitting into an existing organization, taking into account real operational constraints.',

    'journey.but.title':  'Bachelor of Data Science — VCOD Track',
    'journey.but.period': '2021-2024',
    'journey.but.desc':   'This program offered a highly professional framework, structured around a large number of team projects. This organization taught me to collaborate effectively, distribute roles and deliver usable outputs within tight deadlines. I developed solid foundations in data analysis and visualization, while understanding how data integrates into a collective decision-making logic.',

    'journey.bac.title':  'Scientific Baccalaureate',
    'journey.bac.period': '2021',
    'journey.bac.desc':   'Completion of my scientific baccalaureate.',

    /* ── HOBBIES PAGE ── */
    'hobbies.page.title':    'My Passions',
    'hobbies.page.subtitle': 'What drives me and nurtures my creativity beyond data.',
    'hobbies.montage.title': 'Vlogging & Video Editing',
    'hobbies.montage.desc':  'I regularly create edits for personal projects. Beyond the technical side, video editing has taught me the art of <strong>Storytelling</strong>: assembling raw elements to tell a coherent story. This attention to rhythm and detail helps me structure my data presentations today.',
    'hobbies.basket.title':  'Basketball',
    'hobbies.basket.desc':   'Practiced in a club since adolescence, this sport is my school of discipline. It has built a strong <strong>team spirit</strong> and the ability to make quick decisions under pressure. I learned that individual performance means nothing without collective coordination.',
    'hobbies.chess.title':   'Chess',
    'hobbies.chess.desc':    'Passionate about strategy, I practice daily online. This game sharpens my ability to <strong>anticipate</strong> and solve problems. Analyzing patterns and calculating variations are mental exercises I apply in my professional life.',
    'hobbies.bonus.title':   'Bonus Activities',
    'hobbies.bonus.desc':    'My other activities.',
  }
};

/* ────────────────────────────────────────────
   Applique les traductions à tous les éléments
   avec l'attribut data-i18n sur la page courante
──────────────────────────────────────────── */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  /* Gestion des cartes projet (data-en-title, data-en-desc, data-en-duration) */
  document.querySelectorAll('.project-card').forEach(card => {
    if (lang === 'en') {
      if (!card._fr) {
        card._fr = {
          title:    card.dataset.title    || '',
          desc:     card.dataset.desc     || '',
          duration: card.dataset.duration || '',
        };
      }
      if (card.dataset.enTitle)    card.dataset.title    = card.dataset.enTitle;
      if (card.dataset.enDesc)     card.dataset.desc     = card.dataset.enDesc;
      if (card.dataset.enDuration) card.dataset.duration = card.dataset.enDuration;
    } else {
      if (card._fr) {
        card.dataset.title    = card._fr.title;
        card.dataset.desc     = card._fr.desc;
        card.dataset.duration = card._fr.duration;
      }
    }
  });

  /* Gestion des textes de l'overlay des cartes projet */
  document.querySelectorAll('.project-overlay h3[data-i18n-overlay]').forEach(el => {
    const key = el.getAttribute('data-i18n-overlay');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  /* Recalcule l'âge si le span a été recréé par la traduction */
  if (typeof calculateAge === 'function') calculateAge();

  /* Met à jour l'attribut lang du document */
  document.documentElement.lang = lang;

  /* Sauvegarde la préférence */
  localStorage.setItem('lang', lang);

  /* Met à jour les boutons actifs */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ────────────────────────────────────────────
   Initialise le système i18n au chargement
──────────────────────────────────────────── */
function initI18n() {
  const savedLang = localStorage.getItem('lang') || 'fr';

  /* Applique immédiatement si la langue sauvegardée est l'anglais */
  if (savedLang === 'en') {
    applyTranslations('en');
  } else {
    /* Met quand même à jour les boutons actifs pour le français */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === 'fr');
    });
    /* Calcule l'âge pour le français aussi */
    if (typeof calculateAge === 'function') calculateAge();
  }

  /* Attache les événements aux boutons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
      /* Recalcule l'âge après changement de langue */
      if (typeof calculateAge === 'function') calculateAge();
    });
  });
}

/* Lance l'initialisation dès que le DOM est prêt */
document.addEventListener('DOMContentLoaded', initI18n);
