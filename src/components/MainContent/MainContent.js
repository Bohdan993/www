import React, {useState} from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "../Section/Section";
import Intro from "../Section/SectionType/Intro/Intro";
import Statistic from "../Section/SectionType/Statistic/Statistic";
import Skills from "../Section/SectionType/Skills/Skills";
import Feedback from "../Section/SectionType/Feedback/Feedback";
import Careers from "../Section/SectionType/Careers/Careers";
import ContactUs from "../Section/SectionType/ContactUs/ContactUs";
import { content } from "../../utils/utils";
import SectionSlider from "../Section/SectionType/SectionSlider/SectionSlider";
import { useWindowDimensions } from "../../utils/customHooks";



const MainContent = ({setVisible, setIsMobile, isMobile, setShow}) => {
  const [anchor, setAnchor] = useState()
  const { height, width } = useWindowDimensions();

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      anchors={[
        "Intro",
        "Products",
        "Statistic",
        "Portfolio",
        "Skills",
        "Feedback",
        "Team",
        "Blog",
        "Careers",
        "ContactUs",
      ]}
      normalScrollElements={'.careers__hiring'}
      menu={"#menu, #mobile-menu__list"}
      afterLoad={(origin, destination) => { destination?.index === 0 ? setVisible(false) : setVisible(true); setAnchor(destination?.anchor); }}
      beforeLeave={(origin, destination) => {destination?.index === 0 ? setVisible(false) : setVisible(true);}}
      render={({ state, fullpageApi }) => {

        if(width <= 992) {
        //   fullpageApi?.setResponsive(true)
          setIsMobile(true)
        } else {
        //   fullpageApi?.setResponsive(false)
          setIsMobile(false)
        }
    
        return (
          <ReactFullpage.Wrapper>
            <Section customClass="intro" isMobile={isMobile} setShow={setShow}>
              <Intro />
            </Section>
            <Section title={content?.products.title} isMobile={isMobile} setShow={setShow}>
              <SectionSlider
                anchor={anchor}
                data={content?.products.data}
                slideType={"Products"}
              />
            </Section>
            <Section title={content?.statistic.title} isMobile={isMobile} setShow={setShow}>
              <Statistic data={content?.statistic}/>
            </Section>
            <Section title={content?.portfolio.title} isMobile={isMobile} setShow={setShow}>
              <SectionSlider
                anchor={anchor}
                data={content?.portfolio.data}
                slideType={"Portfolio"}
              />
            </Section>
            <Section title={content?.skills.title} isMobile={isMobile} setShow={setShow}>
              <Skills data={content?.skills.data} dataMobile={content?.skillsMobile.data} isMobile={isMobile}/>
            </Section>
            <Section title={content?.feedback.title} isMobile={isMobile} setShow={setShow}>
              {!isMobile ? (<Feedback data={content?.feedback.data}/>) : <SectionSlider
                data={content?.feedback.data}
                slideType={"Feedback"}
                anchor={anchor}/>}
            </Section>
            <Section title={content?.team.title} isMobile={isMobile} setShow={setShow}>
              <SectionSlider
                data={content?.team.data}
                slideType={"Team"}
                anchor={anchor}/>
            </Section>
            <Section title={content?.blog.title} isMobile={isMobile} setShow={setShow}>
              <SectionSlider
                data={content?.blog.data}
                slideType={"Blog"}
                anchor={anchor}/>
            </Section>
            <Section title={content?.careers.title} isMobile={isMobile} setShow={setShow}>
              <Careers data={content?.careers.data}/>
            </Section>
            <Section title={content?.contactUs.title} isMobile={isMobile} setShow={setShow}>
              <ContactUs data={content?.contactUs}/>
            </Section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}


export default MainContent;
