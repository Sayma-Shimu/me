import React from 'react';
import pic from "../asset/pic.png"

const About = () => {
  const stats = [
    { number: '1+', label: 'Years\nLearning' },
    { number: '5+', label: 'Completed\nProjects' }
    
  ];

  return (
    <section className="py-32 relative bg-transparent" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Intro</span>
          <h2 className="text-4xl md:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-4">About Me</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="hidden md:flex justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-3xl opacity-20 transform rotate-6 scale-90 group-hover:rotate-12 group-hover:scale-95 transition-all duration-700"></div>
            <div className="relative w-full aspect-square max-w-md glass-card rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <img
                alt="About Illustration"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                src={pic}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="material-symbols-outlined text-9xl text-white/90 absolute bottom-10 left-10">person</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
              Developing with passion and precision
            </h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-10 leading-loose text-lg font-light">
              I am a dedicated <span className="text-primary font-medium">Web Developer</span> with extensive experience in building high-quality websites and applications. I specialize in <span className="text-secondary font-medium">JavaScript</span> and <span className="text-secondary font-medium">React</span>, with a strong eye for UI/UX design. My goal is to create digital experiences that are not only functional but also visually compelling and memorable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl glass-card hover:border-primary/30 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <h3 className="font-bold text-3xl text-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                    {stat.number}
                  </h3>
                  <span className="block text-sm text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wide whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <a className="inline-flex items-center gap-3 bg-text-main-light dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 group" href="https://www.google.com/search?q=cv+template&oq=cv&gs_lcrp=EgZjaHJvbWUqDwgCEAAYQxixAxiABBiKBTIUCAAQRRg5GEMYgwEYsQMYgAQYigUyDwgBEAAYQxixAxiABBiKBTIPCAIQABhDGLEDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIMCAUQABhDGIAEGIoFMgwIBhAAGEMYgAQYigUyDwgHEAAYQxixAxiABBiKBTISCAgQABhDGIMBGLEDGIAEGIoFMgcICRAAGI8C0gEJNTUyM2owajE1qAIMsAIB8QXRpxTrCQYqow&sourceid=chrome&ie=UTF-8">
              Download CV
              <span className="material-symbols-outlined text-xl group-hover:translate-y-1 transition-transform">download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;