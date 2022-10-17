import React, { useRef, useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SectionSlider.sass";

const useSlider = (
  min,
  max,
  step,
  defaultState,
  sliderRef,
  activeSlide,
  inputRangeRef
) => {
  const [state, setSlide] = useState(defaultState);

  const progressEffect = useCallback(
    (position) => {
      const active = "#FFF";
      const inactive = "#F5F5F53D";
      const countPosition = ((position - min) * 100) / (max - min);
      console.log(position)
      inputRangeRef.current.style.backgroundSize = countPosition + "% 100%";
      inputRangeRef.current.style.background = `linear-gradient(90deg, ${active} 0% ${countPosition}%, ${inactive} ${countPosition}% 100%)`;
    },
    [inputRangeRef, max, min]
  );

  useEffect(() => {
    progressEffect(activeSlide);
    setSlide(activeSlide);
  }, [activeSlide, state, progressEffect]);

  const handleChange = (e) => {
    progressEffect(state);
    sliderRef?.current?.slickGoTo(e.target.value);
    setSlide(e.target.value);
  };

  return {
    type: "range",
    min,
    max,
    step: step,
    value: state,
    onChange: handleChange,
  };
};

const SectionSlider = ({ data, slideType, anchor }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: undefined });
  const [maxSlides, setMaxSlides] = useState(2.5);
  const [step, setStep] = useState(0.5);
  const sliderRef = useRef(null);
  const inputRangeRef = useRef(null);



  const sliderProps = useSlider(
    0,
    maxSlides,
    step,
    0,
    sliderRef,
    activeSlide,
    inputRangeRef
  );


  useEffect(() => {
    if (slideType === anchor) {
      sliderRef.current.innerSlider.autoPlay("play")
      sliderRef.current.slickPlay()
    }
    }, [anchor, slideType])

  const handleResize = () => setWindowSize({ width: window.innerWidth });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    // if (0 < windowSize.width && windowSize.width < 992) {
    //   setMaxSlides(sliderRef?.current?.props?.children?.length - 1);
    //   setStep(1);
    // }

    if (0 < windowSize.width && windowSize.width <= 1200) {
      setStep(1)
      setMaxSlides(sliderRef?.current?.props?.children?.length - sliderRef?.current?.props?.responsive[1]?.settings?.slidesToShow);
    }

    if (0 < windowSize.width && windowSize.width <= 768) {
      setStep(1)
      setMaxSlides(sliderRef?.current?.props?.children?.length - sliderRef?.current?.props?.responsive[2]?.settings?.slidesToShow);
    }

    // if (0 < windowSize.width && windowSize.width <= 768) {
    //   // setStep(0.25)
    //   setMaxSlides(sliderRef?.current?.props?.children?.length - sliderRef?.current?.props?.responsive[2]?.settings?.slidesToShow);
    // }

    // if (0 < windowSize.width && windowSize.width <= 576) {
    //   // setStep(0.25)
    //   setMaxSlides(sliderRef?.current?.props?.children?.length - sliderRef?.current?.props?.responsive[3]?.settings?.slidesToShow);
    // }


    // if (0 < windowSize.width && windowSize.width <= 420) {
    //   // setStep(0.25)
    //   setMaxSlides(sliderRef?.current?.props?.children?.length - sliderRef?.current?.props?.responsive[4]?.settings?.slidesToShow);
    // }

    
    
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  const settingsSlider = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    beforeChange: (prev, next) => {
      setActiveSlide(next);
      next >= maxSlides && setTimeout(() => sliderRef?.current?.slickGoTo(0), 5000);
    },
    onReInit: () => {},
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToShow: 2.5,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2.25,
      //     slidesToScroll: 1
      //   },
      // },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1.75,
      //     slidesToScroll: 1
      //   },
      // },
      // {
      //   breakpoint: 420,
      //   settings: {
      //     slidesToShow: 1.25,
      //     slidesToScroll: 1
      //   },
      // },
    ],
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settingsSlider}>
        {data?.map((slide, index) => {
          const {
            title, img, description, tags, link, firstName, secondName,
            position, location, color, name, company
          } = slide;
          switch (slideType) {
            case "Products":
              return (
                <div className="products" key={index} style={{ width: 340 }}>
                  <div className="products__content">
                    <h3 className="products__title">{title}</h3>
                    <p className="products__description">{description}</p>
                  </div>
                  <img
                    className="products__img"
                    src={`products/${img}`}
                    alt="Products"
                  />
                </div>
              );
            case "Portfolio":
              return (
                <div className="portfolio" key={index} style={{ width: 340 }}>
                  <div className="portfolio__img-box">
                    <img
                      className="portfolio__img"
                      src={`portfolio/${img}`}
                      alt="Portfolio"
                    />
                  </div>
                  <div className="portfolio__content">
                    <h3 className="portfolio__title">{title}</h3>
                    <p className="portfolio__description">{description}</p>
                    <div className="portfolio__tag-box">
                      {tags?.map((tag, index) => (
                        <span className="portfolio__tags" key={index}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            case "Team":
              return (
                <div className="team" key={index} style={{ width: 340 }}>
                  <div className="team__content">
                    <div className="team__tag-box">
                      <span className="team__position" style={{ color: color }}>
                        {position}
                      </span>
                      <div className="team__flag-box">
                        {location?.map((flag, index) => (
                          <img
                            className="team__flag-icon"
                            key={index}
                            src={`flags/${flag}`}
                            alt="Country"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="team__name-box">
                      <h3 className="team__first-name">{firstName}</h3>
                      <h3 className="team__second-name">{secondName}</h3>
                    </div>
                  </div>
                  <div className="team__img-box">
                    <img className="team__img" src={`team/${img}`} alt="Team" />
                  </div>
                </div>
              );
            case "Blog":
              return (
                <div className="blog" key={index} style={{ width: 340 }}>
                  <img className="blog__img" src={`blog/${img}`} alt="Blog" />
                  <div className="blog__content">
                    <h3 className="blog__title">{title}</h3>
                    <p className="blog__description">{description}</p>
                    <a href="#Intro" className="blog__link">
                      {link}
                      <img
                        src="/blog/arrow.svg"
                        className="blog__icon"
                        alt="blog arrow"
                      />
                    </a>
                  </div>
                </div>
              );
              case "Feedback":
                return (
                  <div className="feedback__block" key={index} style={{ width: 340 }}>
                  <h3 className="feedback__name">{name}</h3>
                  <div className="feedback__role-box">
                    <span className="feedback__position">{position}</span>
                    {company && <span className="feedback__separation">|</span>}
                    <span className="feedback__company">{company}</span>
                  </div>
                  <p className="feedback__description">{description}</p>
                </div>
                );
            default:
              return (
                <div key={index} style={{ width: 340 }}>
                  <img src={img} alt="" width={"100%"} />
                </div>
              );
            }
        })}
      </Slider>
      <input ref={inputRangeRef} {...sliderProps}
             onMouseEnter={() => sliderRef.current.slickPause()}
             onMouseLeave={() => sliderRef.current.slickPlay()} />
    </div>
  );
};

export default SectionSlider;
