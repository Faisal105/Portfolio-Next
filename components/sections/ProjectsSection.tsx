"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  ExternalLink, 
  Github, 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Cloud, 
  ShoppingCart, 
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  category: string;
  icon: JSX.Element;
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "tamm",
      title: "TAMM Abu Dhabi",
      description: "A comprehensive digital platform for government services, providing citizens with easy access to various services and information.",
      images: [
        "/assets/tamm-1.png",
        "/assets/tamm-2.png",
        "/assets/tamm-3.png",
        "/assets/tamm-4.png",
        "/assets/tamm-5.png"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Node.js", "Azure", "SQL"],
      liveUrl: "https://www.tamm.abudhabi/",
      category: "Government Services",
      icon: <Server className="h-6 w-6 text-primary" />,
    },
    {
      id: "ufa",
      title: "UFA.com",
      description: "An innovative platform for agricultural management and farming solutions, featuring advanced crop monitoring and yield optimization tools.",
      images: [
        "/assets/ufa-1.png",
        "/assets/ufa-2.png",
        "/assets/ufa-3.png",
        "/assets/ufa-4.png",
        "/assets/ufa-5.png",
        "/assets/ufa-6.png",
        "/assets/ufa-7.png"
      ],
      technologies: ["Angular", "Spartacus", "Handlebars.js", "Bootstrap", "Azure", "CI/CD"],
      liveUrl: "https://ufa.com/",
      category: "Agriculture & Farming",
      icon: <Layout className="h-6 w-6 text-primary" />,
    },
    {
      id: "laminex",
      title: "Laminex Australia",
      description: "E-commerce platform for building materials featuring product catalog, inspiration gallery, and dealer locator.",
      images: [
        "/assets/laminex-1.png",
        "/assets/laminex-2.png",
        "/assets/laminex-3.png",
        "/assets/laminex-4.png",
        "/assets/laminex-5.png"
      ],
      technologies: ["Angular", "Tailwind CSS", "MongoDB", "GitHub"],
      liveUrl: "https://www.laminex.com.au/",
      category: "E-commerce",
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      id: "drreddys",
      title: "Dr. Reddy's Laboratories",
      description: "Corporate website with product information, investor relations, and research publications for a global pharmaceutical company.",
      images: [
        "/assets/drreddys-1.png",
        "/assets/drreddys-2.png",
        "/assets/drreddys-3.png",
        "/assets/drreddys-4.png"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Material UI", "MongoDB", "Node.js"],
      liveUrl: "https://www.drreddys.com/",
      category: "Healthcare",
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
    {
      id: "upbound",
      title: "Upbound Cloud Platform",
      description: "Cloud-native control plane platform for managing infrastructure, services, and applications across multiple clouds using Kubernetes.",
      images: [
        "/assets/upbound-1.png",
        "/assets/upbound-2.png",
        "/assets/upbound-3.png",
        "/assets/upbound-4.png"
      ],
      technologies: ["Kubernetes", "Go", "React", "TypeScript", "GraphQL", "AWS", "GCP", "Azure"],
      liveUrl: "https://www.upbound.com/",
      category: "Cloud Infrastructure",
      icon: <Cloud className="h-6 w-6 text-primary" />,
    },
    {
      id: "rentacenter",
      title: "Rent-A-Center",
      description: "E-commerce and rental management platform offering furniture, electronics, and appliances with flexible payment options.",
      images: [
        "/assets/rentacenter-1.png",
        "/assets/rentacenter-2.png"
      ],
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "AWS", "Redux"],
      liveUrl: "https://www.rentacenter.com/",
      category: "E-commerce & Rentals",
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    },
  ];

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideFromLeft = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const slideFromRight = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      "Government Services": "from-blue-500 to-blue-700",
      "Agriculture & Farming": "from-green-500 to-green-700",
      "E-commerce": "from-purple-500 to-purple-700",
      "Healthcare": "from-red-500 to-red-700",
      "Cloud Infrastructure": "from-cyan-500 to-cyan-700",
      "E-commerce & Rentals": "from-indigo-500 to-indigo-700",
    };
    return colors[category] || "from-primary to-primary/80";
  };

  // Split projects into rows
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--primary)/0.15),transparent_50%)]" 
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,hsl(var(--secondary)/0.15),transparent_50%)]" 
        />
        <motion.div 
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,hsl(var(--accent)/0.1),transparent_50%)]" 
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
          <motion.div variants={slideFromLeft} className="text-center mb-16">
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
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            </div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my latest work and creative solutions across different domains
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* First Row */}
            <motion.div 
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {firstRow.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={slideFromLeft}
                  custom={index}
                  className="h-full perspective-1000"
                >
                  <Card className="group h-full overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="relative h-48 overflow-hidden">
                      <motion.div variants={imageVariants}>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-3 right-3 flex gap-2"
                      >
                        <Badge 
                          variant="secondary" 
                          className={`backdrop-blur-md shadow-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-3 right-3 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                      >
                        <Maximize2 className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardContent className="relative p-6">
                      <motion.div 
                        className="absolute -top-8 left-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 shadow-lg">
                          {project.icon}
                        </div>
                      </motion.div>
                      <div className="pt-4">
                        <motion.h3 
                          className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                          variants={{
                            hover: {
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline"
                              className="bg-background/50 backdrop-blur-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row */}
            <motion.div 
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {secondRow.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={slideFromRight}
                  custom={index}
                  className="h-full perspective-1000"
                >
                  <Card className="group h-full overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="relative h-48 overflow-hidden">
                      <motion.div variants={imageVariants}>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-3 right-3 flex gap-2"
                      >
                        <Badge 
                          variant="secondary" 
                          className={`backdrop-blur-md shadow-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-3 right-3 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                      >
                        <Maximize2 className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardContent className="relative p-6">
                      <motion.div 
                        className="absolute -top-8 left-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 shadow-lg">
                          {project.icon}
                        </div>
                      </motion.div>
                      <div className="pt-4">
                        <motion.h3 
                          className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                          variants={{
                            hover: {
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline"
                              className="bg-background/50 backdrop-blur-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl">
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className={`backdrop-blur-md shadow-lg bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white`}
                  >
                    {selectedProject.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="bg-background/50 backdrop-blur-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}