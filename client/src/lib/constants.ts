export const personalInfo = {
  name: "John Doe",
  role: "Frontend Developer & UI/UX Designer",
  location: "San Francisco, California",
  email: "john@example.com",
  about: `
    I'm a passionate frontend developer and UI/UX designer with over 5 years of experience
    in creating beautiful, functional, and user-centered digital experiences.
    
    Born and raised in New York City, I've always been fascinated by the intersection of
    technology and creativity. This passion led me to pursue a Computer Science degree
    at MIT, where I graduated in 2018.
    
    Currently, I'm working as a Senior Frontend Developer at an AI-focused startup,
    where I lead the development of innovative web applications.
  `,
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "CSS/SCSS", "Tailwind CSS", "Node.js", "UI/UX Design",
    "Git", "RESTful API", "GraphQL", "Responsive Design",
    "Performance Optimization", "Accessibility", "Testing", "CI/CD"
  ],
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe"
  }
};

export const workExperience = [
  {
    period: "2022 - Present",
    title: "Senior Frontend Developer",
    company: "AI Tech Startup",
    description: "Leading the frontend development of an AI-powered web application. Working with React, TypeScript, and modern CSS frameworks."
  },
  {
    period: "2020 - 2022",
    title: "Frontend Developer",
    company: "Microsoft",
    description: "Worked on the Microsoft Teams UI. Implemented new features and improved existing ones. Collaborated with designers and backend developers."
  },
  {
    period: "2018 - 2020",
    title: "Junior Web Developer",
    company: "Google",
    description: "Contributed to Google's internal tools. Gained experience with large-scale web applications and best practices."
  }
];

export const education = [
  {
    period: "2014 - 2018",
    degree: "B.S. in Computer Science",
    institution: "Massachusetts Institute of Technology",
    description: "Focused on Human-Computer Interaction and Web Technologies. Graduated with honors."
  },
  {
    period: "2019",
    degree: "UI/UX Design Certification",
    institution: "Design Institute of San Francisco",
    description: "Specialized in user-centered design principles and interactive prototyping methodologies."
  }
];

export const hobbies = [
  { name: "Photography", icon: "📷" },
  { name: "Hiking", icon: "🥾" },
  { name: "Coding Side Projects", icon: "💻" },
  { name: "Reading", icon: "📚" },
  { name: "Traveling", icon: "✈️" },
  { name: "Playing Guitar", icon: "🎸" }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Learning Platform",
    description: "A web application that uses machine learning algorithms to personalize learning paths for students.",
    tags: ["React", "Node.js", "Machine Learning", "Web App"],
    image: "learning-platform",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A full-featured online store with product catalog, shopping cart, and payment integration.",
    tags: ["Next.js", "Stripe", "TypeScript", "Web App"],
    image: "ecommerce",
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    tags: ["React", "D3.js", "Dashboard", "Web App"],
    image: "dashboard",
    link: "#",
    featured: false
  },
  {
    id: 4,
    title: "Recipe Sharing App",
    description: "Mobile application for sharing and discovering recipes with social features.",
    tags: ["React Native", "Firebase", "Mobile App"],
    image: "recipe-app",
    link: "#",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website Template",
    description: "A customizable template for creating professional portfolio websites.",
    tags: ["HTML/CSS", "JavaScript", "Web App"],
    image: "portfolio-template",
    link: "#",
    featured: false
  },
  {
    id: 6,
    title: "Weather Application",
    description: "Real-time weather information app with location-based forecasts and alerts.",
    tags: ["React", "API Integration", "Web App"],
    image: "weather-app",
    link: "#",
    featured: false
  }
];
