import React from "react";
import "../../../Section/Section.sass";
import "../Intro/Intro.sass";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__header">
        <div className="intro__logo-box">
          <img className="intro__logo" src="/logo/logo.svg" alt="Svistel" />
        </div>
        <div className="intro__text">
          <h4 className="intro__service">Product development studio</h4>
          <h3 className="intro__description">
            We develop human centric apps for your{" "}
            <span className="intro__description intro__description--gold">
              business.
            </span>
          </h3>
        </div>
      </div>
      <div className="intro__content">
        <img className="intro__banner" src="/intro/banner.png" alt="Banner" />
        <div className="intro__nav">
          <span className="intro__nav-text">go to our projects</span>
          <img
            className="intro__nav-icon intro__nav-icon--animation"
            src="/intro/mouse.svg"
            alt="Mouse"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
