/**
 * Single source of truth for all site content, in both languages.
 * Add a new section by pushing an object into CONTENT.<lang>.sections — the
 * renderer in main.js picks it up automatically based on its `type`.
 * Keep CONTENT.fr and CONTENT.en structurally identical (same ids, same
 * section order) so switching languages doesn't reshuffle the page.
 *
 * Supported section types: "text", "timeline", "grid", "skills"
 */
/**
 * Tooltip text for the skill-level symbols rendered in the "skills" section.
 * Levels: 3 = ★ (mastery, professional projects), 2 = ↗ (strong interest,
 * personal/academic project), 1 = no symbol (light exploration).
 */
const SKILL_LEVEL_LABELS = {
  fr: {
    3: "Maîtrise, projets professionnels",
    2: "Bon intérêt, projet perso ou universitaire",
    1: "Exploration légère",
  },
  en: {
    3: "Mastery, professional projects",
    2: "Strong interest, personal or academic project",
    1: "Light exploration",
  },
};

const CONTENT = {
  fr: {
    meta: {
      name: "Adrien Halnaut",
      title: "Docteur en Informatique · Ingénieur Logiciel",
      heroEyebrow: "Curriculum Vitae",
      tagline: "Je conçois des outils qui rendent compréhensible le complexe - des réseaux de neurones profonds aux systèmes de données.",
      email: "adrien.halnaut@proton.me",
      phone: "+33 (0)6 06 43 86 59",
      github: "https://github.com/eikofee",
      location: "Metz, France",
      avatarInitials: "AH",
    },

    nav: [
      { label: "Accueil", href: "#hero" },
      { label: "À propos", href: "#about" },
      { label: "Expérience", href: "#experience" },
      { label: "Formation", href: "#education" },
      { label: "Compétences", href: "#skills" },
      { label: "Projets", href: "#projects" },
      { label: "Publications", href: "#publications" },
      { label: "Contact", href: "#contact" },
    ],

    contact: {
      title: "Discutons",
      subtitle: "Envie de collaborer ou juste dire bonjour ? N'hésitez pas à me contacter.",
      githubLabel: "GitHub",
    },

    footer: {
      tagline: "construit avec HTML, CSS et JavaScript.",
    },

    sections: [
      {
        id: "about",
        type: "text",
        title: "À propos",
        eyebrow: "Qui suis-je",
        body: [
          "Docteur en informatique, je travaille aujourd'hui comme ingénieur logiciel chez Ellipsys, au Luxembourg. Ma thèse au LaBRI (Université de Bordeaux) portait sur la visualisation des réseaux de neurones profonds et l'IA explicable (XAI) - comment rendre lisibles des décisions prises par des modèles opaques.",
          "J'aime les problèmes qui mélangent rigueur algorithmique et design d'interface : construire des outils qui transforment des données complexes en représentations compréhensibles, que ce soit pour des chercheurs ou les plus néophytes.",
        ],
      },
      {
        id: "experience",
        type: "timeline",
        title: "Expérience professionnelle",
        eyebrow: "Parcours",
        items: [
          {
            period: "Oct 2024 — Présent",
            role: "Ingénieur Logiciel",
            org: "Ellipsys",
            location: "Bettembourg, Luxembourg",
            description: "Développement logiciel en entreprise, sur la traçabilité des données produites dans des grands systèmes de données.",
            tags: ["Rust", "SQL", "Dagster", "Java"],
          },
          {
            period: "Fév 2023 — Juin 2023",
            role: "Attaché Temporaire d'Enseignement et de Recherche",
            org: "Université de Bordeaux",
            location: "Bordeaux, France",
            description: "Enseignement en informatique en parallèle de la fin de thèse.",
            tags: ["Pédagogie", "Enseignement"],
          },
          {
            period: "Nov 2019 — Mar 2024",
            role: "Doctorant Chercheur",
            org: "LaBRI",
            location: "Bordeaux, France",
            description: "Visualisation pour réseaux de neurones profonds sous l'encadrement de David Auber et Romain Giot.",
            tags: ["XAI", "Deep Learning", "Visualisation d'information"],
          },
          {
            period: "Avr 2019 — Août 2019",
            role: "Stagiaire de Recherche",
            org: "LaBRI",
            location: "Bordeaux, France",
            description: "Stage encadré par David Auber, en préparation du doctorat.",
            tags: ["XAI", "Deep Learning", "Visualisation d'information"],
          },
          {
            period: "2017 — 2019",
            role: "Tuteur en Informatique",
            org: "Université de Bordeaux",
            location: "Bordeaux, France",
            description: "Accompagnement d'étudiants en difficulté sur les enseignements d'informatique en parallèle des études.",
            tags: ["Pédagogie", "Enseignement"],
          },
          {
            period: "Juil 2017 — Sep 2017",
            role: "Stagiaire de Recherche",
            org: "LaBRI",
            location: "Bordeaux, France",
            description: "Projet sur les grammaires d'arbres et de mots, sous la direction de Géraud Sénizergues.",
            tags: ["Théorie des langages"],
          },
          {
            period: "Mai 2016 — Août 2016",
            role: "Stagiaire Développeur",
            org: "EA4T, ENSEIRB MATMECA",
            location: "Bordeaux, France",
            description: "Contribution à un framework à grande échelle : parsing de données et intégration en base de données.",
            tags: ["Parsing", "Bases de données", ".NET"],
          },
        ],
      },
      {
        id: "education",
        type: "timeline",
        title: "Formation",
        eyebrow: "Parcours académique",
        compact: true,
        items: [
          {
            period: "2019 — 2024",
            role: "Doctorat en Informatique",
            org: "LaBRI, Université de Bordeaux",
            location: "Bordeaux, France",
            description: "Visualisation des réseaux de neurones profonds. Directeurs : David Auber, Romain Giot.",
            tags: [],
          },
          {
            period: "2017 — 2019",
            role: "Master Ingénierie Logicielle",
            org: "Université de Bordeaux",
            location: "Bordeaux, France",
            description: "Classé 8/42, mention Très Bien.",
            tags: [],
          },
          {
            period: "2014 — 2017",
            role: "Licence Informatique",
            org: "Université de Bordeaux",
            location: "Bordeaux, France",
            description: "Classé 15/117, mention Assez Bien.",
            tags: [],
          },
          {
            period: "2013 — 2014",
            role: "CPGE MPSI (1ère année)",
            org: "Prytanée National Militaire",
            location: "La Flèche, France",
            description: "",
            tags: [],
          },
          {
            period: "2012 — 2013",
            role: "Baccalauréat Scientifique",
            org: "Lycée Victor Duruy",
            location: "Bordeaux, France",
            description: "Option Sciences de l'Ingénieur, mention Assez Bien.",
            tags: [],
          },
        ],
      },
      {
        id: "skills",
        type: "skills",
        title: "Compétences techniques",
        eyebrow: "Boîte à outils",
        note: "★ maîtrise, projets professionnels · ↗ bon intérêt, projet personnel ou universitaire · sans symbole : exploration légère",
        groups: [
          {
            label: "Langages",
            items: [
              { name: "Rust", level: 3 },
              { name: "SQL (PostgreSQL, DuckDB, SQLite)", level: 2 },
              { name: "C# / .NET", level: 3 },
              { name: "Java", level: 2 },
              { name: "Python (NumPy, Keras)", level: 2 },
              { name: "JavaScript", level: 2 },
              { name: "C / C++", level: 2 },
              { name: "F#", level: 1 },
              { name: "Scala", level: 1 },
              { name: "Julia", level: 1 },
            ],
          },
          {
            label: "Outils & Frameworks",
            items: [
              { name: "Unity", level: 3 },
              { name: "Dagster", level: 3 },
              { name: "Docker", level: 3 },
              { name: "Git", level: 2 },
              { name: "Travis CI", level: 1 },
              { name: "Unix", level: 2 },
            ],
          },
          {
            label: "Langues",
            items: ["Français (natif)", "Anglais (B2 — TOEIC 835/990)", "Japonais (débutant, ~JLPT N4)"],
          },
        ],
      },
      // {
      //   id: "projects",
      //   type: "grid",
      //   title: "Projets & Outils",
      //   eyebrow: "Ce que je construis",
      //   note: "Section évolutive — de nouveaux projets seront ajoutés au fil du temps.",
      //   cards: [
      //     {
      //       title: "Cette page",
      //       description: "Un CV pensé comme un petit système modulaire : ajouter un projet, c'est ajouter une entrée dans un fichier de données, pas réécrire une page.",
      //       tags: ["HTML", "CSS", "JavaScript"],
      //       link: "https://github.com/eikofee/eikofee.github.io",
      //       linkLabel: "Voir le code source",
      //     },
      //   ],
      // },
      {
        id: "publications",
        type: "grid",
        title: "Publications",
        eyebrow: "Recherche",
        cards: [
          {
            title: "Méthodes et outils d'analyse visuelle pour la compréhension, l'optimisation et l'élaboration de modèles de réseaux de neurones profonds",
            description: "Thèse de doctorat, Université de Bordeaux, soutenue le 22 mars 2024.",
            tags: ["Thèse", "XAI", "Visualisation"],
            link: "https://theses.hal.science/tel-04633751",
            linkLabel: "Lire la thèse",
          },
          {
            title: "Deep Dive into Deep Neural Networks with Flows",
            description: "VISIGRAPP, 2020.",
            tags: ["XAI", "Visualisation"],
            image: "assets/img/publications/deep-dive.png",
            link: "https://hal.science/hal-02492393",
            linkLabel: "Lire sur HAL",
          },
          {
            title: "Samples Classification Analysis Across DNN Layers with Fractal Curves",
            description: "ICPR Workshop, 2021.",
            tags: ["Deep Learning", "Visualisation"],
            image: "assets/img/publications/fractal.png",
            link: "https://hal.science/hal-03111634",
            linkLabel: "Lire sur HAL",
          },
          {
            title: "VRGrid, Efficient Transformation of 2D Data into Pixel Grid Layout",
            description: "Information Visualisation Conference, 2022.",
            tags: ["Visualisation", "Pixel-based layout"],
            image: "assets/img/publications/vrgrid.png",
            link: "https://hal.science/hal-03700588v1",
            linkLabel: "Lire sur HAL",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      name: "Adrien Halnaut",
      title: "PhD in Computer Science - Software Engineer",
      heroEyebrow: "Resume",
      tagline: "I build tools that make complex things understandable - from deep neural networks to data systems.",
      email: "adrien.halnaut@proton.me",
      phone: "+33 (0)6 06 43 86 59",
      github: "https://github.com/eikofee",
      location: "Metz, France",
      avatarInitials: "AH",
    },

    nav: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Publications", href: "#publications" },
      { label: "Contact", href: "#contact" },
    ],

    contact: {
      title: "Let's talk",
      subtitle: "Interested in collaborating, or just want to say hi? Feel free to reach out.",
      githubLabel: "GitHub",
    },

    footer: {
      tagline: "built with HTML, CSS and JavaScript.",
    },

    sections: [
      {
        id: "about",
        type: "text",
        title: "About",
        eyebrow: "Who I am",
        body: [
          "I hold a PhD in Computer Science and currently work as a Software Engineer at Ellipsys, in Luxembourg. My PhD at LaBRI (University of Bordeaux) focused on the visualization of deep neural networks and explainable AI (XAI) - making decisions made by opaque models readable.",
          "I enjoy problems that mix algorithmic rigor with interface design: building tools that turn complex data into representations people can actually understand, whether for researchers or neophytes.",
        ],
      },
      {
        id: "experience",
        type: "timeline",
        title: "Work Experience",
        eyebrow: "Track record",
        items: [
          {
            period: "Oct 2024 — Present",
            role: "Software Engineer",
            org: "Ellipsys",
            location: "Bettemburg, Luxembourg",
            description: "Software engineering in industry, including work with Dagster for data pipeline orchestration.",
            tags: ["Rust", "SQL", "Dagster", "Java"],
          },
          {
            period: "Feb 2023 — Jun 2023",
            role: "Temporary Teaching & Research Associate",
            org: "University of Bordeaux",
            location: "Bordeaux, France",
            description: "Teaching and research in computer science alongside finishing the PhD.",
            tags: ["Teaching"],
          },
          {
            period: "Nov 2019 — Mar 2024",
            role: "PhD Researcher",
            org: "LaBRI",
            location: "Bordeaux, France",
            description: "Visualization for deep neural network decisions supervised by David Auber and Romain Giot.",
            tags: ["XAI", "Deep Learning", "Information visualization"],
          },
          {
            period: "Apr 2019 — Aug 2019",
            role: "Research Intern",
            org: "LaBRI",
            location: "Bordeaux, France",
            description: "Internship supervised by David Auber, in preparation for doctoral studies.",
            tags: ["Research"],
          },
          {
            period: "2017 — 2019",
            role: "Computer Science Tutor",
            org: "University of Bordeaux",
            location: "Bordeaux, France",
            description: "Supported struggling students in computer science courses.",
            tags: ["Teaching"],
          },
          {
            period: "Jul 2017 — Sep 2017",
            role: "Research Intern",
            org: "LaBRI",
            location: "Bordeaux, France",
            description: "Project on tree and word grammars, supervised by Géraud Sénizergues.",
            tags: ["Formal language theory"],
          },
          {
            period: "May 2016 — Aug 2016",
            role: "Development Intern",
            org: "EA4T, ENSEIRB MATMECA",
            location: "Bordeaux, France",
            description: "Contributed to a large-scale framework: data parsing and database integration.",
            tags: ["Parsing", "Databases", ".NET"],
          },
        ],
      },
      {
        id: "education",
        type: "timeline",
        title: "Education",
        eyebrow: "Academic background",
        compact: true,
        items: [
          {
            period: "2019 — 2024",
            role: "PhD in Computer Science",
            org: "LaBRI, University of Bordeaux",
            location: "Bordeaux, France",
            description: "Deep neural network visualization. Advisors: David Auber, Romain Giot.",
            tags: [],
          },
          {
            period: "2017 — 2019",
            role: "Master's in Software Engineering",
            org: "University of Bordeaux",
            location: "Bordeaux, France",
            description: "Ranked 8/42, Distinction.",
            tags: [],
          },
          {
            period: "2014 — 2017",
            role: "Bachelor's in Computer Science",
            org: "University of Bordeaux",
            location: "Bordeaux, France",
            description: "Ranked 15/117, Pass with Merit.",
            tags: [],
          },
          {
            period: "2013 — 2014",
            role: "CPGE MPSI (Year 1)",
            org: "Prytanée National Militaire",
            location: "La Flèche, France",
            description: "",
            tags: [],
          },
          {
            period: "2012 — 2013",
            role: "Scientific Baccalauréat",
            org: "Lycée Victor Duruy",
            location: "Bordeaux, France",
            description: "Engineering Sciences option, Pass with Merit.",
            tags: [],
          },
        ],
      },
      {
        id: "skills",
        type: "skills",
        title: "Technical Skills",
        eyebrow: "Toolbox",
        note: "★ mastery, professional projects · ↗ strong interest, personal or academic project · no symbol: light exploration",
        groups: [
          {
            label: "Languages",
            items: [
              { name: "Rust", level: 3 },
              { name: "SQL (PostgreSQL, DuckDB, SQLite)", level: 2 },
              { name: "C# / .NET", level: 3 },
              { name: "Java", level: 2 },
              { name: "Python (NumPy, Keras)", level: 2 },
              { name: "JavaScript", level: 2 },
              { name: "C / C++", level: 2 },
              { name: "F#", level: 1 },
              { name: "Scala", level: 1 },
              { name: "Julia", level: 1 },
            ],
          },
          {
            label: "Tools & Frameworks",
            items: [
              { name: "Unity", level: 3 },
              { name: "Dagster", level: 3 },
              { name: "Docker", level: 3 },
              { name: "Git", level: 2 },
              { name: "Travis CI", level: 1 },
              { name: "Unix", level: 2 },
            ],
          },
          {
            label: "Spoken Languages",
            items: ["French (native)", "English (B2 — TOEIC 835/990)", "Japanese (beginner, ~JLPT N4)"],
          },
        ],
      },
      // {
      //   id: "projects",
      //   type: "grid",
      //   title: "Projects & Tools",
      //   eyebrow: "What I build",
      //   note: "Living section — new projects will be added over time.",
      //   cards: [
      //     {
      //       title: "This site",
      //       description: "A resume built as a small modular system: adding a project means adding an entry to a data file, not rewriting a page.",
      //       tags: ["HTML", "CSS", "JavaScript"],
      //       link: "https://github.com/eikofee/eikofee.github.io",
      //       linkLabel: "View source code",
      //     },
      //   ],
      // },
      {
        id: "publications",
        type: "grid",
        title: "Publications",
        eyebrow: "Research",
        cards: [
          {
            title: "Visual Analytics for Understanding, Optimizing and Developing Deep Neural Network Models",
            description: "PhD thesis, University of Bordeaux, defended March 22, 2024.",
            tags: ["PhD Thesis", "XAI", "Visualization"],
            link: "https://theses.hal.science/tel-04633751",
            linkLabel: "Read the thesis",
          },
          {
            title: "Deep Dive into Deep Neural Networks with Flows",
            description: "VISIGRAPP, 2020.",
            tags: ["XAI", "Visualization"],
            image: "assets/img/publications/deep-dive.png",
            link: "https://hal.science/hal-02492393",
            linkLabel: "Read on HAL",
          },
          {
            title: "Samples Classification Analysis Across DNN Layers with Fractal Curves",
            description: "ICPR Workshop, 2021.",
            tags: ["Deep Learning", "Visualization"],
            image: "assets/img/publications/fractal.png",
            link: "https://hal.science/hal-03111634",
            linkLabel: "Read on HAL",
          },
          {
            title: "VRGrid, Efficient Transformation of 2D Data into Pixel Grid Layout",
            description: "Information Visualisation Conference, 2022.",
            tags: ["Visualization", "Pixel-based layout"],
            image: "assets/img/publications/vrgrid.png",
            link: "https://hal.science/hal-03700588v1",
            linkLabel: "Read on HAL",
          },
        ],
      },
    ],
  },
};
