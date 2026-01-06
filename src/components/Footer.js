import React from 'react';

const Footer = () => {
  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' }
  ];

  const socialLinks = [
    { icon: 'bxl-facebook', href: 'https://www.facebook.com/binte.ahmed.129142' }
   
  ];

  return (
    <footer className="bg-white/70 dark:bg-[#020617]/70 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-6 tracking-tight">
          Shimu.
        </h2>
        
        <p className="text-text-muted-light dark:text-text-muted-dark max-w-md mx-auto mb-10 text-lg">
          Frontend Developer focused on building beautiful interfaces & experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10 font-medium">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-full text-text-main-light dark:text-text-main-dark hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-2 hover:shadow-lg"
              href={social.href}
            >
              <i className={`bx ${social.icon} text-xl`}></i>
            </a>
          ))}
        </div>

        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
          © Shimu. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;