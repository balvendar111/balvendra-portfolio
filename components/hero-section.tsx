'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { handleSmoothScroll } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { Button } from "./ui/button";
import Typed from "typed.js";

export function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Data Scientist",
          "AI Engineer", 
          "Machine Learning Expert",
          "Python Developer",
          "Deep Learning Specialist",
          "Generative AI Expert"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => typed.destroy();
    }
  }, []);

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-blue-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: personalInfo.socialLinks.linkedin,
      label: "LinkedIn", 
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: personalInfo.socialLinks.github,
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <span className="text-2xl mr-3">👋</span>
            <span className="text-lg font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              नमस्ते, I'm Balvendra Singh
            </span>
          </motion.div>

          {/* Main Title with Typing Animation */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="block text-gray-900 dark:text-white">I'm a</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent min-h-[1.2em]">
                <span ref={typedRef}></span>
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming data into <span className="font-semibold text-orange-500">actionable insights</span> with 
            <span className="font-semibold text-red-500"> 2+ years</span> of experience in 
            <span className="font-semibold text-pink-500"> AI & Machine Learning</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-400 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
            >
              <a
                href={personalInfo.resumeUrl}
                download="Balvendra_Singh_Resume.pdf"
                className="flex items-center"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 ${link.color}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.button
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="flex flex-col items-center space-y-1 text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/20"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">Scroll Down</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #gray-300 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
