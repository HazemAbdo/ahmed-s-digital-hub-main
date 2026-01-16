import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
              Data Analyst • Supply Chain Specialist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Ahmed{" "}
            <span className="text-gradient">El_Feky</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A results-driven Data Analyst specializing in Supply Chain, leveraging data to optimize logistics, 
            improve forecasting accuracy, and drive operational efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-glow"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/19kMpX6ZvOkdfJBnlQao5WuBTEbRsM9qG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-muted transition-colors duration-300"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6"
          >
            <a
              href="mailto:Ahmedibraahiim11@gmail.com"
              className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-el-feky-836b47192/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
