"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Terminal,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../nav/Navbar";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "TAMM Developer",
  "Software Engineer",
];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100); // Faster initial typing speed

  useEffect(() => {
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
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => prevIndex + 1);
        setDelta(80); // Faster start for next word
      } else if (!isDeleting) {
        setDelta(80); // Consistent typing speed
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, currentTitleIndex, delta]);

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
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Enhanced gradient background with floating particles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.2),transparent_50%)]"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--secondary),0.2),transparent_50%)]"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--accent),0.15),transparent_50%)]"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-[calc(100vh-5rem)] flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center relative"
        >
          {/* Floating code elements */}
          <motion.div
            animate={{ y: [-20, 20], rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 lg:-left-20 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-primary/20 hidden lg:flex items-center justify-center"
          >
            <Code className="w-8 h-8 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [20, -20], rotate: [360, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -top-5 -right-10 lg:-right-20 w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl backdrop-blur-sm border border-secondary/20 hidden lg:flex items-center justify-center"
          >
            <Terminal className="w-6 h-6 text-secondary" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
          >
            <span className="block mb-2">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-glow">
              Faisal Bashir
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 h-[4rem] flex items-center justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-muted-foreground">I&apos;m a</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block min-w-[300px] sm:min-w-[350px] text-center sm:text-left">
                {displayText}
                <span className="animate-blink ml-[2px] inline-block">|</span>
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with
            modern technologies and best practices. Transforming ideas into
            powerful web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg group glow-hover"
                asChild
              >
                <Link href="#projects" className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg backdrop-blur-sm"
                asChild
              >
                <Link href="#contact" className="flex items-center">
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://github.com/Faisal105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://www.linkedin.com/in/fb258/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm border border-secondary/20 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-primary/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
