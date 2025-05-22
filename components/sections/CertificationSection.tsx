'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Introduction to Front-End Development',
    issuer: 'META',
    date: 'October 2023',
  },
  {
    name: 'Developing Front-End Apps with React',
    issuer: 'Coursera',
    date: 'October 2023',
  },
  {
    name: 'FullStack Application Spring Boot and React',
    issuer: 'Udemy',
    date: 'October 2023',
  },
  {
    name: 'Jira Fundamentals Badge',
    issuer: 'Atlassian',
    date: 'September 2023',
  },
];

export default function CertificationSection() {
  return (
    <section id="certifications" className="py-24 mesh-gradient relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--primary)/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,hsl(var(--secondary)/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,hsl(var(--accent)/0.08),transparent_60%)]" />
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
        <div className="inline-block mb-4">
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        </div>
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Professional certifications and badges earned in web development and project management.</p>
      </motion.div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring' }}
            className="h-full flex"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 p-1 shadow-xl shadow-primary/10 hover:shadow-2xl transition-all duration-500 h-full flex-1">
              <CardContent className="bg-background/90 rounded-lg p-6 flex flex-col items-center text-center min-h-[260px] h-full">
                <Award className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{cert.name}</CardTitle>
                <CardDescription className="text-base font-semibold text-muted-foreground mb-1">{cert.issuer}</CardDescription>
                <Badge className="text-xs bg-secondary text-secondary-foreground">{cert.date}</Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 