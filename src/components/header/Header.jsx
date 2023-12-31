import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/avinash2.jpeg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Avinash Kondaveti</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="Avinash Kondaveti" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;