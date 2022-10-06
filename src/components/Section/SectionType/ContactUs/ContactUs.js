import React from "react";
import "../../../Section/Section.sass";
import "../ContactUs/ContactUs.sass";
import ContactForm from "../../../ContactForm/Form";

const ContactUs = ({ data }) => {
  const { text, socialNetwork } = data;
  return (
    <div className="cta">
      <p className="cta__text">{text}</p>
      <ContactForm />
      <div className="cta__social-media">
        {socialNetwork?.map((network, index) => (
          <a className="cta__link" key={index} href={network.link}>
            <img
              className="cta__img"
              key={index}
              src={`cta/${network.icon}`}
              alt="Social Media"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
