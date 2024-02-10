import React from "react";
import cl from "./MyImage.module.css";
const MyImage = () => {
  return (
    <div className={cl.container}>
      <img src="src/assets/alex.jpg" className={cl.myImage}/>
    </div>
  );
};

export default MyImage;
