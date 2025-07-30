// page.tsx
'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { ExperienceSection } from '../components/experience-section';
import { SkillsSection } from '../components/skills-section';
import { ProjectsSection } from '../components/projects-section';
import { CertificationsSection } from '../components/certifications-section';
import { ContactSection } from '../components/contact-section';

export default function Page() {
  // Define animations with better performance
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main>
        {/* Hero Section */}
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.fadeUp}
        >
          <HeroSection />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.slideLeft}
        >
          <AboutSection />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.fadeUp}
        >
          <ExperienceSection />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.slideRight}
        >
          <SkillsSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.slideLeft}
        >
          <ProjectsSection />
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.slideRight}
        >
          <CertificationsSection />
        </motion.section>
        
        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.fadeUp}
        >
          <ContactSection />
        </motion.section>
      </main>
    </div>
  );
}
