// Button.jsx
import React from "react";
import "./Button.css";

const Button = ({
  children,
  variant = "primary", // primary | secondary
  icon,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="" className="btn__icon" />}
      <span className="btn__text">{children}</span>
    </button>
  );
};

export default Button;
