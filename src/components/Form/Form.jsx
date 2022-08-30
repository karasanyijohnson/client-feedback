import React from 'react';
import './form.css'

const Form = ({Name,Email,Phone}) => {
    return (
        <div className='FormContainer'>
            <div className='inputContainer'>
                <label>{Name}</label>
               <input type="text" placeholder='Enter name'/>
            </div>
            <div className='inputContainer'>
                <label>{Email}</label>
               <input type="email" placeholder='Enter email' />
            </div>
            <div className='inputContainer'>
                <label>{Phone}</label>
               <input type="tel" placeholder='Enter phone number'/>
            </div>

        </div>
    )
}

export default Form;