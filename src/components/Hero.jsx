// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
//       <motion.h1
//         className="text-5xl font-bold mb-4"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hi, I'm Ajay J
//       </motion.h1>
//       <motion.p
//         className="text-lg mb-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         Frontend Developer | React.js Enthusiast
//       </motion.p>
//       <motion.a
//         href="#projects"
//         className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         View My Work
//       </motion.a>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere } from '@react-three/drei';

// const Hero = () => {
//   return (
//     <section className="h-screen flex justify-center items-center bg-black text-white">
//       <Canvas className="w-full h-full">
//         <OrbitControls enableZoom={false} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[3, 2, 1]} />
//         <Sphere args={[1.5, 32, 32]}>
//           <meshStandardMaterial color="cyan" wireframe />
//         </Sphere>
//       </Canvas>
//       <div className="absolute text-center">
//         <h1 className="text-5xl font-bold">Hi, I'm Ajay J</h1>
//         <p className="text-lg mt-2">Frontend Developer | React.js Enthusiast</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import ParallaxBackground from "./ParallaxBackground"; // Import

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-black text-white relative">
      <ParallaxBackground /> {/* Parallax Background Added */}

      <Canvas camera={{ position: [0, 0, 5] }} className="absolute top-0 left-0 w-full h-full">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Text fontSize={1} color="cyan" position={[0, 0, 0]} outlineWidth={0.05} outlineColor="white">
          Ajay J
        </Text>
      </Canvas>

      <div className="absolute text-center">
        <h1 className="text-4xl font-bold neon-text">Frontend Developer</h1>
        <p className="text-lg mt-4">Creating futuristic web experiences</p>
      </div>
    </section>
  );
};

export default Hero;

