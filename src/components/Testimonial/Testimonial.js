import React from "react";
import "./Testimonial.scss";

const Testimonial = ({ content, name, rank, icons }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-quote">
        <span>{}</span>
      </div>
      <div className="content">{content}</div>
      <div className="author">
        <div className="name">{name}</div>
        <div className="rank">{rank}</div>
      </div>
    </div>
  );
};

export default Testimonial;
