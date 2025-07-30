"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Database, LineChart, Cloud, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Heading from "./heading";
import { skills } from "../lib/data";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Brain: Brain,
  Code2: Code2,
  Database: Database,
  LineChart: LineChart,
  Cloud: Cloud,
};

// Color schemes for different skill categories
const colorSchemes = [
  { bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-800", icon: "text-blue-600 dark:text-blue-400", accent: "bg-blue-500" },
  { bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-200 dark:border-green-800", icon: "text-green-600 dark:text-green-400", accent: "bg-green-500" },
  { bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-200 dark:border-purple-800", icon: "text-purple-600 dark:text-purple-400", accent: "bg-purple-500" },
  { bg: "bg-orange-50 dark:bg-orange-900/20", border: "border-orange-200 dark:border-orange-800", icon: "text-orange-600 dark:text-orange-400", accent: "bg-orange-500" },
  { bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-200 dark:border-indigo-800", icon: "text-indigo-600 dark:text-indigo-400", accent: "bg-indigo-500" },
  { bg: "bg-pink-50 dark:bg-pink-900/20", border: "border-pink-200 dark:border-pink-800", icon: "text-pink-600 dark:text-pink-400", accent: "bg-pink-500" },
];

export function SkillsSection() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});
  
  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading title="Technical Expertise" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains 
            of data science, machine learning, and software development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const colorScheme = colorSchemes[index % colorSchemes.length];
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            const isExpanded = expandedCards[index];
            const displayItems = isExpanded ? skill.items : skill.items.slice(0, 4);
            const hasMoreItems = skill.items.length > 4;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`h-full overflow-hidden ${colorScheme.bg} ${colorScheme.border} border-2 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {IconComponent && (
                          <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm`}>
                            <IconComponent className={`w-6 h-6 ${colorScheme.icon}`} />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                            {skill.category}
                          </CardTitle>
                        </div>
                      </div>
                      
                      {/* Progress Circle */}
                      <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="stroke-current text-gray-200 dark:text-gray-600"
                            strokeWidth="3"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <motion.path
                            className={`stroke-current ${colorScheme.icon}`}
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            initial={{ strokeDasharray: "0 100" }}
                            whileInView={{ 
                              strokeDasharray: `${skill.progress} 100`,
                              transition: { duration: 2, delay: index * 0.1 }
                            }}
                            viewport={{ once: true }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-xs font-bold ${colorScheme.icon}`}>
                            {skill.progress}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <Progress 
                        value={skill.progress} 
                        className="h-2"
                        style={{ 
                          background: `linear-gradient(to right, ${colorScheme.accent} ${skill.progress}%, #e5e7eb ${skill.progress}%)`
                        }}
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Skills Items */}
                    <div className="space-y-3">
                      {displayItems.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { delay: (index * 0.1) + (idx * 0.05) }
                          }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 rounded-full ${colorScheme.accent} flex-shrink-0`} />
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    {hasMoreItems && (
                      <motion.button
                        onClick={() => toggleCard(index)}
                        className="mt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>
                          {isExpanded ? 'Show Less' : `Show ${skill.items.length - 4} More`}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </motion.button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              With {skills.length}+ technical domains and rapidly evolving expertise, I stay current with 
              the latest technologies and methodologies in data science and AI. My skill set continues 
              to expand through hands-on projects and industry best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Badge className="bg-orange-500 text-white px-4 py-2">
                {skills.length}+ Technical Areas
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">
                2+ Years Experience
              </Badge>
              <Badge className="bg-green-500 text-white px-4 py-2">
                Production Ready
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
