import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          className="text-3xl font-script font-bold text-main-light dark:text-main-dark hover:text-primary transition-colors group" 
          href="#"
        >
          Shimu
          <span className="text-primary group-hover:text-secondary transition-colors text-4xl">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="nav-link text-text-main-light dark:text-text-main-dark hover:text-primary dark:hover:text-primary font-medium transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="p-2.5 rounded-full bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-text-main-light dark:text-text-main-dark shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
            onClick={toggleTheme}
          >
            <span className={`material-symbols-outlined block ${isDark ? 'hidden' : ''} text-2xl text-amber-500`}>
              dark_mode
            </span>
            <span className={`material-symbols-outlined ${isDark ? 'block' : 'hidden'} text-2xl text-amber-300`}>
              light_mode
            </span>
          </button>

          <button 
            className="md:hidden p-2 text-text-main-light dark:text-text-main-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-nav border-t border-gray-200 dark:border-gray-700">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors py-2"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;