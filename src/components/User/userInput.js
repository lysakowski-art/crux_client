import React from 'react';
import {  Form } from "react-bootstrap";


const UserInput = ({placeholder,label, setValue}) => {
    const handleValue = (e) => {
        setValue(e.target.value);
      };
    return ( 
        <>
            <Form.Group>
                {label ? <Form.Label>{label}</Form.Label> : null}
                <Form.Control placeholder={placeholder} onChange={handleValue}/>
            </Form.Group>
        </>
     );
}
 
export default UserInput;