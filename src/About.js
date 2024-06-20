// src/components/About.js
import React from 'react';
import './About.css';
import { easeInOut, motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about">
      <div>
      <motion.div
           initial={{ opacity: 0 , y:-100 , x:-100}}
           animate={{ opacity: 1 ,y:200 , x:100 }}
           transition={{ duration: 8, ease: 'easeInOut' }}
    >
      <h1>Welcome to the About  Page</h1>
      <p>This is an animated introduction.</p>
    </motion.div>
        <h2>About Us</h2>
        <p>Learn more about our story and our coffee.</p>
      </div>
    </div>
  );
};

export default About;
