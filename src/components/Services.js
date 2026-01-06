import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bx-window-alt',
      title: 'Web Development',
      description: 'Building fast, secure, and maintainable websites tailored to your unique business goals with clean code.'
    },
    {
      icon: 'bx-palette',
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing interfaces that delight users and solve complex problems elegantly.'
    },
    {
      icon: 'bx-devices',
      title: 'Responsive Design',
      description: 'Ensuring your site looks perfect and functions smoothly on desktops, tablets, and phones of all sizes.'
    },
    {
      icon: 'bx-network-chart',
      title: 'API Integration',
      description: 'Seamlessly connecting your website with third-party services, databases and complex data sources.'
    }
  ];

  return (
    <section className="py-32 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Offers</span>
          <h2 className="text-4xl md:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-4">My Services</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl shadow-sm hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                <i className={`bx ${service.icon} text-3xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4 relative z-10">
                {service.title}
              </h3>

              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed relative z-10 group-hover:text-text-main-light dark:group-hover:text-text-main-dark transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;