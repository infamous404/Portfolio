/* ==========================================================================
   data.js — ALL SITE CONTENT LIVES HERE. THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ==========================================================================

   Every text field is an object with two languages:

       { en: "English text", fr: "Texte français" }

   The page reads this file and builds itself. You never touch index.html.

   --------------------------------------------------------------------------
   QUICK MAP OF THIS FILE
   --------------------------------------------------------------------------
     1. config      -> default language
     2. profile     -> name, tagline, contact links      <-- FILL IN YOUR LINKS
     3. about       -> intro paragraphs + highlight list
     4. projects    -> the project cards                 <-- ADD PROJECTS HERE
     5. documents   -> standalone report PDFs (not full projects)
     6. skills      -> the skills / tools grid
     7. ui          -> section titles, buttons, small labels

   --------------------------------------------------------------------------
   HOW TO ADD A PROJECT
   --------------------------------------------------------------------------
     1. Drop your PDF in:  assets/reports/my-report.pdf
     2. Scroll to `projects` below.
     3. Copy one whole { ... }, block, paste it, edit the text.
     4. Point `files` at your PDF:
            files: [
              { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/my-report.pdf" }
            ]
     5. Save. Refresh. Done.

     To REMOVE a project: delete its whole { ... }, block.
     To REORDER projects: move blocks up or down. Card numbers renumber themselves.

   --------------------------------------------------------------------------
   HOW THE FILE LINKS WORK
   --------------------------------------------------------------------------
     * `files` is an ARRAY, so one project can have several documents.
     * Clicking anywhere on the card opens the FIRST file in `files`
       in a new browser tab (it views inline, it does not download).
     * Every file also gets its own small labeled link on the card
       ("Report", "Diagram", "Slides"...).
     * `files: []`  (empty array) -> the card renders without file links
       and is not clickable. Nothing breaks.
     * Paths are RELATIVE to index.html. Always use forward slashes.
       Good:  "assets/reports/splunk-lab.pdf"
       Bad:   "/assets/reports/splunk-lab.pdf"   (leading slash breaks GitHub Pages)

   --------------------------------------------------------------------------
   WHAT IS STILL SCAFFOLDING
   --------------------------------------------------------------------------
     [x] profile.contacts -> GitHub only; other contacts removed for privacy
     [x] about            -> real profile text, EN and FR
     [x] skills / certifications -> real, from the CV
     [x] assets/reports/  -> every PDF is now a real deliverable, no placeholders
     [ ] projects         -> card write-ups are still the generated drafts;
                             the PDFs behind them are real
     [ ] certifications   -> optional: paste each "Show credential" URL
   ========================================================================== */

const SITE = {

  /* ======================================================================
     1. CONFIG
     ====================================================================== */
  config: {
    // Language used on first load: "en" or "fr".
    defaultLang: "en",

    // true  -> a visitor whose browser is in French sees French first.
    // false -> everyone always starts on `defaultLang`.
    autoDetectBrowserLanguage: true,

    // Public URL of the live site, used by the JSON-LD structured data.
    // Confirmed correct, capital P included — GitHub Pages URLs are
    // case-sensitive and the repository is named "Portfolio".
    // If you ever rename the repo, update this AND the og: tags in index.html.
    siteUrl: "https://infamous404.github.io/Portfolio/",
  },


  /* ======================================================================
     2. PROFILE / HEADER
     ====================================================================== */
  profile: {
    name: "Marco Hélie",

    // Shown big under the name, with a blinking terminal cursor after it.
    // Condensed from the full headline (which is too long for
    // one line); the rest of it carries on in `subline` below.
    tagline: {
      en: "Cybersecurity Analyst · Blue Team & SOC Operations",
      fr: "Analyste en cybersécurité · Équipe bleue et opérations SOC",
    },

    // Small line under the tagline.
    subline: {
      en: "SIEM · Threat Detection · Incident Response — Bilingual FR / EN · CompTIA Security+ candidate",
      fr: "SIEM · Détection des menaces · Réponse aux incidents — Bilingue FR / EN · Candidat CompTIA Security+",
    },

    // Location line. Deliberately coarse — country only, no city or region.
    location: {
      en: "Canada · Open to remote & relocation",
      fr: "Canada · Ouvert au télétravail et à la relocalisation",
    },

    // Machine-readable version of the line above, used by the JSON-LD
    // structured data. Country only, on purpose: no locality, no region.
    address: {
      country: "CA",
    },

    // Contact links in the header.
    // `icon` must be one of the <symbol> ids defined in index.html.
    //
    // Other contacts were deliberately removed for privacy. To add one back,
    // drop a block in here — the header, the JSON-LD `sameAs` list and the
    // `email` field all follow automatically.
    contacts: [
      {
        icon: "github",
        text: "GitHub",
        href: "https://github.com/infamous404",
      },
    ],
  },


  /* ======================================================================
     3. ABOUT
     ====================================================================== */
  about: {
    // SOURCE: the personal profile summary, used verbatim in both languages.
    // The French is Marco's own translation, not machine-generated.
    //
    // Two shapes are accepted per entry:
    //   { en: "...", fr: "..." }                     -> a plain paragraph
    //   { heading: {en,fr}, text: {en,fr} }          -> a paragraph with a heading
    //
    // The ▸ markers in front of the headings come from CSS (.about-heading),
    // so do not type them here.
    paragraphs: [
      {
        en: "I am a cybersecurity student pursuing my AEC in cybersecurity at Vanier College, with certifications from Google, Cisco (SOC), EC-Council, Palo Alto Networks, IBM, and the University of Maryland. My focus is defensive security — building the skill set required for a SOC analyst / blue team role centered on threat detection, event monitoring, and incident containment.",
        fr: "Je suis étudiant en cybersécurité et je poursuis mon AEC en cybersécurité au Collège Vanier, avec des certifications de Google, Cisco (SOC), EC-Council, Palo Alto Networks, IBM et l'Université du Maryland. Mon domaine de prédilection est la sécurité défensive — je développe les compétences requises pour un poste d'analyste SOC / équipe bleue, axé sur la détection des menaces, la surveillance des événements et le confinement des incidents.",
      },
      {
        heading: { en: "Technical experience", fr: "Expérience technique" },
        text: {
          en: "I have hands-on experience with SIEM tools (Splunk — SPL queries, detection rules, investigations), network analysis using Wireshark and Nmap, and Linux administration and hardening across Rocky, Ubuntu, and Kali. I'm familiar with malware analysis fundamentals, network architecture principles, and security automation workflows. I also work the offensive side using Kali tools like Burp Suite, because understanding how cyber attacks unfold is essential to defending against them.",
          fr: "J'ai une expérience pratique des outils SIEM (Splunk — requêtes SPL, règles de détection, investigations), de l'analyse réseau avec Wireshark et Nmap, ainsi que de l'administration et du durcissement Linux sous Rocky, Ubuntu et Kali. Je maîtrise les fondamentaux de l'analyse de maliciels, les principes d'architecture réseau et les flux d'automatisation de la sécurité. Je travaille aussi le côté offensif avec des outils Kali comme Burp Suite, car comprendre comment se déroulent les cyberattaques est essentiel pour s'en défendre.",
        },
      },
      {
        heading: { en: "AI in my workflow", fr: "L'IA dans mon flux de travail" },
        text: {
          en: "I treat AI as a core part of the modern security toolkit. I integrate it into daily research and analysis, and run a self-hosted local LLM environment for privacy-conscious work — because in 2026, AI fluency is no longer optional in cybersecurity.",
          fr: "Je considère l'IA comme un élément central de la boîte à outils de sécurité moderne. Je l'intègre à mes recherches et analyses quotidiennes, et j'exécute un environnement LLM local auto-hébergé pour un travail respectueux de la vie privée — car en 2026, la maîtrise de l'IA n'est plus optionnelle en cybersécurité.",
        },
      },
      {
        heading: { en: "What I bring", fr: "Ce que j'apporte" },
        text: {
          en: "Analytical thinking, a privacy-first mindset, and bilingual communication in French and English. Currently preparing for the CompTIA Security+ certification and seeking an entry-level opportunity — Canada, remote, or international — where I can contribute to protecting systems and continue growing as a defender.",
          fr: "Une pensée analytique, une approche axée sur la confidentialité, et une communication bilingue en français et en anglais. Je me prépare actuellement à la certification CompTIA Security+ et je recherche une opportunité de niveau débutant — au Canada, à distance ou à l'international — où je pourrai contribuer à la protection des systèmes tout en continuant à évoluer comme défenseur.",
        },
      },
    ],

    // Short scannable facts shown beside the paragraphs.
    // Format: { label: {en,fr}, value: {en,fr} }
    highlights: [
      {
        label: { en: "Education", fr: "Formation" },
        value: {
          en: "AEC, Cybersecurity Prevention & Intervention — Collège Vanier, Montréal · Oct 2025 – Feb 2027 (expected)",
          fr: "AEC, Prévention et intervention en cybersécurité — Collège Vanier, Montréal · oct. 2025 – févr. 2027 (prévu)",
        },
      },
      {
        label: { en: "Prior training", fr: "Formation antérieure" },
        value: {
          en: "Cybersecurity Diploma — Lighthouse Labs, Canada · Jul 2025",
          fr: "Diplôme en cybersécurité — Lighthouse Labs, Canada · juill. 2025",
        },
      },
      {
        label: { en: "Certification", fr: "Certification" },
        value: {
          en: "CompTIA Security+ — in progress · 10+ certificates and courses",
          fr: "CompTIA Security+ — en cours · 10+ certificats et cours",
        },
      },
      {
        label: { en: "Hands-on", fr: "Pratique" },
        value: {
          en: "CyberQuebec OpenNebula lab infrastructure (pfSense, AlmaLinux, multi-VM) · Local lab (WSL2/Kali, Docker) · TryHackMe — Blue Team Path, SOC Level 1 (ongoing)",
          fr: "Infrastructure de laboratoire CyberQuebec OpenNebula (pfSense, AlmaLinux, multi-VM) · Laboratoire local (WSL2/Kali, Docker) · TryHackMe — Blue Team Path, SOC Level 1 (en cours)",
        },
      },
      {
        label: { en: "Experience", fr: "Expérience" },
        value: {
          en: "Delivery Specialist — Hector Larivée Inc., Montréal · 2022",
          fr: "Préposé à la livraison — Hector Larivée Inc., Montréal · 2022",
        },
      },
      {
        label: { en: "Career", fr: "Parcours" },
        value: {
          en: "Career transition to cybersecurity — 2023–present",
          fr: "Réorientation professionnelle vers la cybersécurité — 2023–présent",
        },
      },
      {
        label: { en: "Target roles", fr: "Postes visés" },
        value: {
          en: "SOC Analyst (Tier 1), Blue Team, Security Operations, IT Support / Help Desk",
          fr: "Analyste SOC (niveau 1), équipe bleue, opérations de sécurité, soutien TI / service d'assistance",
        },
      },
      {
        label: { en: "Languages", fr: "Langues" },
        value: {
          en: "French (native), English (fluent)",
          fr: "Français (langue maternelle), anglais (courant)",
        },
      },
    ],
  },


  /* ======================================================================
     4. PROJECTS
     ----------------------------------------------------------------------
     COPY-PASTE TEMPLATE — copy everything between the dashes into the list
     below, then edit it:

       {
         title:   { en: "", fr: "" },
         context: { en: "", fr: "" },        // role / course / team / year
         summary: { en: "", fr: "" },        // ONE line. Keep it short.
         tags:    ["Tool", "Tool"],          // not translated on purpose
         files: [
           { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/YOUR-FILE.pdf" }
         ],
       },

     Set `files: []` if the document is not ready yet -> card is not clickable.
     ====================================================================== */
  projects: [

    /* ---- PROJECT 01 ------------------------------------------------- */
    {
      title: {
        en: "Geo-Distributed Logistics Platform",
        fr: "Plateforme logistique géodistribuée",
      },
      context: {
        en: "Team project — secure architecture design",
        fr: "Projet d'équipe — conception d'architecture sécurisée",
      },
      summary: {
        en: "Designed and hardened a multi-region logistics platform: centralized IAM with federated identity across regions, clustered databases, an asynchronous messaging layer and a segmented, firewalled network.",
        fr: "Conception et durcissement d'une plateforme logistique multirégion : IAM centralisé avec fédération d'identité entre les régions, bases de données en grappe, couche de messagerie asynchrone et réseau segmenté protégé par pare-feu.",
      },
      tags: ["IAM", "Keycloak", "Galera Cluster", "Kafka", "pfSense", "Federation", "Network Segmentation"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/01-geo-distributed-logistics-platform.pdf" },
      ],
    },

    /* ---- PROJECT 02 ------------------------------------------------- */
    {
      title: {
        en: "SIEM-as-a-Service Platform",
        fr: "Plateforme SIEM en tant que service",
      },
      context: {
        en: "Capstone-style project — multi-tenant monitoring",
        fr: "Projet de synthèse — surveillance multilocataire",
      },
      summary: {
        en: "Built a multi-tenant log monitoring service: per-client log ingestion and isolation, a normalized event pipeline, correlation rules and dashboards for alert triage.",
        fr: "Mise en place d'un service de surveillance de journaux multilocataire : ingestion et isolation des journaux par client, pipeline d'événements normalisé, règles de corrélation et tableaux de bord pour le triage d'alertes.",
      },
      tags: ["SIEM", "Wazuh", "Log Ingestion", "Multi-Tenancy", "Correlation Rules", "Dashboards"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/02-siem-as-a-service.pdf" },
      ],
    },

    /* ---- PROJECT 03 ------------------------------------------------- */
    {
      title: {
        en: "Splunk Log Analysis & Detection Lab",
        fr: "Laboratoire d'analyse de journaux et de détection Splunk",
      },
      context: {
        en: "Hands-on lab — blue team detection",
        fr: "Laboratoire pratique — détection (équipe bleue)",
      },
      summary: {
        en: "Ingested Windows and firewall logs into Splunk, wrote SPL searches to surface brute-force attempts and suspicious authentication, then turned the findings into saved alerts.",
        fr: "Ingestion de journaux Windows et de pare-feu dans Splunk, rédaction de recherches SPL pour repérer les attaques par force brute et les authentifications suspectes, puis conversion des constats en alertes enregistrées.",
      },
      tags: ["Splunk", "SPL", "Windows Event Logs", "Detection Engineering", "Alerting"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/03-splunk-detection-lab.pdf" },
      ],
    },

    /* ---- PROJECT 04 ------------------------------------------------- */
    {
      title: {
        en: "OWASP Juice Shop — Web Application Penetration Test",
        fr: "OWASP Juice Shop — Test d'intrusion d'une application Web",
      },
      context: {
        en: "Coursework — black-box assessment (Intrusion Testing 420-B06-VA)",
        fr: "Travail de cours — évaluation en boîte noire (Tests d'intrusion 420-B06-VA)",
      },
      summary: {
        en: "Manual black-box assessment of a deliberately vulnerable web app: 12 findings (2 Critical, 5 High, 4 Medium, 1 Low) mapped to the OWASP Top 10, including SQL injection authentication bypass, IDOR, DOM XSS and JWT/session weaknesses, with a prioritized remediation plan.",
        fr: "Évaluation manuelle en boîte noire d'une application Web volontairement vulnérable : 12 constats (2 critiques, 5 élevés, 4 moyens, 1 faible) associés au OWASP Top 10, dont un contournement d'authentification par injection SQL, des IDOR, du XSS basé sur le DOM et des faiblesses liées aux JWT et aux sessions, avec un plan de remédiation priorisé.",
      },
      tags: ["Burp Suite", "OWASP Top 10", "SQL Injection", "XSS", "JWT", "Broken Access Control"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/Juice_Shop_Security_Assessment_Marco.pdf" },
      ],
    },

    /* ---- COPY THE BLOCK ABOVE TO ADD A NEW PROJECT ------------------ */

  ],


  /* ======================================================================
     5. DOCUMENTS
     ----------------------------------------------------------------------
     Standalone PDFs that are not full projects: write-ups, TryHackMe notes,
     cheat sheets, a résumé. Same shape as a project but lighter.
     Set `files: []` to show a card with no file links.
     ====================================================================== */
  documents: [
    {
      title: {
        en: "Vulnerability Management Report — GlobalTech (fictional client)",
        fr: "Rapport de gestion des vulnérabilités — GlobalTech (client fictif)",
      },
      context: { en: "Coursework", fr: "Travail de cours" },
      summary: {
        en: "Risk-based analysis of 10 simulated vulnerabilities across network, host, web, API, cloud and container assets; top-5 prioritization beyond CVSS (exposure, impact, likelihood) and a phased remediation roadmap.",
        fr: "Analyse fondée sur le risque de 10 vulnérabilités simulées touchant des actifs réseau, hôtes, Web, API, infonuagiques et conteneurisés; priorisation des 5 principales au-delà du CVSS (exposition, impact, probabilité) et feuille de route de remédiation par phases.",
      },
      tags: ["Vulnerability Management", "CVSS", "Risk Prioritization", "Remediation Roadmap"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/Assignment_Three_Vulnerability_Management_Report_Marco_Helie.pdf" },
      ],
    },
    {
      title: {
        en: "Web Server Security Assessment — OWASP Mutillidae II",
        fr: "Évaluation de la sécurité d'un serveur Web — OWASP Mutillidae II",
      },
      context: { en: "Coursework", fr: "Travail de cours" },
      summary: {
        en: "Reconnaissance, information disclosure and misconfiguration findings (exposed robots.txt, directory listing, phpMyAdmin, verbose errors), a directory traversal proof of concept, a six-stage patch management plan and a prioritized hardening plan.",
        fr: "Reconnaissance, divulgation d'information et constats de mauvaise configuration (robots.txt exposé, listage des répertoires, phpMyAdmin, messages d'erreur détaillés), preuve de concept de traversée de répertoires, plan de gestion des correctifs en six étapes et plan de durcissement priorisé.",
      },
      tags: ["Mutillidae II", "Directory Traversal", "Misconfiguration", "Patch Management", "Hardening"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/Web_Server_Marco_Helie.pdf" },
      ],
    },
    {
      title: {
        en: "Penetration Test Engagement — Nexus Plaza (fictional client)",
        fr: "Mandat de test d'intrusion — Nexus Plaza (client fictif)",
      },
      context: { en: "Coursework", fr: "Travail de cours" },
      summary: {
        en: "Full engagement lifecycle: scope worksheet, rules of engagement, services agreement, hands-on exploitation of four lab targets (SQL injection, directory listing, anonymous SMB, exposed credentials) and a professional report with risk ratings and remediation.",
        fr: "Cycle de vie complet du mandat : fiche de cadrage, règles d'engagement, entente de services, exploitation pratique de quatre cibles de laboratoire (injection SQL, listage des répertoires, SMB anonyme, identifiants exposés) et rapport professionnel avec cotes de risque et remédiation.",
      },
      tags: ["Penetration Testing", "Rules of Engagement", "SQL Injection", "SMB", "Reporting"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/Final_LIA_Project.pdf" },
      ],
    },
    {
      title: {
        en: "Malware Case Study — Pegasus Spyware (NSO Group)",
        fr: "Étude de cas de maliciel — logiciel espion Pegasus (NSO Group)",
      },
      context: { en: "Coursework", fr: "Travail de cours" },
      summary: {
        en: "Threat-intelligence style analysis: infection chain, architecture, IOCs, MITRE ATT&CK Mobile mapping (S0289), exploited CVEs (FORCEDENTRY, BLASTPASS) and preventive, detective and corrective controls.",
        fr: "Analyse de type renseignement sur les menaces : chaîne d'infection, architecture, indicateurs de compromission (IOC), correspondance avec MITRE ATT&CK Mobile (S0289), CVE exploitées (FORCEDENTRY, BLASTPASS) et contrôles préventifs, de détection et correctifs.",
      },
      tags: ["Pegasus", "MITRE ATT&CK", "Threat Intelligence", "IOCs", "CVE Analysis"],
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/Pegasus_Spyware_Case_Study_Marco_Helie.pdf" },
      ],
    },
    {
      title: {
        en: "Corporate Office Network Security",
        fr: "Sécurité du réseau d'un bureau d'entreprise",
      },
      summary: {
        en: "Secure network design for a 150-employee company: VLAN segmentation by department, layered firewall rules, remote-access VPN and defence in depth.",
        fr: "Conception d'un réseau sécurisé pour une entreprise de 150 employés : segmentation VLAN par département, règles de pare-feu en couches, RPV d'accès à distance et défense en profondeur.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-corporate-network-security.pdf" },
        { label: { en: "Slides", fr: "Présentation" }, path: "assets/reports/doc-corporate-network-security-slides.pdf" },
      ],
    },
    {
      title: {
        en: "Threat Mitigation through Asset Management",
        fr: "Atténuation des menaces par la gestion des actifs",
      },
      summary: {
        en: "Risk analysis and mitigation strategies for a fictional 10-person office: 12 assets inventoried, 7 threat scenarios scored on a risk matrix, remediation mapped to the NIST incident response lifecycle.",
        fr: "Analyse de risques et stratégies d'atténuation pour un bureau fictif de 10 personnes : inventaire de 12 actifs, 7 scénarios de menace cotés sur une matrice de risques, remédiation alignée sur le cycle de réponse aux incidents du NIST.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-threat-mitigation-asset-management.pdf" },
      ],
    },
    {
      title: {
        en: "Incident Response Plan, Playbook & Policy",
        fr: "Plan, guide d'intervention et politique de réponse aux incidents",
      },
      summary: {
        en: "Cybersecurity governance project for a fictional healthcare provider: a ransomware playbook built on the NIST incident response lifecycle, with escalation points, stakeholder notification and supporting policy documents.",
        fr: "Projet de gouvernance en cybersécurité pour un fournisseur de soins de santé fictif : guide d'intervention contre les rançongiciels fondé sur le cycle de réponse aux incidents du NIST, avec points d'escalade, notification des parties prenantes et politiques à l'appui.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-incident-response-plan.pdf" },
      ],
    },
    {
      title: {
        en: "DFIR — The Stolen Szechuan Sauce",
        fr: "DFIR — The Stolen Szechuan Sauce",
      },
      summary: {
        en: "Full forensic investigation of a confirmed domain-controller intrusion, working disk, memory, registry and network evidence through to a timeline and findings.",
        fr: "Enquête judiciaire complète sur une intrusion confirmée d'un contrôleur de domaine, à partir de preuves disque, mémoire, registre et réseau, jusqu'à une chronologie et des constats.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-dfir-stolen-szechuan-sauce.pdf" },
      ],
    },
    {
      title: {
        en: "ISO 27001 Compliance Verification",
        fr: "Vérification de conformité ISO 27001",
      },
      summary: {
        en: "Conformity assessment of a managed services provider against ISO/IEC 27001:2022 Annex A, PIPEDA Principle 7 and Canadian Centre for Cyber Security baseline guidance.",
        fr: "Évaluation de conformité d'un fournisseur de services gérés au regard de l'annexe A d'ISO/IEC 27001:2022, du 7e principe de la LPRPDE et des directives de base du Centre canadien pour la cybersécurité.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-iso27001-compliance-verification.pdf" },
      ],
    },
    {
      title: {
        en: "PCI-DSS Pre-Engagement & Scoping",
        fr: "Préengagement et cadrage PCI-DSS",
      },
      summary: {
        en: "Scoping a compliance-driven penetration test for a fictional online retailer: cardholder data environment boundaries, segmentation and rules of engagement.",
        fr: "Cadrage d'un test d'intrusion axé sur la conformité pour un détaillant en ligne fictif : périmètre de l'environnement des données de titulaires de cartes, segmentation et règles d'engagement.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-pci-dss-scoping.pdf" },
      ],
    },
    {
      title: {
        en: "IoT Threat Actor Analysis",
        fr: "Analyse des acteurs de menace IoT",
      },
      summary: {
        en: "Who attacks connected devices in small and medium business environments, how they do it, and which basic controls actually stop them.",
        fr: "Qui attaque les appareils connectés dans les petites et moyennes entreprises, comment ils s'y prennent, et quels contrôles de base les arrêtent réellement.",
      },
      files: [
        { label: { en: "Report", fr: "Rapport" }, path: "assets/reports/doc-iot-threat-actor-analysis.pdf" },
      ],
    },
  ],


  /* ======================================================================
     5b. TRYHACKME
     ----------------------------------------------------------------------
     Shown as a row of badges under the Certifications section. Each badge
     links to its public TryHackMe page so a recruiter can verify it.

     To add a badge, copy a block:

       {
         name: { en: "Badge name", fr: "Nom du badge" },
         image: "assets/badges/your-badge.svg",
         url:   "https://tryhackme.com/InfamouS/badges/your-badge",
       },

     NOTE ON THE IMAGES: these are drawn locally in the site's own style, not
     TryHackMe's official artwork — the page makes no external requests, so
     nothing is hotlinked. If you want the real badge art, download the PNG
     from TryHackMe, drop it in assets/badges/ and point `image` at it.
     ====================================================================== */
  tryhackme: {
    heading: { en: "TryHackMe", fr: "TryHackMe" },
    note: {
      en: "Blue Team path — badges link to the public profile for verification.",
      fr: "Parcours équipe bleue — les badges renvoient au profil public pour vérification.",
    },
    // TODO: TryHackMe certificates go here later, as extra badge blocks or
    //       as PDFs in the documents list above.
    badges: [
      {
        name: { en: "Diamond League", fr: "Ligue Diamant" },
        image: "assets/badges/diamond-league.svg",
        url: "https://tryhackme.com/InfamouS/badges/diamond-league",
      },
      {
        name: { en: "180-Day Streak", fr: "Série de 180 jours" },
        image: "assets/badges/180-day-streak.svg",
        url: "https://tryhackme.com/InfamouS/badges/180-day-streak",
      },
    ],
  },


  /* ======================================================================
     6. SKILLS / TOOLS
     ----------------------------------------------------------------------
     Add a group by copying a { group, items } block. Each item is either a
     plain string (tool and standard names are the same in both languages) or,
     for descriptive wording that should be translated, { en: "", fr: "" }.
     ====================================================================== */
  skills: [
    {
      group: { en: "SIEM & Detection", fr: "SIEM et détection" },
      items: [
        "SIEM", "Splunk", "SPL", "Security Operations Center (SOC)",
        "Threat Detection", "Event Monitoring", "Log Analysis & Monitoring",
        "MITRE ATT&CK", "Threat & Vulnerability Management",
        "Intrusion Detection & Prevention", "Network Monitoring",
        "Wazuh",
        { en: "Microsoft Sentinel (KQL fundamentals)", fr: "Microsoft Sentinel (notions de base de KQL)" },
        "Microsoft Defender for Endpoint",
        { en: "Windows Event Logs", fr: "Journaux d'événements Windows" },
        { en: "Detection Engineering", fr: "Ingénierie de la détection" },
        { en: "Alert Triage", fr: "Triage des alertes" },
      ],
    },
    {
      group: { en: "Incident Response & Forensics", fr: "Réponse aux incidents et criminalistique" },
      items: [
        "Incident Response", "Incident Response Playbook Development",
        "Containment, Eradication & Recovery", "Digital Forensics (DFIR)",
        "Malware Analysis", "Volatility",
      ],
    },
    {
      group: { en: "Network & Infrastructure", fr: "Réseau et infrastructure" },
      items: [
        "Network Security", "TCP/IP", "Packet Capture",
        "Firewall Rules", "pfSense", "VLAN Segmentation", "VPN",
        "TLS/SSL Hardening", "SSH Hardening", "WireGuard",
        "DNSSEC", "Wireshark", "Galera / MariaDB", "Kafka",
      ],
    },
    {
      group: { en: "Governance & Access", fr: "Gouvernance et accès" },
      items: [
        "Identity & Access Management (IAM)", "Keycloak", "PAM", "RBAC",
        "Risk Assessment", "NIST CSF", "ISO 27001", "PCI DSS",
        "Regulatory Compliance",
        { en: "PIPEDA", fr: "LPRPDE" },
        {
          en: "Canadian Centre for Cyber Security baseline",
          fr: "Directives de base du Centre canadien pour la cybersécurité",
        },
      ],
    },
    {
      group: { en: "Systems & Cloud", fr: "Systèmes et infonuagique" },
      items: [
        "Linux", "Kali Linux", "SELinux", "System Administration",
        "AWS (EC2, Route 53, IAM, KMS)",
        "Docker", "VirtualBox",
      ],
    },
    {
      group: { en: "Windows & IT Support", fr: "Windows et soutien TI" },
      items: [
        { en: "Windows administration", fr: "Administration Windows" },
        "Microsoft 365", "Active Directory",
        { en: "Group Policy", fr: "Stratégies de groupe" },
        "DNS/DHCP", "PowerShell",
        { en: "Troubleshooting", fr: "Dépannage" },
        "ServiceNow", "Jira Service Management",
      ],
    },
    {
      group: { en: "Offensive & Scripting", fr: "Offensif et scripts" },
      items: [
        "Penetration Testing", "Metasploit", "Nmap", "Python", "Bash",
        "SQL", "Git / Version Control",
      ],
    },
    {
      group: { en: "Vulnerability & Web Security", fr: "Vulnérabilités et sécurité web" },
      items: [
        "Tenable Nessus", "CVSS", "Burp Suite", "DIRB", "smbclient",
        "OWASP Top 10", "OWASP WSTG", "PTES", "NIST SP 800-115",
        {
          en: "SQL injection / XSS / IDOR / JWT testing",
          fr: "Tests d'injection SQL / XSS / IDOR / JWT",
        },
      ],
    },
    {
      group: { en: "Reporting & Communication", fr: "Rapports et communication" },
      items: [
        "Vulnerability Assessment",
        { en: "Technical Documentation", fr: "Documentation technique" },
        { en: "Pentest reporting", fr: "Rapports de tests d'intrusion" },
        { en: "Scoping & rules of engagement", fr: "Cadrage et règles d'engagement" },
        { en: "Risk-based prioritization", fr: "Priorisation fondée sur le risque" },
        { en: "Remediation planning", fr: "Planification de la remédiation" },
      ],
    },
    {
      group: { en: "AI & Automation", fr: "IA et automatisation" },
      items: ["Prompt Engineering", "AI-Assisted Security Automation"],
    },
  ],


  /* ======================================================================
     6b. CERTIFICATIONS
     ----------------------------------------------------------------------
     Issuers and dates are taken from the issuing bodies.

     To add one, copy a block:

       {
         name:   "Certification name",
         issuer: "Issuing body",
         date:   { en: "Mar 2024", fr: "mars 2024" },
         url:    "",              // optional "Show credential" link
         inProgress: false,       // true = highlighted as not yet earned
       },

     `url` is optional: leave it "" and the entry renders as plain text with
     no link. Fill it in with the issuer's "Show credential" URL and the card
     turns into a link automatically.
     ====================================================================== */
  certifications: [
    {
      // TODO: paste the issuer's "Show credential" URL into `url`.
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: { en: "In progress", fr: "En cours" },
      url: "",
      inProgress: true,
    },
    {
      name: "Cybersecurity Attack and Defense Fundamentals",
      issuer: "EC-Council",
      date: { en: "Jul 2024", fr: "juill. 2024" },
      url: "",
    },
    {
      name: "Kali Linux",
      issuer: "Board Infinity",
      date: { en: "Jul 2024", fr: "juill. 2024" },
      url: "",
    },
    {
      name: "Generative AI for Cybersecurity Professionals",
      issuer: "IBM",
      date: { en: "May 2024", fr: "mai 2024" },
      url: "",
    },
    {
      name: "Introduction to Cybersecurity Careers",
      issuer: "IBM",
      date: { en: "Mar 2024", fr: "mars 2024" },
      url: "",
    },
    {
      name: "Wireshark for Beginners: Capture Packets",
      issuer: "Coursera",
      date: { en: "Mar 2024", fr: "mars 2024" },
      url: "",
    },
    {
      name: "Introduction to SIEM (Splunk)",
      issuer: "EDUCBA",
      date: { en: "Mar 2024", fr: "mars 2024" },
      url: "",
    },
    {
      name: "Cybersecurity for Everyone",
      issuer: "University of Maryland",
      date: { en: "Feb 2024", fr: "févr. 2024" },
      url: "",
    },
    {
      name: "Security Operations Center (SOC)",
      issuer: "Cisco",
      date: { en: "Feb 2024", fr: "févr. 2024" },
      url: "",
    },
    {
      name: "Cybersecurity Foundation",
      issuer: "Palo Alto Networks",
      date: { en: "Feb 2024", fr: "févr. 2024" },
      url: "",
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Coursera",
      date: { en: "Oct 2023", fr: "oct. 2023" },
      url: "",
    },
  ],


  /* ======================================================================
     7. UI STRINGS
     ----------------------------------------------------------------------
     Section titles, buttons and small labels. You rarely need to touch this.
     ====================================================================== */
  ui: {
    // Browser tab title. `{name}` is replaced with profile.name.
    pageTitle: {
      en: "{name} — Blue Team / SOC Analyst",
      fr: "{name} — Analyste SOC / Équipe bleue",
    },
    skipToContent: { en: "Skip to content", fr: "Aller au contenu" },
    langToggleLabel: { en: "Switch to French", fr: "Passer à l'anglais" },
    nav: {
      about: { en: "About", fr: "Profil" },
      projects: { en: "Projects", fr: "Projets" },
      skills: { en: "Skills", fr: "Compétences" },
      certifications: { en: "Certifications", fr: "Certifications" },
    },
    sections: {
      about: { en: "About", fr: "Profil" },
      projects: { en: "Projects", fr: "Projets" },
      projectsNote: {
        en: "Click a card to open the full report (PDF, opens in a new tab).",
        fr: "Cliquez sur une carte pour ouvrir le rapport complet (PDF, s'ouvre dans un nouvel onglet).",
      },
      documents: { en: "Reports / Documents", fr: "Rapports / Documents" },
      documentsNote: {
        en: "Standalone documents that are not tied to a single project.",
        fr: "Documents autonomes qui ne sont pas liés à un projet en particulier.",
      },
      skills: { en: "Skills & Tools", fr: "Compétences et outils" },
      certifications: { en: "Certifications & Training", fr: "Certifications et formation" },
      certificationsNote: {
        en: "Security+ in progress; completed certifications follow, most recent first.",
        fr: "Security+ en cours; les certifications obtenues suivent, de la plus récente à la plus ancienne.",
      },
    },
    card: {
      openHint: { en: "Open", fr: "Ouvrir" },
      filesLabel: { en: "Files", fr: "Fichiers" },
    },
    cert: {
      credential: { en: "Show credential", fr: "Voir le certificat" },
      inProgress: { en: "In progress", fr: "En cours" },
    },
    footer: {
      en: "Built with plain HTML, CSS and JavaScript. No trackers, no cookies.",
      fr: "Conçu en HTML, CSS et JavaScript simples. Aucun traceur, aucun témoin.",
    },
  },
};
