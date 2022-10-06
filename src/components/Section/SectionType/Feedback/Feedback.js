import React from "react";
import "../../../Section/Section.sass";
import "../Feedback/Feedback.sass";

const Feedback = ({ data }) => {
  return (
    <div className="feedback">
      {data?.map((feedback, index) => {
        const {
          name,
          description,
          position,
          company
        } = feedback;
        return (
          <div className="feedback__block" key={index}>
            <h3 className="feedback__name">{name}</h3>
            <div className="feedback__role-box">
              <span className="feedback__position">{position}</span>
              {company && <span className="feedback__separation">|</span>}
              <span className="feedback__company">{company}</span>
            </div>
            <p className="feedback__description">{description}</p>
          </div>
        );
      })}
    </div>
  )
};

export default Feedback;
