import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="navbar">

      <div 
        className="nav-title"
        onClick={() => navigate("/")}
        style={{cursor:"pointer"}}
      >
       📰 Fake News Detector
      </div>

      <div className="nav-right">

        {!isLoggedIn ? (
          <>
            <button 
              className="nav-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button 
              className="nav-btn"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <span className="logged">Logged In</span>

            <button 
              className="nav-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default Navbar;

