"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, 
  PenTool, 
  Server, 
  Database,
  Layout,
  Figma,
  Palette,
  Layers,
  Smartphone,
  Monitor,
  GitBranch,
  Terminal,
  Sparkles
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React.js", icon: <Code2 className="h-6 w-6" />, category: "Frontend" },
  { name: "Next.js", icon: <Code2 className="h-6 w-6" />, category: "Frontend" },
  { name: "TypeScript", icon: <Code2 className="h-6 w-6" />, category: "Frontend" },
  { name: "Angular", icon: <Code2 className="h-6 w-6" />, category: "Frontend" },
  { name: "HTML/CSS", icon: <Code2 className="h-6 w-6" />, category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: <Server className="h-6 w-6" />, category: "Backend" },
  { name: "Express", icon: <Server className="h-6 w-6" />, category: "Backend" },
  { name: "REST APIs", icon: <Server className="h-6 w-6" />, category: "Backend" },
  { name: "GraphQL", icon: <Server className="h-6 w-6" />, category: "Backend" },
  
  // Database
  { name: "MongoDB", icon: <Database className="h-6 w-6" />, category: "Database" },
  { name: "SQL", icon: <Database className="h-6 w-6" />, category: "Database" },
  
  // UI/UX
  { name: "Figma", icon: <Figma className="h-6 w-6" />, category: "Design" },
  { name: "UI Design", icon: <Layout className="h-6 w-6" />, category: "Design" },
  { name: "UX Design", icon: <Palette className="h-6 w-6" />, category: "Design" },
  { name: "Wireframing", icon: <Layers className="h-6 w-6" />, category: "Design" },
  { name: "Prototyping", icon: <Smartphone className="h-6 w-6" />, category: "Design" },
  { name: "Responsive Design", icon: <Monitor className="h-6 w-6" />, category: "Design" },
  
  // Tools & DevOps
  { name: "Git/GitHub", icon: <GitBranch className="h-6 w-6" />, category: "Tools" },
  { name: "CI/CD", icon: <Terminal className="h-6 w-6" />, category: "Tools" },
  { name: "Azure", icon: <Terminal className="h-6 w-6" />, category: "Tools" },
  { name: "Docker", icon: <Terminal className="h-6 w-6" />, category: "Tools" },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-24 mesh-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,hsl(var(--secondary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,hsl(var(--accent)/0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              Crafting digital experiences with modern technologies
            </p>
          </motion.div>

          <div className="overflow-hidden mb-16 p-4">
            <div className="skills-carousel flex gap-8">
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  variants={itemVariants}
                  className="flex-none w-[200px] p-4 rounded-lg backdrop-blur-sm bg-card/50 border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 text-primary backdrop-blur-sm">
                      {skill.icon}
                    </div>
                    <span className="font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Frontend", "Backend", "Design", "Tools"].map((category, index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="p-6 rounded-lg backdrop-blur-sm bg-card/50 border border-primary/10 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:text-accent transition-colors duration-300">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <motion.li
                        key={skill.name}
                        variants={itemVariants}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="text-primary/80 group-hover/item:text-primary transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.li>
                    ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}