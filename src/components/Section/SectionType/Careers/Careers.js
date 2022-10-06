import React, { useState } from "react";
import CareerItem from "./CareerItem";
import "../../../Section/Section.sass";
import "../Careers/Careers.sass";

const Careers = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onClickHandler = (id) => setActiveIndex(activeIndex === id ? null : id);

  return (
    <div className="careers">
      <div className="careers__info-box">
        <p className="careers__application">
          Please send your application with a cover letter, CV and portfolio to:
        </p>
        <a href="mailto:careers@svisteldev.com" className="careers__email">
          careers@svisteldev.com
        </a>
        <p className="careers__application careers__application--grey">
          In the email header, please state clearly the position you are
          applying for. <br />
          <br />
          We are looking forward to hearing from you!
        </p>
      </div>
      <div className="careers__hiring">
        <h3 className="careers__title">We are hiring:</h3>
        {data?.map((career, index) => (
          <CareerItem
            key={index}
            career={career}
            index={index}
            activeIndex={activeIndex}
            onClickHandler={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Careers;
