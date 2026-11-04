export const siteConfig = {
  name: "Michael He",
  title: "Applied AI / Machine Learning Engineer",
  description:
    "Michael He — applied AI and machine learning engineer in Ottawa, building multi-agent systems, RAG applications, and full-stack AI tools.",
  accentColor: "#1d4ed8",
  social: {
    email: "mhe41981@gmail.com",
    linkedin: "https://www.linkedin.com/in/xinnan-he-827435274/",
    twitter: "",
    github: "https://github.com/MiaoNan",
  },
  aboutMe:
    "I'm an applied AI and machine learning engineer based in Ottawa, Ontario, with a Master of Applied Data Science from the University of Victoria. At Ciena, I built multi-agent debugging workflows, retrieval-augmented applications, and internal tools that helped engineers investigate failed tests. My background combines machine learning research with hands-on Python, React, and API development. I enjoy turning complex data and engineering problems into practical tools people can use.",
  skills: [
    "Python", "JavaScript", "SQL", "R", "PyTorch", "scikit-learn",
    "Google ADK", "Multi-agent Systems", "RAG", "MCP Integration",
    "Milvus", "Neo4j", "spaCy", "React", "FastAPI", "Flask",
    "REST APIs", "Git", "Linux", "Docker",
  ],
  // Projects are hidden for now. Uncomment the saved entries below to restore them.
  projects: [
    // {
    //   name: "Cross-domain Object Detection · Research",
    //   description:
    //     "Modified a PyTorch Faster R-CNN implementation with domain adaptation losses at two feature-extraction blocks. Studied transfer across Cityscapes, Foggy Cityscapes, and SIM10K to improve object detection across visual domains.",
    //   link: "",
    //   skills: ["PyTorch", "Faster R-CNN", "Computer Vision", "Domain Adaptation"],
    // },
  ] as { name: string; description: string; link: string; skills: string[] }[],
  experience: [
    {
      company: "Ciena · Ottawa, Canada",
      title: "Software Engineer and Tools Developer Co-op",
      dateRange: "Sep 2025 – Aug 2026",
      bullets: [
        "Built multi-agent debugging workflows and React/Python AI applications used by approximately 20 testing and design engineers across four product teams to analyze over 100 failed test cases.",
        "Connected six AI agents to React interfaces through FastAPI and Flask REST endpoints; deployed and maintained applications on Linux with Gunicorn, logging, and process management.",
        "Prepared domain-specific LLM data from approximately 10,000 Confluence pages, filtered approximately 20% using document metadata, and converted approximately 3,000 embedded images to text with Qwen3-6B.",
        "Created reusable image-to-text, cleaning, and question-answer generation tools used by a teammate to prepare 30 product manuals across four products.",
      ],
    },
    {
      company: "Chongqing University · Chongqing, China",
      title: "Graduate Student Researcher",
      dateRange: "Sep 2021 – Sep 2023",
      bullets: [
        "Conducted two years of machine learning research in cross-domain object detection and Transformer-based text modeling.",
        "Implemented and evaluated domain adaptation changes to Faster R-CNN in PyTorch.",
        "Collected and preprocessed approximately 20,000 historical book titles and trained a Transformer model to predict next-title keywords using vector representations and cosine similarity.",
      ],
    },
    {
      company: "Tianbojincheng Intelligent Medical Technology · Nanjing, China",
      title: "Data Analyst Intern",
      dateRange: "Dec 2020 – Feb 2021",
      bullets: [
        "Built and trained a PyTorch Structure-Attribute Transformer with graph and GAN components to impute gene expression values across approximately 40 tissue regions and 20,000 features.",
        "Preprocessed experimental data and delivered an imputed gene expression table to the bioinformatics team for downstream analysis.",
        "Created Python and R visualizations of gene and transcript distributions.",
      ],
    },
  ],
  languages: [
    { name: "Chinese", proficiency: "Native" },
    { name: "English", proficiency: "IELTS 7" },
    { name: "Japanese", proficiency: "JLPT N2" },
    { name: "French", proficiency: "Studying" },
  ],
  education: [
    {
      school: "University of Victoria",
      // Unit-weighted GPA: 135.5 grade points / 16.5 graded units; co-op excluded.
      gpa: "8.21 / 9.0 (calculated from graded coursework)",
      degree: "Master of Applied Data Science",
      dateRange: "Sep 2024 – Aug 2026",
      courses: [
        "Optimization for Machine Learning",
        "Systems for Massive Datasets",
        "Deep Reinforcement Learning",
        "Algorithms and Data Models",
        "Data Analysis and Pattern Recognition",
        "Data Mining",
      ],
      achievements: [
        "Completed a Ciena software engineering and tools development co-op in Ottawa.",
      ],
    },
    {
      school: "Hohai University",
      gpa: "4.42 / 5.0",
      degree: "Bachelor of Computer Science and Technology",
      dateRange: "Sep 2017 – Jun 2021",
      courses: [
        "Data Structure",
        "Design and Analysis of Algorithms",
        "Operating System",
        "Software Engineering",
        "Principles of Database",
        "Pattern Recognition",
      ],
      achievements: [
        "Academic Excellence Scholarship, 2018 — top 10% of class.",
      ],
    },
  ],
};
