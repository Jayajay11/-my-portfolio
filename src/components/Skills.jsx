import React from 'react';

const skills = [
  "React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", 
  "Git & GitHub", "Redux", "Firebase", "API Integration"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-700 px-4 py-2 rounded-lg text-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
