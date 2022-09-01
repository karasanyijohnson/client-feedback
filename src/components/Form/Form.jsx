import React from "react";
import "./form.css";

const Form = ({
  Name,
  Email,
  Phone,
  onChangeFullName,
  valueFullName,
  onChangeEmail,
  valueEmail,
  onChangePhoneNumber,
  valuePhoneNumber
}) => {
  return (
    <div className="FormContainer">
      <div className="inputContainer">
        <label>{Name}</label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={onChangeFullName}
          value={valueFullName}
        />
      </div>
      <div className="inputContainer">
        <label>{Email}</label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={onChangeEmail}
          value={valueEmail}
        />
      </div>
      <div className="inputContainer">
        <label>{Phone}</label>
        <input 
        type="tel" 
        placeholder="Enter phone number"
        onChange={onChangePhoneNumber}
        value={valuePhoneNumber} 
        />
      </div>
    </div>
  );
};

export default Form;
