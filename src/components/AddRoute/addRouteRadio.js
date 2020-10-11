import React from 'react';
import {Form} from 'react-bootstrap';

const AddRouteRadio = ({name, value, routeTypes, setValue, type}) => {
    const handleValue = (e) => {

    }
    return routeTypes.map((el,index)=>(
        <Form.Check
            label={el}
            key={index}
            type={type}
            value={el==="sportowa"?true: false}
            onChange={handleValue}
        />
        ))
}
 
export default AddRouteRadio;