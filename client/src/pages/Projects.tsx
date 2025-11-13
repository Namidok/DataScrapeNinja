import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Chatbot";

export default function Projects() {
  const { t } = useTranslation();
  const [showChat, setShowChat] = useState(false);

  const projects = [
    {
      id: 1,
      title: "German Lingua Hub",
      description: t("AI-Powered Learning Platform Description"),
      tags: ["React", "Node.js", "Machine Learning", "Web App"],
      image: "learning-platform",
      link: "https://germanlinguahub-production.up.railway.app/",
      codeLink: "https://github.com/Namidok/GermanLinguaHub",
      featured: true
    },
    {
      id: 2,
      title: t("E-Commerce Website"),
      description: t("E-Commerce Website Description"),
      tags: ["Next.js", "Stripe", "TypeScript", "Web App"],
      image: "ecommerce",
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: t("Data Visualization Dashboard"),
      description: t("Data Visualization Dashboard Description"),
      tags: ["React", "D3.js", "Dashboard", "Web App"],
      image: "dashboard",
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: t("Recipe Sharing App"),
      description: t("Recipe Sharing App Description"),
      tags: ["React Native", "Firebase", "Mobile App"],
      image: "recipe-app",
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: t("Portfolio Website Template"),
      description: t("Portfolio Website Template Description"),
      tags: ["HTML/CSS", "JavaScript", "Web App"],
      image: "portfolio-template",
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: t("Weather Application"),
      description: t("Weather Application Description"),
      tags: ["React", "API Integration", "Web App"],
      image: "weather-app",
      link: "#",
      featured: false
    }
  ];

  // Sort to show featured projects first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="w-full">
      {/* Header section */}
      <section className="py-24 relative overflow-hidden projects-bg">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-[20%] w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="gradient-text text-4xl md:text-6xl font-bold mb-6">
              {t("My Projects")}
            </h1>
            
            <div className="h-1 w-20 bg-primary mb-10"></div>
            
            <p className="text-xl max-w-3xl text-muted-foreground mb-10">
              {t("Projects Intro")}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects grid */}
      <AnimatedSection className="py-12 bg-secondary about-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button onClick={() => setShowChat(true)} className="button-glow">
              {t("Ask me about my projects")}
            </Button>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Call to action */}
      <AnimatedSection className="py-24 contact-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("Interested in working together?")}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("Collaboration CTA")}
          </p>
          
          <Button className="text-lg px-8 py-6 button-glow" size="lg" asChild>
            <a href="/contact">{t("Get In Touch")}</a>
          </Button>
        </div>
      </AnimatedSection>
      
      {/* Chatbot */}
      {showChat && (
        <Chatbot onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}