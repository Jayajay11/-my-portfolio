import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

const ParallaxBackground = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      clipRelativeInput: true,
    });
    return () => parallaxInstance.destroy();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <ul ref={sceneRef} className="w-full h-full">
        <li data-depth="0.2" className="absolute top-10 left-20">
          <div className="w-16 h-16 bg-blue-500 rounded-full opacity-50"></div>
        </li>
        <li data-depth="0.4" className="absolute top-40 right-20">
          <div className="w-24 h-24 bg-pink-500 rounded-full opacity-50"></div>
        </li>
        <li data-depth="0.6" className="absolute bottom-20 left-40">
          <div className="w-20 h-20 bg-green-500 rounded-full opacity-50"></div>
        </li>
      </ul>
    </div>
  );
};

export default ParallaxBackground;
