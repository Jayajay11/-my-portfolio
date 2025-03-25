import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am a passionate <span className="text-blue-400 font-semibold">Frontend Developer</span> with expertise in 
          React.js and JavaScript. I specialize in building high-performance, 
          responsive web applications that enhance user experience.
        </p>
        <p className="text-lg mt-4">
          I love solving complex problems, optimizing web performance, and 
          creating stunning UI/UX designs.
        </p>
      </div>
    </section>
  );
};

export default About;
