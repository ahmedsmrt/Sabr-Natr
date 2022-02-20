import React from "react";
// import { useState } from "react";

import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import PhotoContainer from "../components/PhotoContainer";

import "./Gallery.css";

const Gallery = (props) => {
  return (
    <React.Fragment>
      <section className="gallery_main">
        <MainNavigation />
        <PhotoContainer />
      </section>
    </React.Fragment>
  );
};

export default Gallery;
