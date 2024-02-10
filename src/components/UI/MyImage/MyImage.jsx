import React from "react";
import cl from "./MyImage.module.css";
import alexImage from '/src/assets/alex.jpg'

const MyImage = () => {
  return (
    <div className={cl.container}>
      <img src={alexImage} className={cl.myImage}/>
    </div>
  );
};

export default MyImage;
