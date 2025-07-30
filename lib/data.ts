// Portfolio Data Management
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  icon: string;
  progress: number;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Balvendra Singh",
  title: "Data Scientist & AI Engineer",
  location: "Hyderabad, India",
  email: "Balvendarsingh111@gmail.com", // Updated with actual email
  bio: "I am a skilled Data Scientist Engineer with nearly 2+ years of experience in designing and deploying innovative, data-driven solutions that drive business impact. My expertise includes data modeling, algorithm development, machine learning, deep learning, and Generative AI. With hands-on experience in big data technologies, cloud platforms, and programming, I excel at delivering transformative solutions. I am committed to continuous learning, leveraging emerging technologies to align with organizational goals and industry advancements.",
  profileImage: "/data/images/profile.jpeg",
  resumeUrl: "/data/images/BALVENDRA_CVV.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/balvendra-singh-6834931a7/", // Updated with actual LinkedIn
    github: "https://github.com/balvendar111", // Updated with actual GitHub
    instagram: "https://www.instagram.com/balvendra_111/", // Updated with actual Instagram
    twitter: "https://twitter.com/balvendrasingh8", // Updated with actual Twitter
  }
};

// Projects Data
export const projects: Project[] = [
  {
    id: "cloud-optimizer",
    title: "Cloud Optimizer (AWS, Azure, GCP)",
    description: "Provides a software toolkit for Cloud Probe, Data, Inventory Management, and Cost Reduction Services on AWS, GCP, and Azure. Designed real-time cloud monitoring tools and integrated AI-driven cost-reduction strategies.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    technologies: ["AWS", "Azure", "GCP", "Python", "Terraform", "AI/ML"],
    featured: true,
  },
  {
    id: "rd-project",
    title: "R&D Image Augmentation Project",
    description: "Developed image augmentation pipelines using Generative AI for synthetic data creation. Built and evaluated ML models, data pipelines, and exploratory analysis techniques.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    technologies: ["Python", "TensorFlow", "Generative AI", "Computer Vision"],
  },
  {
    id: "power-llm-bi",
    title: "Power LLM_BI Project", 
    description: "Designed architecture integrating user interfaces, decision-making agents, and secure DB management. Utilized NLP and Vector DB for secure and optimized natural language query processing.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
    technologies: ["LLM", "NLP", "Vector DB", "Python", "React"],
  },
  {
    id: "financial-docs",
    title: "Financial Documentation Assistant",
    description: "Implemented a Financial Assistant system using GPT-4 Vision for document analysis. Utilized Vector DB for secure data retrieval and built scalable document pipelines.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
    technologies: ["GPT-4", "Vector DB", "Python", "Document Processing"],
  },
  {
    id: "activity-dosing",
    title: "Activity-Based Dosing System",
    description: "Developed a personalized dosing system based on user activity patterns and health metrics using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    technologies: ["Python", "ML", "Healthcare Analytics", "IoT"],
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer Website",
    description: "Interactive web application that visualizes various sorting algorithms in real-time. Built with JavaScript to help understand algorithm complexity and performance.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&h=300&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS", "Algorithm Visualization"],
    github: "https://github.com/balvendar111/Sorting-Visualizer-website",
  },
  {
    id: "stock-market",
    title: "Stock Market Analysis",
    description: "Comprehensive stock market analysis using machine learning techniques and data visualization. Implemented predictive models for market trends.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
    technologies: ["Python", "Jupyter Notebook", "Data Analysis", "ML"],
    github: "https://github.com/balvendar111/stock_market",
  },
  {
    id: "cyber-bullying-detection",
    title: "Cyber Bullying Detection System",
    description: "Machine learning-based system to detect and classify cyber bullying in text data using natural language processing techniques.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&h=300&fit=crop",
    technologies: ["Python", "NLP", "Machine Learning", "Text Classification"],
    github: "https://github.com/balvendar111/Cyber-Bullying-Detection-Using-ML-Algorithims-main-",
  },
  {
    id: "smart-hire",
    title: "SmartHire System",
    description: "AI-powered recruitment system that streamlines the hiring process using machine learning algorithms for candidate matching and assessment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    technologies: ["AI/ML", "Python", "HR Tech", "Automation"],
    github: "https://github.com/balvendar111/SmartHire",
  },
];

// Work Experience
export const experiences: Experience[] = [
  {
    id: "current-role",
    company: "Grid_Dynamics", // Updated with actual company
    position: "Data Scientist Engineer",
    duration: "2022 - Present",
    location: "Hyderabad, India",
    description: [
      "Designed and deployed innovative data-driven solutions driving significant business impact",
      "Developed machine learning and deep learning models for various business applications",
      "Implemented Generative AI solutions for process automation and optimization",
      "Led cross-functional teams in delivering transformative technology solutions",
      "Specialized in cloud optimization and cost reduction strategies across AWS, GCP, and Azure",
      "Built image augmentation pipelines using Generative AI for synthetic data creation"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Generative AI"]
  }
];

// Skills Data
export const skills: Skill[] = [
  {
    category: "Machine Learning Frameworks",
    icon: "Brain",
    progress: 90,
    items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    category: "Large Language Models",
    icon: "Code2",
    progress: 85,
    items: [
      "OpenAI GPT Models", "Claude AI", "LangChain", "Chainlit",
      "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"
    ],
  },
  {
    category: "Programming Languages",
    icon: "Code2",
    progress: 95,
    items: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Cloud Platforms",
    icon: "Cloud",
    progress: 80,
    items: ["AWS (EC2, Lambda, SageMaker)", "Azure ML", "Google Cloud Platform"],
  },
  {
    category: "Data Analysis & Visualization",
    icon: "LineChart",
    progress: 85,
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau"],
  },
  {
    category: "Vector Databases",
    icon: "Database",
    progress: 75,
    items: ["FAISS", "ChromaDB", "Pinecone", "Weaviate"],
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/1G0FJCS1VMRQQE5D",
  },
  {
    id: "aws-developer-associate",
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a08b87c65acd41a09ee0d0cb8363048a",
  },
  {
    id: "deeplearning-ai",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=300&fit=crop",
  },
  {
    id: "machine-learning-production",
    title: "Machine Learning in Production",
    issuer: "DeepLearning.AI",
    date: "2024",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=300&fit=crop",
  },
  {
    id: "big-data-hadoop",
    title: "SQL, NoSQL, Big Data and Hadoop",
    issuer: "Database Technologies",
    date: "2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=300&fit=crop",
  },
  {
    id: "computer-vision",
    title: "Python for Computer Vision with OpenCV and Deep Learning",
    issuer: "Computer Vision Institute",
    date: "2024",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=300&h=300&fit=crop",
  },
  {
    id: "nlp-classification",
    title: "Natural Language Processing with Classification and Vector Spaces",
    issuer: "NLP Academy",
    date: "2024",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=300&h=300&fit=crop",
  },
];

// SEO and Meta Data
export const siteConfig = {
  name: "Balvendra Singh",
  description: "Professional portfolio of Balvendra Singh, Data Scientist & AI Engineer specializing in Machine Learning, Deep Learning, and Generative AI solutions.",
  url: "https://balvendrasingh-portfolio.vercel.app", // Replace with your actual domain when deployed
  ogImage: "/data/images/profile.jpeg",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "AI Engineer", 
    "Python",
    "Deep Learning",
    "Generative AI",
    "Cloud Computing",
    "LLM"
  ],
}; 