
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold">
            Web Developer & Software Engineer
          </h3>
          
          <p className="text-muted-foreground">
            I'm a passionate web developer and software engineer with a strong foundation in modern web technologies. I enjoy creating responsive, user-friendly websites and applications that solve real-world problems.
          </p>
          
          <p className="text-muted-foreground">
            My journey in software development started with a curiosity about how digital products are built. That curiosity has grown into a career where I continuously learn and adapt to the ever-changing tech landscape.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-xl p-6"
            >
              <h4 className="font-medium mb-3">Contact Details</h4>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <span className="font-medium w-20">Name:</span>
                  <span className="text-muted-foreground">Savan Rathod</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-20">Email:</span>
                  <span className="text-muted-foreground">savansr26@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-20">Location:</span>
                  <span className="text-muted-foreground">Manglore,India</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-6"
            >
              <h4 className="font-medium mb-3">Professional Info</h4>
              <ul className="space-y-2 text-sm text-left">
               
                <li className="flex items-center">
                  <span className="font-medium w-24">Speciality:</span>
                  <span className="text-muted-foreground">Full Stack Development</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-24">Availability:</span>
                  <span className="text-muted-foreground">Available for hire</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/Savans_Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
