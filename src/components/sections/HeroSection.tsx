
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 px-6 bg-hero-pattern overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Web Developer
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Savan Rathod</span>,<br />
            Web Developer & Software Engineer
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build exceptional digital experiences with modern technologies
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-all hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="lg:col-span-2 aspect-square max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative w-full h-full">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-2">
              <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-card shadow-xl">
                <img 
                  src="./portfolio_image.jpg" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute inset-0 border-2 rounded-2xl border-primary/30 -m-2 -rotate-3"></div>
            <div className="absolute inset-0 border-2 rounded-2xl border-primary/10 -m-2 rotate-3"></div>
          </div>
        </motion.div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </a>
    </section>
  );
}
