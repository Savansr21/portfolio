
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      case 'instagram': return <Instagram className="h-5 w-5" />;
      default: return <Github className="h-5 w-5" />;
    }
  };

  return (
    <footer className="bg-secondary px-6 py-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <motion.button
            onClick={scrollToTop}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Savan Rathod</h3>
            <p className="text-muted-foreground">
              A passionate web developer and software engineer focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
               Manglore, India
              </li>
              <li>
                <a href="mailto:savansr26@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                 savansr26@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916361101539" className="text-muted-foreground hover:text-primary transition-colors">
                  +916361101539
                </a>
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="text-lg font-medium mb-3">Connect</h4>
              <div className="flex space-x-3">
                <motion.a
                  href="https://github.com/savansr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  {getSocialIcon('github')}
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/savan-rathod-0198b429a?trk=contact-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  {getSocialIcon('linkedin')}
                </motion.a>
                <motion.a
                  href="https://x.com/ByteSmith21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Twitter"
                >
                  {getSocialIcon('twitter')}
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/savan_rathod202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram"
                >
                  {getSocialIcon('instagram')}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Savan Rathod. All Rights Reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
