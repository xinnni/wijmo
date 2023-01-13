import React from "react";
import Button from "../Button/Button";
import "./Buy.scss";

const Buy = ({ image, title, subTitle, money, content }) => {
  return (
    <div className="buy-container">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>

        <div className="money">
          <p>{money}</p>
        </div>

        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        {/* <Button content={content} /> */}
        <button className="button-pricing">{content}</button>
      </div>
    </div>
  );
};

export default Buy;
