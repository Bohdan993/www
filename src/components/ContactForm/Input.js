import React from "react";

const Input = ({
  handleChange,
  handleBlur,
  label,
  labelClassName,
  error,
  ...otherProps
}) => {
  return (
    <div>
      {label && (
        <label className={labelClassName} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        id={label}
        onChange={handleChange}
        onBlur={handleBlur}
        {...otherProps}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
