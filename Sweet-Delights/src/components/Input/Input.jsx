import React from "react";
import "./Input.css";

const Input = ({ label, erro, ...props }) => {
  return (
    <div className="input-wrapper">

      {label && ( 
        <label className="input-label" htmlFor={props.id}> 
          {label}
        </label>
      )}

      <input
        {...props} // me explique melhor essa parte 
        className={erro ? "input-field input-error" : "input-field"}
      />

      {erro && ( 
        <p className="error-message">
          {erro}
        </p>
      )}

    </div>
  );
};

export default Input;