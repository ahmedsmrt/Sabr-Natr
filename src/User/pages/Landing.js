import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <div id="hero-wrap">
        <h1 className="text-focus-in">A Search for Sabr in Nature</h1>
        <Link to="/about" className="btn-med fade-in-bottom">
          Find out More
        </Link>
      </div>
    </section>
  );
};

export default Landing;
