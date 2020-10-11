import React from 'react';
import {Form} from 'react-bootstrap'

const AddRouteInput = ({name, value, setValue, type, rows }) => {
    const handleValue = (e) =>{
        setValue(e.target.value)
    }
    return ( 
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>{name}</Form.Label>
          <Form.Control type={type} placeholder={name} onChange={handleValue} rows={rows}/>
        </Form.Group>
     );
}
 
export default AddRouteInput;