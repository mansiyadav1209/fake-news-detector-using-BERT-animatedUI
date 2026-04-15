import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

function Home() {
  return (

    <div className="home-bg">

      {/* Navbar */}
      <Navbar />

      <div className="app-container">

        <motion.div
          className="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            📰 Detect Fake News Using AI
          </motion.h1>

          <p>
            This project uses BERT model to detect fake news.
          </p>

          <Link to="/login">
            <motion.button
              className="start-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>

        </motion.div>

      </div>

    </div>

  );
}

export default Home;