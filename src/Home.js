// src/components/Home.js
import React, { useState } from 'react';
import './Home.css';
import Login from './Login';
import { motion } from 'framer-motion';

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Here you would normally verify the email and password with your backend
    // For simplicity, we are just setting the user directly
    setUser({ email });
  };

  return (
    <div className="home">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
           <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 8, ease: 'easeOut' }}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is an animated introduction.</p>
    </motion.div>
        
          <h2>Welcome to Our Coffee Shop</h2>
          <p>Enjoy the best coffee in town, {user.email}!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
