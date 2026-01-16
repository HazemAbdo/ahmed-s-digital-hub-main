import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Power BI", level: 88 },
  { name: "Excel", level: 92 },
  { name: "Tableau", level: 80 },
  { name: "Data Visualization", level: 85 },
];

const tools = [
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Jupyter",
  "Git",
  "MySQL",
  "PostgreSQL",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-gradient-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technical proficiencies and tools I use to deliver data-driven solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-3 bg-card border border-border rounded-xl text-foreground font-medium hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-6 bg-card rounded-xl border border-border"
            >
              <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
              <p className="text-muted-foreground text-sm mb-4">
                View my complete list of professional certifications and credentials.
              </p>
              <a
                href="https://www.notion.so/Certificates-2e40df3445c2807092fac74afa63116c?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-sm hover:underline"
              >
                View Certificates →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
