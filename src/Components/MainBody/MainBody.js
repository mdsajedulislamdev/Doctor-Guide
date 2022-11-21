import React from "react";
import Home from "../Home/Home";
import SickKids from "../SickKids/SickKids";
import bodyCss from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div className={bodyCss.main}>
      <Home></Home>
      <SickKids></SickKids>
    </div>
  );
};

export default MainBody;
