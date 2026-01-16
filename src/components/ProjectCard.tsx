import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({ title, description, category, link, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group block p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
          {category}
        </span>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.a>
  );
};

export default ProjectCard;
