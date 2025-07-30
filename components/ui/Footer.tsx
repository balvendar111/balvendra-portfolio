import { personalInfo } from "@/lib/data";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-blue-400"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: personalInfo.socialLinks.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="h-4 w-4" />,
      href: personalInfo.socialLinks.github,
      label: "GitHub", 
      color: "hover:text-gray-400"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-wide font-serif bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  BS
                </h3>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
              <div>
                <p className="font-semibold text-white">{personalInfo.name}</p>
                <p className="text-sm text-gray-400">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Transforming data into actionable insights with expertise in AI & Machine Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                About
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 mb-4">
              <p className="text-gray-400 text-sm">{personalInfo.location}</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm block"
              >
                {personalInfo.email}
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-gray-400 ${link.color} transform hover:scale-110`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
  