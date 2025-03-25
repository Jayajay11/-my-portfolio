import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaboration or just a friendly hello! 😊</p>
        <div className="space-y-4">
          <p>Email: <a href="mailto:jayajaythippai2002@gmail.com" className="text-blue-400 hover:underline">jayajaythippai2002@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/yourgithub" className="text-blue-400 hover:underline">github.com/yourgithub</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-400 hover:underline">linkedin.com/in/yourlinkedin</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
