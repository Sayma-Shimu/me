import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: 'bx-mail-send',
      title: 'Email',
      info: 'ahmedsayma399@gmail.com',
      link: 'mailto:ahmedsayma399@gmail.com',
      linkText: 'Write me'
    },
    {
      icon: 'bxl-whatsapp',
      title: 'Whatsapp',
      info: '+880 1726858915',
      link: 'https://wa.me/+8801726858915',
      linkText: 'Write me'
    },
    {
      icon: 'bxl-messenger',
      title: 'Messenger',
      info: 'binte.ahmed.129142',
      link: 'https://m.me/binte.ahmed.129142',
      linkText: 'Write me'
    }
  ];

  return (
    <section className="py-32 bg-transparent relative" id="contact">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Get Connected</span>
          <h2 className="text-4xl md:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Contact Me</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Talk to me</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                I'm always open to discussing product design work or partnership opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl shadow-sm flex items-center gap-6 hover:shadow-card-hover hover:-translate-y-1 transition-all group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <i className={`bx ${method.icon} text-3xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">{method.title}</h3>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark block mb-1">{method.info}</span>
                    <a className="text-secondary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all uppercase" href={method.link}>
                      {method.linkText}
                      <i className="bx bx-right-arrow-alt text-lg"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-3xl shadow-card">
            <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-8">Write me your project</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative group">
                <label 
                  className="absolute -top-3 left-4 bg-white/80 dark:bg-surface-dark px-2 text-xs font-bold text-primary uppercase tracking-wide z-10 transition-colors rounded backdrop-blur-sm" 
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full h-14 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 p-4 outline-none focus:border-primary dark:focus:border-primary text-text-main-light dark:text-text-main-dark transition-all focus:shadow-sm placeholder-transparent peer"
                  id="name"
                  placeholder="Insert your name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="relative group">
                <label 
                  className="absolute -top-3 left-4 bg-white/80 dark:bg-surface-dark px-2 text-xs font-bold text-primary uppercase tracking-wide z-10 transition-colors rounded backdrop-blur-sm" 
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full h-14 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 p-4 outline-none focus:border-primary dark:focus:border-primary text-text-main-light dark:text-text-main-dark transition-all focus:shadow-sm placeholder-transparent peer"
                  id="email"
                  placeholder="Insert your email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative group">
                <label 
                  className="absolute -top-3 left-4 bg-white/80 dark:bg-surface-dark px-2 text-xs font-bold text-primary uppercase tracking-wide z-10 transition-colors rounded backdrop-blur-sm" 
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full h-14 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 p-4 outline-none focus:border-primary dark:focus:border-primary text-text-main-light dark:text-text-main-dark transition-all focus:shadow-sm placeholder-transparent peer"
                  id="subject"
                  placeholder="Insert your subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="relative group">
                <label 
                  className="absolute -top-3 left-4 bg-white/80 dark:bg-surface-dark px-2 text-xs font-bold text-primary uppercase tracking-wide z-10 transition-colors rounded backdrop-blur-sm" 
                  htmlFor="message"
                >
                  Project
                </label>
                <textarea
                  className="w-full h-40 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 p-4 outline-none focus:border-primary dark:focus:border-primary text-text-main-light dark:text-text-main-dark resize-none transition-all focus:shadow-sm placeholder-transparent peer"
                  id="message"
                  placeholder="Write your project details..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-xl font-bold hover:shadow-glow transition-all group w-full cursor-pointer border-none hover:-translate-y-1"
                type="submit"
              >
                Send Message
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;