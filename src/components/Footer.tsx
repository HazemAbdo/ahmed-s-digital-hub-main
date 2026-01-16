import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ahmed El_Feky. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.kaggle.com/ahmedelfeky1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Kaggle
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-el-feky-836b47192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
