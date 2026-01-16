import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Interested in collaborating or have a question? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="space-y-6">
              <a
                href="mailto:Ahmedibraahiim11@gmail.com"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Ahmedibraahiim11@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-el-feky-836b47192/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    View my repositories
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
