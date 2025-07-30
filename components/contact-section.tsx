'use client';

import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader2, MapPin, Clock, Download, MessageCircle, User, AtSign, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Heading from "./heading";
import { isValidEmail } from "@/lib/utils";
import { emailConfig, isEmailConfigured } from "@/lib/email-config";
import { personalInfo } from "@/lib/data";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    // Reset submit status when user modifies form
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is configured
      if (!isEmailConfigured()) {
        // Demo mode - show success without actually sending
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        setSubmitStatus('success');
        toast.success('✨ Message sent successfully! (Demo Mode - Configure EmailJS to enable real emails)');
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Real EmailJS integration
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
          to_email: personalInfo.email,
          reply_to: formData.email,
        };

        const result = await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          templateParams,
          emailConfig.publicKey
        );

        if (result.status === 200) {
          setSubmitStatus('success');
          toast.success('✨ Message sent successfully! I\'ll get back to you soon.');
          
          // Reset form
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          // Send browser notification if permission granted
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('New Contact Form Message!', {
              body: `From: ${formData.name} - ${formData.subject}`,
              icon: '/data/images/profile.jpeg'
            });
          }
        }
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      toast.error('❌ Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitStatus('idle');
    toast.success('Form cleared!');
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  React.useEffect(() => {
    // Request notification permission on component mount
    requestNotificationPermission();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Professional Profile",
      href: personalInfo.socialLinks.linkedin,
      color: "text-blue-700 dark:text-blue-300"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Code Repository",
      href: personalInfo.socialLinks.github,
      color: "text-gray-800 dark:text-gray-200"
    }
  ];

  return (
    <section
      id="contact"
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
          <Heading title="Let's Connect" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss innovative solutions? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                  Send a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`pl-10 h-12 border-2 rounded-lg transition-all ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400'
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`pl-10 h-12 border-2 rounded-lg transition-all ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400'
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`pl-10 h-12 border-2 rounded-lg transition-all ${
                          errors.subject 
                            ? 'border-red-500 focus:ring-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400'
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.subject && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`border-2 rounded-lg transition-all resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400'
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Form Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Sent!
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleReset}
                      variant="outline"
                      size="lg"
                      disabled={isSubmitting}
                      className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-6 py-3"
                    >
                      Reset
                    </Button>
                  </motion.div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <span className="text-red-800 dark:text-red-200 font-medium">
                        Failed to send message. Please try again or contact me directly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick Contact Methods */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${method.color}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        {method.label}
                      </div>
                      <a 
                        href={method.href}
                        target={method.href && method.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Response Time & Location */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100">Quick Response</h4>
                  </div>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    I typically respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold text-green-900 dark:text-green-100">Location</h4>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    {personalInfo.location} • Available for remote collaborations worldwide
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Resume Download */}
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Download className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100">Resume Available</h4>
                </div>
                <p className="text-orange-800 dark:text-orange-200 text-sm mb-4">
                  Download my complete resume with detailed experience, skills, and achievements.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full"
                >
                  <a
                    href={personalInfo.resumeUrl}
                    download="Balvendra_Singh_Resume.pdf"
                    className="flex items-center justify-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Whether it's a data science project, AI solution, or innovative application, 
              I'm excited to collaborate and bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-orange-500 text-white px-4 py-2">
                Data Science Expert
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">
                AI/ML Specialist  
              </Badge>
              <Badge className="bg-green-500 text-white px-4 py-2">
                Cloud Solutions
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          },
        }}
      />
    </section>
  );
}
