import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FMCG Data Analysis",
    description: "Used Python to analyze open source FMCG data and discover actionable business insights for the fast-moving consumer goods industry.",
    category: "Supply Chain",
    link: "https://www.kaggle.com/code/ahmedelfeky1/fmcg-data-analysis",
  },
  {
    title: "E-Commerce Project (Olist)",
    description: "Comprehensive analysis of e-commerce data to understand customer behavior, sales trends, and delivery performance optimization.",
    category: "Supply Chain",
    link: "https://www.kaggle.com/code/ahmedelfeky1/e-commerce-public-dataset-by-olist",
  },
  {
    title: "Retail Store Analysis",
    description: "Integrated Python with SQL to identify VIP customers, analyze sales trends over time, and optimize retail operations.",
    category: "Supply Chain",
    link: "https://www.kaggle.com/code/ahmedelfeky1/retail-store-analysis",
  },
  {
    title: "Python Projects Portfolio",
    description: "A collection of data analysis projects showcasing Python skills, from data cleaning to advanced visualizations.",
    category: "Python",
    link: "https://www.notion.so/projects-1480df3445c2812ba185dc5295a7b42a",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my data analysis projects across supply chain, e-commerce, and retail domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
