import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Chatbot from "@/components/Chatbot";

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);

  const projects = [
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

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  // Sort to show featured projects first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="w-full">
      {/* Header section */}
      <section className="py-24 relative overflow-hidden dot-grid">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            
            <div className="h-1 w-20 bg-primary mb-10"></div>
            
            <p className="text-xl max-w-3xl text-muted-foreground mb-10">
              Explore a selection of my recent work, including web applications, 
              mobile apps, and UI/UX design projects. Each project represents a unique 
              challenge and showcases different aspects of my skills and expertise.
            </p>
            
            {/* Filter buttons */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5" />
                <h2 className="text-lg font-medium">Filter by:</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={filter === null ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFilter(null)}
                  className="rounded-full"
                >
                  All
                </Button>
                
                {allTags.map(tag => (
                  <Button 
                    key={tag}
                    variant={filter === tag ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFilter(tag)}
                    className="rounded-full"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects grid */}
      <AnimatedSection className="py-12 bg-secondary">
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No projects match the selected filter.
              </p>
              <Button 
                className="mt-4" 
                onClick={() => setFilter(null)}
              >
                Clear Filter
              </Button>
            </div>
          )}
          
          <div className="text-center mt-16">
            <Button onClick={() => setShowChat(true)} className="button-glow">
              Ask me about my projects
            </Button>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Call to action */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in working together?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <Button className="text-lg px-8 py-6 button-glow" size="lg" asChild>
            <a href="/contact">Get In Touch</a>
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
