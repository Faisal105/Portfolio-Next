"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "../ui/button";
import { DownloadIcon, Code2Icon } from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/5"
            >
              <div className="relative overflow-hidden rounded-lg group">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="/assets/about.jpg"
                    alt="Coding workspace setup"
                    fill
                    className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/10 border-2 border-primary/20 rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="lg:w-3/5"
            >
              <div className="space-y-6">
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-semibold flex items-center gap-3"
                >
                  <Code2Icon className="h-6 w-6 text-primary" />
                  Full Stack Developer with 5+ Years of Experience
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  I&apos;m a passionate developer specializing in building exceptional 
                  digital experiences. With expertise in both frontend and backend 
                  technologies, I create robust and scalable applications that deliver 
                  real value to users.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  My journey in web development began with a curiosity for creating 
                  interactive interfaces, which evolved into a deep understanding of 
                  the full development stack. I&apos;ve worked with diverse teams across 
                  multiple industries, always focused on delivering high-quality code 
                  and exceptional user experiences.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  Currently, I&apos;m focused on building accessible, human-centered products 
                  using modern frameworks and best practices. I&apos;m constantly expanding 
                  my knowledge and staying up-to-date with the latest technologies.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" asChild>
                    <a href="/assets/resume.pdf" download>
                      <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}