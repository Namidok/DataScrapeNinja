import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      className={`rounded-xl overflow-hidden bg-card border border-border ${
        project.featured ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Project Image */}
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="p-6 text-4xl">
          <motion.svg 
            viewBox="0 0 24 24"
            className="w-full h-full text-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {project.image === "dashboard" && (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                <rect x="4" y="4" width="7" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="13" y="4" width="7" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="4" y="11" width="16" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </>
            )}
            
            {project.image === "ecommerce" && (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                <rect x="4" y="4" width="16" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="4" y="18" width="16" height="2" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="7" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="12" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="17" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </>
            )}
            
            {project.image === "learning-platform" && (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                <rect x="4" y="4" width="6" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="12" y="4" width="8" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="12" y="13" width="8" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </>
            )}
            
            {project.image === "recipe-app" && (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                <rect x="5" y="5" width="14" height="14" rx="7" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="0.5" />
              </>
            )}
            
            {project.image === "portfolio-template" && (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                <circle cx="7" cy="7" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="11" y="5" width="8" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="4" y="12" width="16" height="2" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="4" y="16" width="16" height="2" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </>
            )}
            
            {project.image === "weather-app" && (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
                <circle cx="12" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M8 16h8M10 18h4" stroke="currentColor" strokeWidth="0.5" />
              </>
            )}
          </motion.svg>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          
          {project.featured && (
            <Badge className="bg-primary text-primary-foreground" variant="default">
              {t("Featured")}
            </Badge>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="gap-2" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {t("View Project")}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("Code")}
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
