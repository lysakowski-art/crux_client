import React,{useState} from 'react';
import {Form, Col} from 'react-bootstrap';
import scales from '../_common/scales'


const AddRouteRange = ({name, value, setValue, type,max, min}) => {
    //states
    const [scaleName, setScaleName] = useState("french");
    // options
    const scalesOptions = Object.keys(scales.scale).map((el,index)=><option key={index} value={el}>{el.toUpperCase()}</option>)
    const rankOptions = scales.scale[scaleName].map((el,index)=>(el!== null ? <option key={index} value={index}>{el}</option>:null))


    //handle
    const handleNameSelect = (e) => {
      setScaleName(e.target.value)
    }
    const handleRange = (e) => {
        setValue(parseInt(e.target.value))
    }

    return ( 
      <Form.Row>
        <Col md={6}>
        <Form.Label>Rank's type</Form.Label>
        <Form.Control as="select" onChange={handleNameSelect}>
          {scalesOptions}
        </Form.Control>
        </Col>
        <Col md={6}>
        <Form.Label>Rank</Form.Label>
        <Form.Control as={type} onChange={handleRange}>
          {rankOptions}
        </Form.Control>
        </Col>
      </Form.Row>
     );
}
 
export default AddRouteRange;