import React, { useState} from "react";
import { CreatePerson } from "../Api/Api";
import Form from "../Form/Form";
import "./human.css";

const Human = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const SubmitInputs = (e) => {
    e.preventDefault();
    CreatePerson(phoneNumber,email,fullName);
    // console.log(phoneNumber,email,fullName)
  };

  return (
   <form action=""  onSubmit={SubmitInputs}>
     <div className="humanContainer">
      <h2>HUMAN</h2>
      <Form
        Name="Full name"
        Email="Email"
        Phone="Phone number"
        onChangeFullName={(event) => setFullName(event.target.value)}
        valueFullName={fullName}
        onChangeEmail={(event) => setEmail(event.target.value)}
        valueEmail={email}
        onChangePhoneNumber={(event) => setPhoneNumber(event.target.value)}
        valuePhoneNumber={phoneNumber}
      />
      <button type="submit">Save</button>
    </div>
   </form>
  );
};
export default Human;
