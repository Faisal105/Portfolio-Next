"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Layers,
  Briefcase,
  Award,
  Folder,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home", icon: <Home className="w-4 h-4 mr-2" /> },
  { name: "About", href: "/#about", icon: <User className="w-4 h-4 mr-2" /> },
  {
    name: "Skills",
    href: "/#skills",
    icon: <Layers className="w-4 h-4 mr-2" />,
  },
  {
    name: "Experience",
    href: "/#experience",
    icon: <Briefcase className="w-4 h-4 mr-2" />,
  },
  {
    name: "Certifications",
    href: "/#certifications",
    icon: <Award className="w-4 h-4 mr-2" />,
  },
  {
    name: "Projects",
    href: "/#projects",
    icon: <Folder className="w-4 h-4 mr-2" />,
  },
  {
    name: "Contact",
    href: "/#contact",
    icon: <Mail className="w-4 h-4 mr-2" />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl shadow-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/#home" className="font-bold text-xl relative group">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Faisal
              </span>
              <span className="ml-1">Bashir</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={link.href}
                  className={`relative group py-2 px-3 flex items-center rounded-lg transition-all duration-300 ${
                    activeLink === link.href.replace("/#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  <motion.div
                    className="mr-2"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.icon}
                  </motion.div>
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {activeLink === link.href.replace("/#", "") && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <div className="pl-4 border-l border-primary/20">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed inset-x-0 top-[73px] p-4 bg-background/95 backdrop-blur-lg border-b border-primary/10 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative group py-2 px-4 rounded-lg transition-colors flex items-center ${
                      activeLink === link.href.replace("/#", "")
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.icon}
                    <span className="relative z-10">{link.name}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
