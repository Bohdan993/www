import React from "react";
import "./Section.sass";

const Section = ({ title, customClass, children }) => {
  return (
    <div className={`section ${customClass ? customClass : ''}`}>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
