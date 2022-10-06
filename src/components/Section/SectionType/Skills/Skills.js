import React from "react";
import "../../../Section/Section.sass";
import "../Skills/Skills.sass";

const Skills = ({ data }) => {
  const Element = ({ item }) => {
    return (
      <li className="skills__item">
        <div className={`skills__box skills__box--${item.id}`}>
          <img
            className="skills__img"
            src={`skills/${item.img}`}
            alt={item.title}
          />
        </div>
        <div className={`skills__text skills__text--${item.direction}`}>
          <h3 className="skills__title">{item.title}</h3>
          <p className="skills__description">{item.description}</p>
        </div>
      </li>
    );
  };
  return (
    <div className="skills">
      {data.map((el, index) => (
        <ul className={`skills__set skills__set--${index}`}>
          {el.map((item, index) => (
            <Element key={index} item={item} />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Skills;
