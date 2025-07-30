"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Heading from "./heading";
import { experiences } from "../lib/data";

export function ExperienceSection() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading title="Professional Experience" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in data science and AI engineering, working with cutting-edge technologies 
            to solve complex business problems and drive innovation.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500 dark:from-orange-400 dark:to-blue-400 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 hidden md:block" />

                {/* Experience Card */}
                <Card className="ml-0 md:ml-20 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold text-lg">{exp.company}</span>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        {exp.duration.includes("Present") && (
                          <Badge className="bg-green-500 text-white px-3 py-1">
                            Current Position
                          </Badge>
                        )}
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                        Key Achievements & Responsibilities
                      </h4>
                      <div className="space-y-3">
                        {exp.description.map((responsibility, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: 0.1 * idx }
                            }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 group/item"
                          >
                            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {responsibility}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ 
                              opacity: 1, 
                              scale: 1,
                              transition: { delay: 0.05 * techIndex }
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge 
                              variant="secondary"
                              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Career Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {experiences.reduce((acc, exp) => acc + exp.technologies.length, 0)}+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Technologies Mastered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
