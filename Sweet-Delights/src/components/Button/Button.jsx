// Button.jsx
import React from "react";
import "./Button.css";

const Button = ({
  children,
<<<<<<< HEAD
  variant = "primary",
=======
  variant = "primary", // primary | secondary
>>>>>>> feat/product-details-page
  icon,
  type = "button",
  onClick,
  disabled = false,
<<<<<<< HEAD
  className = "",
}) => {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
=======
}) => {
  return (
    <button
      className={`btn btn--${variant}`}
>>>>>>> feat/product-details-page
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
<<<<<<< HEAD
      {icon && <span className="btn__icon">{icon}</span>}
=======
      {icon && <img src={icon} alt="" className="btn__icon" />}
>>>>>>> feat/product-details-page
      <span className="btn__text">{children}</span>
    </button>
  );
};

export default Button;
