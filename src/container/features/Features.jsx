import React from "react";
import "./features.css";

function Features({ title, text }) {
  return (
    <div className="gpt3__features">
      <div className="gpt3__features-title">
        <div className="gpt3__features-line"></div>
        {title}
      </div>
      <div className="gpt3__feature-text">{text}</div>
    </div>
  );
}

export default Features;
