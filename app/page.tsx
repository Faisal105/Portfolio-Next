import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificationSection from '@/components/sections/CertificationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen">
        <Toaster />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
}