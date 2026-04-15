import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

function Prediction() {

  const [news, setNews] = useState("");
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Check session
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  const handlePredict = async () => {

    setLoading(true);

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: news
      })
    });

    const data = await response.json();

    setResult(data.prediction);
    setConfidence(data.confidence);
    setLoading(false);
  };

  return (
    
    <div>

      {/* Navbar */}
      <Navbar />

      <div className="app-container">

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h2>Fake News Prediction</h2>

          <textarea
            placeholder="Enter News"
            onChange={(e) => setNews(e.target.value)}
          />

          <motion.button
            onClick={handlePredict}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Predict
          </motion.button>

          {loading && (
            <p>Analyzing news...</p>
          )}

          {result && (
            <motion.div
              className={`result ${result === "REAL" ? "real" : "fake"}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {result} (Confidence: {confidence}%)
            </motion.div>
          )}

        </motion.div>

      </div>

    </div>
    
  );
}

export default Prediction;