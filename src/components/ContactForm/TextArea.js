import React from "react"

const TextArea = ({handleChange, handleBlur, labelClassName, label, error, ...otherProps}) => {

  return (
    <div>
      {label && (
        <label htmlFor={label}>
          {label}
        </label>
      )}
      <textarea
        id={label}
        className="form-textarea"
        onChange={(e) => {
          handleChange(e)
        }}
        onBlur={handleBlur}
        {...otherProps}
      />
    </div>
  );
}

export default TextArea