import React from "react";
import homeCss from "./Home.module.css";
import RecTopOne from "../../../src/images/HeaderImage/RecTopOne.png";
import RecBottomOne from "../../../src/images/HeaderImage/RecBottomOne.png";
import DoctorOne from "../../../src/images/HeaderImage/doctorOne.png";
import GridOne from "../../../src/images/HeaderImage/DotGrid.png";
import GridTwo from "../../../src/images/HeaderImage/DotGrid.png";
import sideDesign from "../../../src/images/HeaderImage/sideDesign.svg";
import RecTopTwo from "../../../src/images/HeaderImage/RecTopTwo.png";
import RecBottomTwo from "../../../src/images/HeaderImage/RecBottomTwo.png";
import DoctorTwo from "../../../src/images/HeaderImage/doctorTwo.png";

const Home = () => {
  return (
    <div className={homeCss.row}>
      <div className={homeCss.leftContent}>
        <h1>Find The Care</h1>
        <h1>You Need</h1>
        <p className={homeCss.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis enim illum ea ipsa officia, quo ipsum odit voluptatibus aspernatur.</p>
        <button className={homeCss.button}>Make Appointment</button>
        <img className={homeCss.gridOne} src={GridOne} alt="logo" />
        <img className={homeCss.gridTwo} src={GridTwo} alt="logo" />
      </div>
      <img className={homeCss.sideDesign} src={sideDesign} alt="logo" />
      <div className={homeCss.leftSection}>
        <img src={RecBottomOne} alt="logo" />
        <img src={RecTopOne} alt="logo" />
        <img className={homeCss.DoctorOne} src={DoctorOne} alt="doctor" />
      </div>
      <div className={homeCss.rightSection}>
        <img src={RecTopTwo} alt="logo" />
        <img src={RecBottomTwo} alt="logo" />
        <img className={homeCss.DoctorTwo} src={DoctorTwo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
