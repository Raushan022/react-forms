import React from "react";

const Select = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}

        {options.map((singleOption, i) => (
          <option key={i} value={singleOption}>
            {singleOption}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;
