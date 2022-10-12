import React from "react";
import "../../../Section/Section.sass";
import "../Statistic/Statistic.sass";

const Statistic = ({ data }) => {
  return (
    <div className="statistic">
      <div className="statistic__first-column">
        <figure className="statistic__world">
          <figcaption className="statistic__text-content">
            <span className="statistic__number">{data.countries}</span>
            <div className="statistic__description-box">
              <span className="statistic__description">Countries</span>
              <span className="statistic__description">of customers</span>
            </div>
          </figcaption>
          <img
            className="statistic__svg-world"
            src="/statistic/world-map.svg"
            alt="World"
          />
        </figure>

        <figure className="statistic__chart">
          <img
            className="statistic__svg-chart"
            src="/statistic/pie.svg"
            alt="Chart"
          />
          <figcaption className="statistic__text-content">
            <span className="statistic__number">{data.categories.count}</span>
            <span className="statistic__description">Working categories</span>
            <ul className="statistic__tag-list">
              {data?.categories?.tags?.map((tag, index) => {
                return (
                  <li
                    key={index}
                    className={`statistic__tag-item statistic__tag-item--${index}`}
                  >
                    <span>
                      {tag.name} {tag.score}
                    </span>
                  </li>
                );
              })}
            </ul>
          </figcaption>
        </figure>
      </div>

      <div className="statistic__second-column">
        <div className="statistic__common-figures">
          <div className="statistic__upwork">
            <div className="statistic__text-content">
              <div className="statistic__mixed-content">
                <span className="statistic__number">{data.rated}</span>
                <img
                  className="statistic__svg-upwork"
                  src="/statistic/upwork-bage.png"
                  alt="Upwork"
                />
              </div>
              <span className="statistic__description statistic__description-lighter">
                Top rated plus on{" "}
                <a href="#">
                  <span className="statistic__description-lighter--accent-green">
                    upwork
                  </span>
                </a>
              </span>
            </div>
          </div>

          <div className="statistic__own-projects">
            <div className="statistic__text-content">
              <span className="statistic__number">{data.ownProjects}</span>
              <span className="statistic__description statistic__description-lighter statistic__description-normal">
                Our own
                <span className="statistic__description-lighter--accent-white">
                  {" "}
                  projects
                </span>
              </span>
            </div>
          </div>
        </div>

        <figure className="statistic__diagram">
          <div className="statistic__text-content-box">
            <figcaption className="statistic__text-content">
              <span className="statistic__number">{data.projects}</span>
              <span className="statistic__description">Finished projects</span>
            </figcaption>
            <figcaption className="statistic__text-content">
              <span className="statistic__number">{data.experience}</span>
              <span className="statistic__description">
                Years of experience
              </span>
            </figcaption>
          </div>
          <img
            className="statistic__svg-diagram"
            src="/statistic/graph-line.svg"
            alt="Diagram"
          />
          <img
            className="statistic__svg-diagram-mobile"
            src="/statistic/graph-line-mobile.svg"
            alt="Diagram"
          />
        </figure>
      </div>
    </div>
  );
};

export default Statistic;
