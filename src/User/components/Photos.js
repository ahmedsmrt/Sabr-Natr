import React from "react";
import "../pages/Gallery.css";

const Photos = (props) => {
  return (
    <div className={`gallery-img-container`}>
      <img className="image" src={props.imgSrc} alt="Japan" />
    </div>
  );
};

export default Photos;
