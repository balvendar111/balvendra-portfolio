"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Heading from "./heading";
import { projects } from "../lib/data";
import { ExternalLink, Github, Star } from "lucide-react";

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Get unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  // Handle filter changes and reset visible count
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setVisibleCount(6); // Reset to initial count when filter changes
  };

  const toggleProjects = () => {
    setVisibleCount(prevCount => 
      prevCount >= filteredProjects.length ? 6 : filteredProjects.length
    );
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading title="Featured Projects" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical expertise in data science, machine learning, and full-stack development. 
            Each project demonstrates real-world problem solving and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            onClick={() => handleFilterChange("all")}
            variant={filter === "all" ? "default" : "outline"}
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              filter === "all" 
                ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25" 
                : "hover:bg-orange-50 dark:hover:bg-orange-900/20 border-gray-300 dark:border-gray-600"
            }`}
          >
            All Projects
          </Button>
          {["AI/ML", "Python", "Cloud", "React", "NLP"].map((tech) => (
            <Button
              key={tech}
              onClick={() => handleFilterChange(tech)}
              variant={filter === tech ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                filter === tech 
                  ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25" 
                  : "hover:bg-orange-50 dark:hover:bg-orange-900/20 border-gray-300 dark:border-gray-600"
              }`}
            >
              {tech}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={filter} // Re-animate when filter changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Project Image */}
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500 text-white flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>

                {/* Project Content */}
                <CardContent className="p-6 flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                {/* Project Actions */}
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {!project.link && !project.github && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex-1 cursor-not-allowed opacity-60"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            key={`show-more-${filter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <Button
              onClick={toggleProjects}
              variant="outline"
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full"
            >
              {visibleCount >= filteredProjects.length ? "Show Less" : `Show ${filteredProjects.length - visibleCount} More`}
            </Button>
          </motion.div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for "{filter}". Try a different filter or view all projects.
            </p>
            <Button
              onClick={() => handleFilterChange("all")}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
            >
              View All Projects
            </Button>
          </motion.div>
        )}

        {/* Results Count */}
        {filteredProjects.length > 0 && (
          <motion.div
            key={`results-${filter}-${visibleCount}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length} projects
              {filter !== "all" && ` filtered by "${filter}"`}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
