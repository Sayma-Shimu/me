import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'bx-code-alt',
      skills: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 75 },
        { name: 'React', percentage: 70 }
      ]
    },
    {
      title: 'Backend',
      icon: 'bx-server',
      skills: [
        { name: 'Node Js', percentage: 55 },
        { name: 'MongoDB', percentage: 70 },
        { name: 'Express.js', percentage: 65 },
        { name: 'CRUD', percentage: 90 }
      ]
    },
    {
      title: 'Tools',
      icon: 'bx-wrench',
      skills: [
        { name: 'Git', percentage: 80 },
        { name: 'Figma', percentage: 85 },
        { name: 'VS Code', percentage: 90 },
        { name: 'Photoshop', percentage: 60 }
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <div className="group/bar">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-text-main-light dark:text-text-main-dark">{skill.name}</span>
        <span className="text-primary font-bold text-sm">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transform origin-left scale-x-0 group-hover/bar:scale-x-100 transition-transform duration-1000 ease-out"
          style={{ 
            width: `${skill.percentage}%`,
            transitionDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-32 bg-transparent" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Abilities</span>
          <h2 className="text-4xl md:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-4">My Skills</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-gradient-border rounded-3xl p-[1px] shadow-sm hover:shadow-card-hover transition-all duration-300 group glass-card">
              <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl p-8 rounded-3xl h-full">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <i className={`bx ${category.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">{category.title}</h3>
                </div>

                <div className="space-y-7">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;