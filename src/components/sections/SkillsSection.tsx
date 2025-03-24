
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cpu, 
  PenTool, 
  Briefcase,
  Layers,
  Settings,
  Shield,
  Award
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layers className="h-6 w-6" />,
      items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "TailwindCSS"],
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL"],
      color: "bg-green-500/10 text-green-500"
    },
    {
      category: "Development Tools",
      icon: <Settings className="h-6 w-6" />,
      items: ["Git", "GitHub", "VS Code", "Postman","Netlify", "Vercel"],
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      items: ["JavaScript", "TypeScript", "Python", "C++","SQL"],
      color: "bg-amber-500/10 text-amber-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="max-w-2xl mx-auto mt-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My technical skills and specialized areas of expertise developed through years of hands-on experience.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup) => (
            <motion.div 
              key={skillGroup.category}
              className="glass rounded-xl p-6 h-full border border-border/50 backdrop-blur-sm"
              variants={item}
              whileHover={cardVariants.hover}
            >
              <div className={`rounded-full ${skillGroup.color} w-12 h-12 flex items-center justify-center mb-4`}>
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-4 rounded-full bg-primary/5 text-primary mb-4">
            <Award className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Continuous Growth</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm committed to staying at the forefront of technology trends and continuously expanding my skills through ongoing education and practical application.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
