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
            <a href={project.codeLink || '#'} target="_blank" rel="noopener noreferrer">
              {t("Code")}
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
