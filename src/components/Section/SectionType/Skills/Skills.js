import React from "react";
import "../../../Section/Section.sass";
import "./Skills.sass";



const Skills = ({ data, dataMobile, isMobile }) => {
  return (
    <>
      {!isMobile ? (
        <div className="skills">
          {data.map((el, index) => (
            <ul className={`skills__set skills__set--${index}`} key={index + 'list-desktop'}>
              {el.map((item) => (
                <Element item={item} key={item.id + 'desktop'}/>
              ))}
            </ul>
          ))}
        </div>
      ) : (
        <div className="skills">
          {dataMobile.map((el, index) => (
            <ul className={`skills__set skills__set--${index}`} key={index + 'list-mobile'}>
              {el.map((item) => (
                <Element item={item} key={item.id + 'mobile'}/>
              ))}
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

const Element = ({ item }) => {
  return (
    <li className="skills__item">
      <div className={`skills__box skills__box--${item?.id}`}>
        {item?.img ? (<img
          className="skills__img"
          src={`skills/${item.img}`}
          alt={item.title}
        />) : null}
      </div>
      <div className={`skills__text skills__text--${item?.direction}`}>
        <h3 className="skills__title">{item?.title}</h3>
        <p className="skills__description">{item?.description}</p>
      </div>
    </li>
  );
};

export default Skills;
