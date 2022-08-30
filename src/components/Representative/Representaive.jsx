import React,{useState}from 'react'
import Form from "../Form/Form";
import "./representative.css";


const Representative = () => {
  const [representative, setRepresentative]= useState(false)
  return (
    <div className="representative">
      <h2>REPRESENTATIVE</h2>
      <h3 onClick={()=>setRepresentative(!representative)}>Click here to sign up as Representative</h3>
      {representative && (
       <div> <Form
       Name="Representative full name"
       Email="Representative email"
       Phone="Representative phone number"
     />
     <button>Save</button>
     </div>
      )}
    </div>
  );
};
export default Representative;
