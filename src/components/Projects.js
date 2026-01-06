import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Study Mate',
      description: 'A full-stack group study management platform where users can create study groups, assign tasks, track progress, and collaborate efficiently. Features user authentication, dashboard, task management, and responsive design for seamless learning experience.',
      image: 'https://i.ibb.co.com/6JBCvtvR/mate.png',
      liveLink: 'https://study-mates-project.netlify.app/',
      githubLink: 'https://github.com/Sayma-Shimu/StudyMate-Client-Assignment-10'
    },
    {
      title: 'Pet Care',
      description: 'A responsive pet adoption and care service website featuring pet listings, adoption process, donation options, and veterinary services. Built with modern UI, smooth navigation, and interactive elements to connect pets with loving homes.',
      image: 'https://i.ibb.co.com/Zzr7w8nP/pet.png',
      liveLink: 'https://frabjous-seahorse-494bd3.netlify.app/',
      githubLink: 'https://github.com/Sayma-Shimu/Pet-Care-Assignment-9'
    },
    {
      title: 'Hero.Io',
      description: 'A sleek gadget and tech review landing page with hero sections, product showcases, newsletter subscription, and detailed feature highlights. Designed with modern animations and fully responsive layout for tech enthusiasts.',
      image: 'https://i.ibb.co.com/WWPKvR7L/hero.png',
      liveLink: 'https://meek-donut-1e3a2c.netlify.app/',
      githubLink: 'https://github.com/Sayma-Shimu/Hero-io-Assignment-Milestone-8'
    }
  ];

  return (
    <section className="py-32 bg-transparent" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-4">My Projects</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a 
                    className="p-3 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg" 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link-external text-2xl"></i>
                  </a>
                  <a 
                    className="p-3 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg" 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-github text-2xl"></i>
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a 
                    className="inline-flex items-center text-primary font-bold hover:underline text-sm uppercase tracking-wide group/link" 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <i className="bx bx-right-arrow-alt text-xl ml-1 group-hover/link:translate-x-1 transition-transform"></i>
                  </a>
                  <a 
                    className="inline-flex items-center text-primary font-bold hover:underline text-sm uppercase tracking-wide group/link" 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                    <i className="bx bxl-github text-xl ml-1 group-hover/link:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;