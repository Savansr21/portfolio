
import { motion } from "framer-motion";
import { ExternalLink, Github, Link } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "AI Meal Planner",
      description: "An AI-powered meal planning Saas application that generates personalized meal plans based on user preferences and dietary restrictions. Built with React, Node.js, MongoDB, and TensorFlow.js.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Nextjs", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL","Clerk"],
      demoUrl: "https://drive.google.com/file/d/1zqhlhOdwegtFbJdAIKahINsiI3JYlQwo/view?usp=drive_link",
      repoUrl: "https://github.com/savansr/ai-meal-planner.git",
    },
    {
      title: "Conversa",
      description: "A real-time chat application that allows users to communicate with each other. Built with React, Socket.io,MongoDB and Daisy-UI.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Socket.io", "MongoDB", "Daisy-UI"],
      demoUrl: "https://conversa-the-chat-app.netlify.app/",
      repoUrl: "https://github.com/savansr/conversa.git",
    },
    {
      title: "Volunteer Site",
      description: "A volunteer platform that connects volunteers . Features include user registration, and Donation With Stripe integration.",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Stripe-API", "MongoDB", "CSS"],
      demoUrl: "https://volunteer-site-lnxg.vercel.app/",
      repoUrl: "https://github.com/savansr/volunteer-site.git",
    },
    {
      title: "Doc-Chat AI",
      description: "An RAG based based app which can answer your queries related to pdf documents.Features include multiple pdf upload and text-hightlighting.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2d8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "FastAPI", "LangChain", "Pincecone-vectorDB"],
      demoUrl: "https://doc-chat-ai-dgsp.vercel.app/",
      repoUrl: "https://github.com/savansr/docChat-AI.git",
    },
    {
      title: "College Tips Gallery",
      description:"A Response Gallery of CollegeTips",
      images:"",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Here are some of the projects I've worked on. Each project reflects my skills, creativity, and problem-solving approach.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={item} />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/savansr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <Github className="mr-2 h-4 w-4" />
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, variants }: { project: Project, variants: any }) {
  return (
    <motion.div 
      className="group glass rounded-xl overflow-hidden h-full flex flex-col"
      variants={variants}
    >
      <div className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex space-x-3">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/90 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/90 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="View Code"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
