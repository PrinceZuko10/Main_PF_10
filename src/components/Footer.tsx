import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://github.com/PrinceZuko10',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/somit-prakash-524067284',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:somityadav10@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      label: 'Email'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300"
            >
              Somit
            </button>
            <p className="text-slate-400 leading-relaxed">
              Computer Science student passionate about creating innovative solutions 
              and building amazing user experiences. Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>Bazpur, Uttarakhand, India</p>
              <a
                href="mailto:somityadav10@gmail.com"
                className="block hover:text-white transition-colors duration-300"
              >
                somityadav10@gmail.com
              </a>
              <a
                href="tel:+91-9870816634"
                className="block hover:text-white transition-colors duration-300"
              >
                +91-9870816634
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Open to new opportunities and interesting projects!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm flex items-center">
              © {currentYear} Somit. Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              and lots of coffee
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;