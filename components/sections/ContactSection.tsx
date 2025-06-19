"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            ease: "linear",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,hsl(var(--secondary)/0.15),transparent_50%)]"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
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
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            </div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's work together to create
              something amazing!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out for collaborations, job opportunities, or
                just to say hello! I&apos;ll do my best to get back to you as
                soon as possible.
              </p>

              <div className="space-y-6">
                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:faisalbashir517@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      faisalbashir517@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/+971507127683"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send a message || +971507127683
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Social
                    </h4>
                    <div className="flex gap-3 mt-2">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Faisal105"
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/fb258/"
                        className="px-3 py-1 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Send Message
                </h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Name
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Input
                                  placeholder="Your name"
                                  className="bg-background/50 border-primary/20 focus:border-primary/40 transition-colors duration-300"
                                  {...field}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Email
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Input
                                  placeholder="Your email"
                                  className="bg-background/50 border-primary/20 focus:border-primary/40 transition-colors duration-300"
                                  {...field}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Subject
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Input
                                  placeholder="Subject of your message"
                                  className="bg-background/50 border-primary/20 focus:border-primary/40 transition-colors duration-300"
                                  {...field}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Message
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Textarea
                                  placeholder="Write your message here"
                                  className="min-h-32 resize-none bg-background/50 border-primary/20 focus:border-primary/40 transition-colors duration-300"
                                  {...field}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isSubmitting}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="mr-2"
                            >
                              <Send className="h-4 w-4" />
                            </motion.div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 py-8 border-t border-primary/20 bg-card/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            �� {new Date().getFullYear()}{" "}
            <span className="text-primary font-medium">Faisal Bashir</span>. All
            rights reserved. Built with ❤️ using Next.js, TypeScript & Framer
            Motion.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
