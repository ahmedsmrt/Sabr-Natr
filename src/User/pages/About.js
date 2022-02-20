import React from "react";

import MainNavigation from "../../shared/components/Navigation/MainNavigation";

import compass from "../../images/Compass.svg";

import "./About.css";

const About = () => {
  return (
    <React.Fragment>
      <section className="about_main">
        <MainNavigation />
        <section className="split_one fade-in-left"></section>
        <section className="split_two">
          <aside className="slide-in-bottom">
            <h1>
              When Sabr (<span>صبر</span>) Meets Nature
            </h1>
            <p>
              Hey there, my name is Ahmed Gasim and here is to an attempt at
              recording the trials and tribulations that come with trying to
              gain Sabr while traveling throughout the World. For most, the term
              Sabr is foreign to them both in language and substance, but we all
              at one point or another have needed it. What exactly would we do
              without patience right? For me I have been practicing patience for
              most of my adult life, trying increase my bandwidth day by day.
              The sort of patience that makes you appreciate the fact that
              you're alive. The type that Thich Nhat Hanh speaks of when he taps
              into his inner world to share whatever wisdom he is willing to
              share. And hopefully I can share my own experiences through poems,
              articles, and photography as I travel more and more.
            </p>
          </aside>
          <img className="slide-in-bottom" src={compass} alt="Compass" />
        </section>
      </section>
    </React.Fragment>
  );
};

export default About;
