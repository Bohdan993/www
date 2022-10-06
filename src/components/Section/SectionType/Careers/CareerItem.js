import React from "react";

const CareerItem = ({ career, activeIndex, onClickHandler, index }) => {
  const { position, subtitle, tags, description } = career;

  return (
    <div
      className={
        "careers__item" + (index === activeIndex ? " careers__item_show" : "")
      }
    >
      <div
        className="careers__header"
        onClick={() => onClickHandler(index)}
        aria-hidden="true"
      >
        <div className="careers__status">
          <span className="careers__position">{position}</span>
          <span className="careers__subtitle careers__subtitle--grey">
            {subtitle}
          </span>
        </div>
        <div className="careers__icon" />
      </div>
      <div className="careers__hidden-block">
        <div className="careers__tag-box">
          {tags?.map((tag, index) => (
            <span className="careers__tags" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <p className="careers__description">{description}</p>
      </div>
    </div>
  );
};

export default CareerItem;
