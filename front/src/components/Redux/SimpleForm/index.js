import React from 'react';

const renderField = (
  {
    placeholder, value, min, max, id, type, label, input, meta: { touched, error },
  },
) => (
// eslint-disable-next-line react/jsx-filename-extension
  <div className="input-row">
    <input
      {...input}
      type={type}
      min={min}
      max={max}
      id={id}
      value={value}
      label={label}
      placeholder={placeholder}
    />
    {touched && error
        && <span className="error">{error}</span>}
  </div>
);

export default renderField;
