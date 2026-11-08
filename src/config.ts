export const siteConfig = {
  name: "Michael He",
  title: "Applied AI & Software Engineer",
  description:
    "Michael He — Applied AI & Software Engineer in Ottawa, building AI-powered tools with LLM agents, retrieval systems, and production software.",
  location: "Ottawa, Ontario, Canada",
  heroDescription:
    "I build AI-powered tools that combine LLM agents, retrieval systems, and production software to solve real engineering problems.",
  resume: "resume.pdf",
  accentColor: "#1d4ed8",
  social: {
    email: "mhe41981@gmail.com",
    linkedin: "https://www.linkedin.com/in/xinnan-he-827435274/",
    github: "https://github.com/MiaoNan",
  },
  aboutMe: [
    "I'm Michael He, an Applied AI & Software Engineer based in Canada, with a Master of Applied Data Science from the University of Victoria. My background combines machine learning research with software engineering experience at Ciena.",
    "I'm interested in how LLM agents, retrieval systems, and backend services work together to solve practical problems. I enjoy connecting AI capabilities to reliable software, making complex information easier to use, and building tools that support everyday engineering work.",
    "Outside work, I enjoy photography, travel, and learning languages. Through Postcrossing, I exchange postcards with people around the world—a small way to discover different places, perspectives, and everyday stories.",
  ],
  skills: [
    {
      category: "AI & LLM Systems",
      technologies: ["Multi-Agent Systems", "RAG", "Google ADK", "MCP"],
    },
    {
      category: "ML & Data",
      technologies: ["PyTorch", "scikit-learn", "spaCy", "Milvus", "Neo4j"],
    },
    {
      category: "Backend & APIs",
      technologies: ["Python", "FastAPI", "Flask", "REST APIs"],
    },
    {
      category: "Frontend",
      technologies: ["React", "JavaScript"],
    },
    {
      category: "Infrastructure & Tools",
      technologies: ["Linux", "Docker", "Git", "SQL"],
    },
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
      impactContext:
        "Impact of the AI Debugging Pipeline and related tools I developed at Ciena.",
      impactHighlights: [
        { value: "4", label: "Product Teams" },
        { value: "~20", label: "Engineers Supported" },
        { value: "100+", label: "Failed Cases Analyzed" },
      ],
      achievement: {
        title: "Runner-up — Ciena AI Hackathon 2026",
        description: "Runner-up among 200+ participating teams in Ciena's AI Hackathon.",
      },
      bullets: [
        "Built Google ADK multi-agent debugging workflows with Milvus-based RAG and integrated an existing MCP Jira-writing tool into React/JavaScript and Python applications.",
        "Developed and maintained 2 React/Python applications for state-dump log analysis and AI debugging pipeline agents, integrating frontend and backend services and deploying them on Linux with Gunicorn.",
        "Prepared domain-specific LLM data from approximately 10,000 Confluence pages, filtered approximately 20% using document metadata, and converted approximately 3,000 embedded images to text with Qwen3-6B.",
        "Created reusable image-to-text, cleaning, and question-answer generation tools used by a teammate to prepare 30 product manuals across four products.",
        "Optimized RAG pipelines within AI agent applications using reranking, Drain3 log parsing, metadata enrichment, and Neo4j-based knowledge graphs to improve Jira matching and log relevance.",
        "Used Git for development and PR review, and Docker and Portainer for operational tasks.",
      ],
    },
    {
      company: "University of Victoria",
      title: "Teaching Assistant — ECE310: Digital Signal Processing",
      dateRange: "Jan 2025 – Apr 2025",
      bullets: [
        "Graded assignments for ECE310: Digital Signal Processing.",
        "Answered students' questions about course concepts and assignments.",
      ],
    },
    {
      company: "Chongqing University · Chongqing, China",
      title: "Graduate Student Researcher",
      dateRange: "Sep 2021 – Sep 2023",
      bullets: [
        "Adapted a PyTorch Faster R-CNN model to improve object detection across real, foggy, and simulated street scenes.",
        "Collected and preprocessed approximately 20,000 historical book titles and trained a Transformer model to predict next-title keywords using vector representations and cosine similarity.",
      ],
    },
    {
      company: "Tianbojincheng Intelligent Medical Technology · Nanjing, China",
      title: "Data Analyst Intern",
      dateRange: "Dec 2020 – Feb 2021",
      bullets: [
        "Preprocessed experimental data and trained a PyTorch model to fill missing gene expression values across approximately 40 tissue regions and 20,000 features; delivered the completed table to the bioinformatics team for downstream analysis.",
        "Created Python and R visualizations of gene and transcript distributions.",
      ],
    },
  ],
  languages: [
    { name: "Chinese", nativeName: "中文", code: "zh", proficiency: "Native" },
    { name: "English", nativeName: "English", code: "en", proficiency: "IELTS 7" },
    { name: "Japanese", nativeName: "日本語", code: "ja", proficiency: "JLPT N2" },
    { name: "French", nativeName: "Français", code: "fr", proficiency: "Elementary Proficiency" },
  ],
  education: [
    {
      school: "University of Victoria",
      // Unit-weighted GPA: 135.5 grade points / 16.5 graded units; co-op excluded.
      gpa: "8.21 / 9.0",
      degree: "Master of Applied Data Science",
      dateRange: "Sep 2024 – Aug 2026",
      courses: [
        "Optimization for Machine Learning",
        "Systems for Massive Datasets",
        "Deep Reinforcement Learning",
      ],
      achievements: [],
    },
    {
      school: "Hohai University",
      gpa: "4.42 / 5.0",
      degree: "Bachelor of Computer Science and Technology",
      dateRange: "Sep 2017 – Jun 2021",
      courses: [],
      achievements: [
        "Academic Excellence Scholarship, 2018 — top 10% of class.",
      ],
    },
  ],
};
