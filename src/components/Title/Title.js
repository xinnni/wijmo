import React from "react";
import "./Title.scss";

const Title = ({ title, color, lineCenter = false }) => {
  return (
    <div className={`title color ${lineCenter === true ? "center" : ""}`}>
      <h2 className={`${color}`} data-shadow={title}>
        {title}
      </h2>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Title;
