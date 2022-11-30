import React from "react";
import "./Section.sass";

const Section = ({ title, customClass, children, isMobile, setShow }) => {
  const clickHandlerShow = () => {
    setShow(true);
  };

  return (
    <div className={`section ${customClass ? customClass : ""}`}>
      {isMobile ? (
        <div className="mobile-menu__header">
          <a href="#Intro" crossOrigin="true" className="mobile-menu__logo">
            <img
              src="/logo/logo.svg"
              alt="Svistel"
              className="mobile-menu__logo-img"
            />
          </a>
          {title && <h2 className="title">{title}</h2>}
          {/* eslint-disable-next-line */}
          <div className="menu-icon" onClick={clickHandlerShow}>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        title && <h2 className="title">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Section;
