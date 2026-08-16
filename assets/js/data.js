window.PORTFOLIO_DATA = {
  stats: [
    { value: "3.84 / 4.00", label: "CGPA" },
    { value: "9th / 181", label: "Department Rank" },
    { value: "3", label: "Peer-reviewed Conference Papers" },
    { value: "4 Years", label: "Technical Merit Scholarship" }
  ],

  updates: [
    {
      date: "Aug 2026",
      text: "Completed my B.Sc. in Computer Science and Engineering from RUET with a CGPA of 3.84/4.00, ranking 9th among 181 students."
    },
    {
      date: "Aug 2026",
      text: "Successfully defended my undergraduate thesis, “Biomarker Identification in Pancreatic Cancer Using Two-Step Feature Selection and WGCNA.”"
    },
    {
      date: "2025",
      text: "Presented two first-author bioinformatics papers at IEEE QPAIN 2025."
    },
    {
      date: "2025",
      text: "Reached the Top 10 at the bdapps Innovation Summit 2025 as part of the Barta/Khobor team."
    }
  ],

  publications: [
    {
      title: "Identification of Potential Biomarkers in Acute Myeloid Leukemia Using Integrated Bioinformatics and Two-Step ML-Based Feature Selection Approaches",
      authors: "<strong>Md. Ibrahim Sarker Raiyan</strong>, Sakib Sarker, Emon Ahammed, Mahshar Yahan, Md. Tareq Zaman",
      venue: "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
      role: "First Author",
      doi: "10.1109/QPAIN66474.2025.11171717",
      link: "https://doi.org/10.1109/QPAIN66474.2025.11171717"
    },
    {
      title: "Identification of Potential Genomic Biomarkers in Pancreatic Cancer, Colon Cancer, and Ulcerative Colitis Using Integrated Machine Learning and Bioinformatics Approaches",
      authors: "<strong>Md. Ibrahim Sarker Raiyan</strong>, Sakib Sarker, Utsha Das, Emon Ahammed, Md. Tareq Zaman, Mahshar Yahan",
      venue: "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
      role: "First Author",
      doi: "10.1109/QPAIN66474.2025.11171969",
      link: "https://doi.org/10.1109/QPAIN66474.2025.11171969"
    },
    {
      title: "Identification of Hub Genes and Therapeutic Targets in Ovarian Serous Cystadenocarcinoma Using Machine Learning and Bioinformatics Approaches",
      authors: "Mahia Ribahna, Areana Aurin, Sakib Sarker, Mahshar Yahan, <strong>Md. Ibrahim Sarker Raiyan</strong>, Mohammad Amanul Islam",
      venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      role: "Co-author",
      doi: "10.1109/ICCIT68739.2025.11491181",
      link: "https://doi.org/10.1109/ICCIT68739.2025.11491181"
    }
  ],

  projects: [
    {
      type: "Research / Bioinformatics",
      title: "AML Gene Analysis & Biomarker Identification",
      description: "Analysed gene-expression data to identify potential AML biomarkers through differential-expression analysis, two-step ML-based feature selection, classification, and Cytoscape-based hub-gene/network analysis.",
      role: "Outcome: First-author IEEE conference publication",
      tags: ["R", "Python", "GEO", "Cytoscape", "Machine Learning"],
      links: [
        { label: "GitHub", url: "https://github.com/raiyan9238/AML_Research" },
        { label: "Paper", url: "https://doi.org/10.1109/QPAIN66474.2025.11171717" }
      ]
    },
    {
      type: "Machine Learning",
      title: "Machine Learning-Based Traffic Prediction",
      description: "Built a next-hour traffic-prediction pipeline using historical junction data with temporal, lag, and rolling-window features, comparing Linear Regression, Random Forest, and a handwritten ANN.",
      role: "Three-member academic team",
      tags: ["Python", "NumPy", "pandas", "scikit-learn", "Matplotlib"],
      links: []
    },
    {
      type: "Product / Software",
      title: "Khobor — Swipe & Scroll",
      description: "A mobile short-news platform featuring concise news summaries, Bangladesh and international coverage, multi-source aggregation, personalization, and text-to-audio support.",
      role: "Role: Project Manager · Six-member cross-functional team",
      tags: ["Flutter", "Supabase", "Firebase", "REST APIs", "Vue / Vite"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=ltd.barta.khobor" },
        { label: "Website", url: "https://thekhobor.com" }
      ]
    },
    {
      type: "Embedded / IoT",
      title: "Fingerprint-Based Attendance System",
      description: "Co-developed a biometric attendance prototype that identifies registered users through fingerprints and supports attendance recording, hardware integration, testing, and technical documentation.",
      role: "Industrial attachment team project",
      tags: ["Arduino", "ESP32", "Fingerprint Sensor"],
      links: []
    }
  ],

  experience: [
    {
      date: "Feb 2025 — Present",
      role: "Project Manager",
      org: "Barta Limited — Khobor: Swipe & Scroll",
      description: "Lead a six-member cross-functional team and coordinate product planning, development, testing, release activities, and product delivery for a digital short-news platform."
    },
    {
      date: "Dec 2024 — Present",
      role: "Coordinator",
      org: "Student Bioinformatics Research Team",
      description: "Manage research schedules, task allocation, progress reviews, and collaborative cancer-bioinformatics projects while supporting peers through hub-gene identification workflows."
    },
    {
      date: "Mar 2025 — Apr 2025",
      role: "Industrial Attachment",
      org: "GizanTech Bangladesh",
      description: "Worked on client requirements, project-bidding and technical documentation, IoT prototyping with Arduino/ESP32, and sprint/CRM-based project-delivery workflows."
    }
  ],

  recognition: [
    { value: "9th / 181", label: "Department Rank · CSE, RUET" },
    { value: "4 Years", label: "Technical Merit Scholarship · RUET" },
    { value: "Top 10", label: "bdapps Innovation Summit 2025 · Barta/Khobor" }
  ],

  skills: [
    {
      title: "Research",
      items: "Bioinformatics workflows · Gene-expression analysis · ML-based feature selection · WGCNA · PPI/network analysis · Cytoscape"
    },
    {
      title: "Programming",
      items: "Python · R · C · C++ · Java · JavaScript · Dart"
    },
    {
      title: "Development",
      items: "Flutter · ReactJS · Firebase · Supabase · REST APIs"
    },
    {
      title: "Tools",
      items: "Git · GitHub · LaTeX · Jupyter Notebook · Google Colab"
    }
  ]
};
