import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
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
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactItem 
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              info="savansr26@gmail.com"
              link="mailto:savansr26@gmail.com"
            />
            
            <ContactItem 
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              info="+916361101539"
              link="tel:+916361101539"
            />
            
            <ContactItem 
              icon={<MapPin className="h-5 w-5" />}
              title="Location"
              info="Manglore, India"
            />
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <SocialIcon name="twitter" />
                <SocialIcon name="linkedin" />
                <SocialIcon name="github" />
                <SocialIcon name="instagram" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ 
  icon, 
  title, 
  info, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  info: string; 
  link?: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary/10 p-3 rounded-full text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {link ? (
          <a href={link} className="text-muted-foreground hover:text-primary transition-colors">
            {info}
          </a>
        ) : (
          <p className="text-muted-foreground">{info}</p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  // Map of social media platforms to their Lucide icons
  const getLucideIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      case 'instagram': return <Instagram className="h-5 w-5" />;
      default: return <Github className="h-5 w-5" />;
    }
  };
  
  const getIconLink = (platform: string) => {
    const platformLinks: Record<string, string> = {
      twitter: "https://x.com/ByteSmith21",
      linkedin: "https://www.linkedin.com/in/savan-rathod-0198b429a?trk=contact-info",
      github: "https://github.com/savansr",
      instagram: "https://www.instagram.com/savan_rathod202",
    };
    return platformLinks[platform] || "#";
  };

  return (
    <motion.a
      href={getIconLink(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {getLucideIcon(name)}
    </motion.a>
  );
}
