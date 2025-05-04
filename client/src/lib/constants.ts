export const personalInfo = {
  name: "Srikar Kodi",
  role: "Python Developer & Data Engineer",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "kodisrikar@gmail.com",
  about: `
    I'm a passionate Python Developer with expertise in data architecture, ETL processes, and data warehousing.
    Skilled in SQL and data pipeline development, and full-stack development using technologies like Flask, Django, 
    React JS, and Node JS.
    
    I'm driven to innovate and create efficient, scalable solutions. My journey in technology has allowed me to work
    on a variety of projects from developing interactive chatbots with NLP to building robust ETL pipelines.
    
    Currently, I'm working as an Application Developer at Vavili Technologies, where I contribute to the development
    of web applications and data processing systems.
  `,
  skills: [
    "Python", "Flask", "Django", "React JS", 
    "Node JS", "PostgreSQL", "AWS", "ETL Pipelines",
    "NLP", "PySpark", "NumPy", "Pandas",
    "Matplotlib", "Seaborn", "Data Warehousing", "SQL"
  ],
  social: {
    github: "https://github.com/Namidok",
    linkedin: "https://linkedin.com/in/srikar-kodi-046a631b2/",
    instagram: ""
  }
};

export const workExperience = [
  {
    period: "2023 - 2025",
    title: "Application Developer",
    company: "Vavili Technologies",
    description: "Designed full stack web applications, an avid member on working on our product <a href=\"https://www.templeswiki.com\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-primary hover:underline\">TemplesWiki</a>."
  },
  {
    period: "2022 - 2023",
    title: "Trainee Software Engineer",
    company: "Valuelabs",
    description: "Worked as a Quality Assurance Engineer, developing and executing comprehensive test plans, collaborating closely with Product Managers on requirement analysis, and documenting test results to maintain high-quality software delivery standards."
  }
];

export const education = [
  {
    period: "2016 - 2020",
    degree: "Bachelor in Electronics and Communication",
    institution: "MVGR College of Engineering",
    description: "Developed a strong foundation in electronics principles while cultivating my interest in software development and data engineering."
  }
];

export const hobbies = [
  { name: "Football", icon: "⚽" },
  { name: "Cricket", icon: "🏏" },
  { name: "Films", icon: "🎬" },
  { name: "Reading", icon: "📚" },
  { name: "Travelling", icon: "✈️" },
  { name: "Music", icon: "🎵" }
];

export const projects = [
  {
    id: 1,
    title: "Cipher Chatbot Assistant",
    description: "A personal chatbot assistant built with Python that helps with daily tasks and answers questions through natural language processing.",
    tags: ["Python", "NLP", "Chatbot", "AI"],
    image: "learning-platform",
    link: "https://github.com/Namidok/Cipher",
    featured: true
  },
  {
    id: 2,
    title: "Dataset Translator App",
    description: "A Python application that converts datasets from one language to another. Allows uploading CSV or Excel files and translates content using Google Translate.",
    tags: ["Python", "Google Translate API", "Data Processing", "GUI"],
    image: "ecommerce",
    link: "https://github.com/Namidok/Dataset-Translator-App",
    featured: true
  },
  {
    id: 3,
    title: "Data Engineering Pipeline",
    description: "A project demonstrating ETL processes using Pandas for data cleaning and psycopg2 to interact with PostgreSQL databases.",
    tags: ["Python", "PostgreSQL", "ETL", "Pandas"],
    image: "dashboard",
    link: "https://github.com/Namidok/Data-Engineer-with-Python",
    featured: false
  },
  {
    id: 4,
    title: "Weather App",
    description: "A Python script that retrieves and displays current weather details for specified cities using the OpenWeatherMap API.",
    tags: ["Python", "API Integration", "Weather Data"],
    image: "weather-app",
    link: "https://github.com/Namidok/Weather-App",
    featured: false
  },
  {
    id: 5,
    title: "Face Recognition System",
    description: "A face recognition implementation using computer vision techniques to identify and verify people from digital images.",
    tags: ["Python", "Computer Vision", "Machine Learning"],
    image: "portfolio-template",
    link: "https://github.com/Namidok/Face-Recognition",
    featured: false
  },
  {
    id: 6,
    title: "TemplesWiki Website",
    description: "A full-stack web application with interactive features like multi-language support and an NLP-powered chatbot for temple information.",
    tags: ["Python", "Full Stack", "NLP", "ETL"],
    image: "recipe-app",
    link: "https://templeswiki.com",
    featured: true
  }
];
