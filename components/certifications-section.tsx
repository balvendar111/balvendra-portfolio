"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Download, Award, Calendar, Building } from "lucide-react";
import Heading from "./heading";
import { certifications } from "../lib/data";

export function CertificationsSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleCertifications = () => {
    setVisibleCount(prevCount =>
      prevCount >= certifications.length ? 6 : certifications.length
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="certifications"
      className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
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
          <Heading title="Certifications & Achievements" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in data science, 
            cloud computing, and machine learning technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.slice(0, visibleCount).map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Certificate Image */}
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <Image
                        src={cert.image}
                        alt={`${cert.issuer} certification`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Achievement Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Certified
                      </Badge>
                    </div>
                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                {/* Certificate Content */}
                <CardContent className="p-6 flex-1">
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </CardTitle>
                  
                  {/* Issuer */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Skills/Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Skills Validated
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {/* Add some sample skills based on cert type */}
                      {cert.title.toLowerCase().includes('aws') && (
                        <>
                          <Badge variant="secondary" className="text-xs">AWS</Badge>
                          <Badge variant="secondary" className="text-xs">Cloud</Badge>
                        </>
                      )}
                      {cert.title.toLowerCase().includes('machine learning') && (
                        <>
                          <Badge variant="secondary" className="text-xs">ML</Badge>
                          <Badge variant="secondary" className="text-xs">AI</Badge>
                        </>
                      )}
                      {cert.title.toLowerCase().includes('python') && (
                        <Badge variant="secondary" className="text-xs">Python</Badge>
                      )}
                      {cert.title.toLowerCase().includes('nlp') && (
                        <Badge variant="secondary" className="text-xs">NLP</Badge>
                      )}
                      {cert.title.toLowerCase().includes('sql') && (
                        <>
                          <Badge variant="secondary" className="text-xs">SQL</Badge>
                          <Badge variant="secondary" className="text-xs">Big Data</Badge>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Certificate Actions */}
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {cert.credentialUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => {
                      // You can implement actual certificate download here
                      window.open('#', '_blank');
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Certificate
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {certifications.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <Button
              onClick={toggleCertifications}
              variant="outline"
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full"
            >
              {visibleCount >= certifications.length ? "Show Less" : `Show ${certifications.length - visibleCount} More`}
            </Button>
          </motion.div>
        )}

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Professional Validation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {certifications.length}+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Certifications Earned
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Technology Domains
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Industry Recognized
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Continuously expanding knowledge through industry-leading certification programs 
                from AWS, Google Cloud, and top educational platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
