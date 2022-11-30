import React, { useState } from "react";
import Input from "../ContactForm/Input";
import TextArea from "../ContactForm/TextArea";
import { validationForm } from "../../utils/validationRules";
import { validation } from "../../utils/validation";
import "./Form.sass";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (fieldName, value) => {
    const getValues = (field, value) => {
      const updatedValues = { ...values, [field]: value };
      setValues(updatedValues);
    };
    getValues(fieldName, value);
  };

  return (
    <form
      className="form"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (validation(validationForm, null, values, errors, setErrors)) {
          console.log("send");
        }
      }}
    >
      <div className="form__personal-data">
        <div className="form__name-box">
          <label className="form__label" htmlFor="name">
            <span className="form__label--asterisk">*</span> Name
          </label>
          <Input
            id="name"
            placeholder="Eddie Murphy"
            name="name"
            type="text"
            spellCheck="false"
            value={values.name || ""}
            error={errors.name}
            handleChange={(event) => handleChange("name", event.target.value)}
            handleBlur={() =>
              validation(validationForm, "name", values, errors, setErrors)
            }
          />
        </div>

        <div className="form__email-box">
          <label className="form__label" htmlFor="email">
            <span className="form__label--asterisk">*</span> Enter your email
          </label>
          <Input
            id="email"
            placeholder="me@example.com"
            name="email"
            type="email"
            spellCheck="false"
            value={values.email || ""}
            error={errors.email}
            handleChange={(event) => handleChange("email", event.target.value)}
            handleBlur={() =>
              validation(validationForm, "email", values, errors, setErrors)
            }
          />
        </div>
      </div>
      <div className="form__message-box">
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <TextArea
          id="message"
          placeholder="Write your message"
          name="message"
          type="text"
          spellCheck="false"
          value={values.message || ""}
          handleChange={(event) => handleChange("message", event.target.value)}
        />
      </div>
      <button className="form__btn" type="submit">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
