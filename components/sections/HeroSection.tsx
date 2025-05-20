"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Github, Linkedin, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../nav/Navbar";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "TAMM Developer",
  "Software Engineer"
];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100); // Faster initial typing speed

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, currentTitleIndex, delta, tick]);

  const tick = () => {
    let i = currentTitleIndex % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setDelta(30); // Even faster deletion speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(800); // Shorter pause before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex(prevIndex => prevIndex + 1);
      setDelta(80); // Faster start for next word
    } else if (!isDeleting) {
      setDelta(80); // Consistent typing speed
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="home" className="relative min-h-screen">
      <Navbar />
      
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.15),transparent_50%)]" 
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--secondary),0.15),transparent_50%)]" 
        />
      </div>
      
      <div className="container mx-auto px-4 h-[calc(100vh-5rem)] flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Faisal Bashir
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold mb-6 h-[3rem] flex items-center justify-center"
          >
            <div className="flex items-center">
              <span className="text-muted-foreground">I&apos;m a</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-2 inline-block min-w-[280px] text-left">
                {displayText}
                <span className="animate-blink ml-[2px] inline-block">|</span>
              </span>
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Passionate about creating exceptional digital experiences with modern technologies
            and best practices.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group"
              asChild
            >
              <Link href="#projects" className="flex items-center">
                View Projects 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/10"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 mt-16 justify-center"
          >
            <Link href="https://github.com/Faisal105" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/fb258/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}