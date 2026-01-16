import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Database, TrendingUp, Truck } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform complex datasets into actionable insights",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Optimize logistics and distribution functions",
  },
  {
    icon: TrendingUp,
    title: "Forecasting",
    description: "Improve accuracy and drive efficiency",
  },
  {
    icon: BarChart3,
    title: "Visualization",
    description: "Create compelling dashboards and reports",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about using data to solve real-world problems and continuously improve supply chain strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With a strong foundation in data analytics, I transform complex datasets into actionable insights 
              that support decision-making and cost reduction across procurement, inventory, and distribution functions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Proficient in tools like <span className="text-primary font-semibold">SQL</span>, 
              <span className="text-primary font-semibold"> Python</span>, 
              <span className="text-primary font-semibold"> Excel</span>, and 
              <span className="text-primary font-semibold"> Tableau</span>, I collaborate closely with 
              cross-functional teams to identify trends, streamline processes, and enhance end-to-end 
              supply chain performance.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 shadow-card"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
