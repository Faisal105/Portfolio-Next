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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--secondary)/0.15),transparent_50%)]"
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,hsl(var(--accent)/0.15),transparent_50%)]"
        />
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
            <div className="inline-block mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px]"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Code2Icon className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            </div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern
              technologies
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div variants={itemVariants} className="lg:w-2/5">
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/assets/about.jpg"
                      alt="Coding workspace setup"
                      fill
                      className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center"
                >
                  <Code2Icon className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl backdrop-blur-sm border border-secondary/20 flex items-center justify-center"
                >
                  <span className="text-secondary font-bold text-lg">5+</span>
                </motion.div>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 rounded-2xl -z-10 translate-x-6 translate-y-6 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-3/5 space-y-8">
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold flex items-center gap-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Full Stack Developer with 5+ Years of Experience
              </motion.h3>

              <div className="space-y-6 text-lg leading-relaxed">
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  I&apos;m a passionate developer specializing in building
                  exceptional digital experiences. With expertise in both
                  frontend and backend technologies, I create robust and
                  scalable applications that deliver real value to users and
                  businesses.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  My journey in web development began with a curiosity for
                  creating interactive interfaces, which evolved into a deep
                  understanding of the full development stack. I&apos;ve worked
                  with diverse teams across multiple industries, always focused
                  on delivering high-quality code and exceptional user
                  experiences.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  Currently, I&apos;m focused on building accessible,
                  human-centered products using modern frameworks and best
                  practices. I&apos;m constantly expanding my knowledge and
                  staying up-to-date with the latest technologies.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10"
                >
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-secondary/10"
                >
                  <div className="text-3xl font-bold text-secondary mb-1">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-accent/10"
                >
                  <div className="text-3xl font-bold text-accent mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <a
                    href="/assets/resume.pdf"
                    download
                    className="flex items-center"
                  >
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
