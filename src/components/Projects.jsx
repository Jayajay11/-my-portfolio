// import React from 'react';

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A personal portfolio website built with React.js and Tailwind CSS.",
//     tech: ["React.js", "Tailwind CSS", "Vite"],
//     link: "#"
//   },
//   {
//     title: "Task Management App",
//     description: "A simple task management app with real-time updates.",
//     tech: ["React.js", "Firebase", "Redux"],
//     link: "#"
//   },
//   {
//     title: "E-commerce Store",
//     description: "An e-commerce website with a seamless UI and optimized performance.",
//     tech: ["Next.js", "MongoDB", "Stripe"],
//     link: "#"
//   }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-900 text-white text-center">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-4xl font-bold mb-6">My Projects</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//               <p className="text-gray-400 mb-4">{project.description}</p>
//               <div className="flex flex-wrap justify-center gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span key={i} className="bg-blue-500 px-3 py-1 rounded-lg text-sm">{tech}</span>
//                 ))}
//               </div>
//               <a href={project.link} className="text-blue-400 hover:underline">
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React.js, Tailwind CSS, and Three.js.",
    tech: ["React.js", "Tailwind", "Three.js"],
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "A fully responsive online store with payment integration.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Task Manager App",
    description: "A task management web app with real-time updates.",
    tech: ["React.js", "Firebase", "Redux"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white text-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glassmorphism p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-500 px-3 py-1 rounded-lg text-sm">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="text-blue-400 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
