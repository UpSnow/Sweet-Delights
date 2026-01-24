// Input.jsx
import React from "react";
import './Input.css';

const Input = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
