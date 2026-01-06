import React from 'react';
import pic from "../asset/pic.png"

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] relative overflow-hidden" id="home">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full relative z-10">
        {/* Social Links - Desktop */}
        <div className="hidden md:flex flex-col gap-8 col-span-1 justify-center items-center md:items-start text-text-muted-light dark:text-text-muted-dark text-2xl">
          <a className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" href="https://www.facebook.com/binte.ahmed.129142">
            <i className="bx bxl-facebook"></i>
          </a>
          <a className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" href="https://github.com/Sayma-Shimu">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-6 flex flex-col gap-8 md:pl-8 text-center md:text-left order-2 md:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark w-fit mx-auto md:mx-0 border border-primary/20 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-primary tracking-wide uppercase">Available for work</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-text-main-light dark:text-text-main-dark tracking-tight leading-[1.1]">
              Hello, I'm <br />
              <span className="gradient-text">Sayma Ahmed Shimu</span>
            </h1>

            <h3 className="text-xl md:text-3xl font-medium text-text-main-light dark:text-text-main-dark flex items-center justify-center md:justify-start gap-3">
              <span className="w-12 h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full inline-block"></span>
              Frontend Developer
              <span className="animate-waving-hand inline-block">👋</span>
            </h3>

            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-lg mx-auto md:mx-0 text-lg md:text-xl font-light">
              I craft visually stunning, responsive, and user-friendly web interfaces. Passionate about transforming creative concepts into functional digital realities.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-glow hover:shadow-glow-secondary transform hover:-translate-y-1 group" href="#contact">
              Contact Me
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
            </a>
            <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-text-main-light dark:text-text-main-dark border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-all shadow-sm hover:shadow-md group backdrop-blur-sm bg-white/40 dark:bg-white/5" href="#projects">
              View Projects
              <span className="material-symbols-outlined text-xl -rotate-45 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3 text-text-muted-light dark:text-text-muted-dark mt-20 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm font-medium tracking-wide uppercase">Scroll Down</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] animate-float">
            <div className="profile-blob w-full h-full relative border-[6px] border-white/50 dark:border-white/10 shadow-2xl backdrop-blur-sm">
              <img
                alt="shimu - Frontend Developer Portrait"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                src={pic}
              />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -right-8 top-12 p-4 glass-card rounded-2xl shadow-card animate-bounce duration-1000 delay-1000 hidden lg:block">
              <i className="bx bxl-react text-4xl text-[#61DAFB]"></i>
            </div>
            <div className="absolute -left-8 bottom-20 p-4 glass-card rounded-2xl shadow-card animate-bounce duration-1000 delay-500 hidden lg:block">
              <i className="bx bxl-javascript text-4xl text-[#F7DF1E]"></i>
            </div>
          </div>
        </div>

        {/* Social Links - Mobile */}
        <div className="md:hidden flex gap-8 justify-center pb-8 order-3 text-text-muted-light dark:text-text-muted-dark text-3xl w-full">
          <a className="hover:text-primary" href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a className="hover:text-primary" href="#">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;