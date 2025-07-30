"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Instagram, Github, MapPin, Download, Award, Users, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { personalInfo } from "@/lib/data";
import Heading from "./heading";

export function AboutSection() {
  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${personalInfo.email}`,
      className: "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
      label: "Email"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: personalInfo.socialLinks.linkedin,
      className: "bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: personalInfo.socialLinks.instagram,
      className: "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600",
      label: "Instagram"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: personalInfo.socialLinks.github,
      className: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
      label: "GitHub"
    }
  ];

  const stats = [
    { icon: Award, value: "2+", label: "Years Experience", color: "text-orange-600 dark:text-orange-400" },
    { icon: Users, value: "15+", label: "Projects Completed", color: "text-blue-600 dark:text-blue-400" },
    { icon: Target, value: "100%", label: "Client Satisfaction", color: "text-green-600 dark:text-green-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen pt-16 md:pt-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-blue-200/30 to-purple-200/30 dark:from-orange-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading title="About Me" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about transforming complex data into actionable insights that drive business innovation and success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center max-w-6xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-2xl border-4 border-white dark:border-gray-600 flex items-center justify-center mb-8 overflow-hidden"
          >
            <Image
              src="/data/images/profile.jpeg"
              alt="Balvendra Singh - Data Scientist"
              fill
              className="object-cover rounded-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-full" />
          </motion.div>

          {/* Profile Information */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mb-12">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-blue-600 dark:from-orange-400 dark:to-blue-400 bg-clip-text text-transparent font-[PlayfairDisplay]"
            >
              {personalInfo.name}
            </motion.h3>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4"
            >
              <Badge className="bg-orange-500 text-white px-4 py-2 text-lg">
                {personalInfo.title}
              </Badge>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8"
            >
              <MapPin className="h-5 w-5 md:h-6 md:w-6 mr-2 text-green-500" />
              <span className="text-lg md:text-xl">{personalInfo.location}</span>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 px-4"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Statistics */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-gray-700/20"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center flex-wrap mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className={`rounded-full text-white transition-all duration-300 shadow-lg ${link.className}`}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Download Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 dark:from-orange-600 dark:to-red-600 dark:hover:from-orange-700 dark:hover:to-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <a
                  href={personalInfo.resumeUrl}
                  download="Balvendra_Singh_Resume.pdf"
                  className="flex items-center gap-3 text-lg"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Professional Quote */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 px-8 md:px-12 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 max-w-4xl"
          >
            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center italic relative">
              <span className="text-6xl text-orange-500/30 absolute -top-4 -left-4">"</span>
              Dedicated to transforming data into actionable insights. Passionate about leveraging Generative AI 
              and machine learning to drive innovation and create meaningful impact in the world of technology.
              <span className="text-6xl text-orange-500/30 absolute -bottom-8 -right-4">"</span>
            </blockquote>
            <div className="mt-6 text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Data Scientist Engineer • AI Enthusiast • Innovation Driver
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
