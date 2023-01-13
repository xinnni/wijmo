import React from "react";
import "./Logo.scss";
import logoing from "../../assets/로고.png";

const Logo = ({ isFooter = false }) => {
  return (
    <div className={`logo ${isFooter === true ? "footer" : ""}`}>
      {/* <span>WIJMO</span> */}
      <img src={logoing}></img>
    </div>
  );
};

export default Logo;
