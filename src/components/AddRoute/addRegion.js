import React,{useEffect,useState} from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

const AddRegion = () => {
    const [allRegions, setAllRegions] = useState([]);
    const URI = `http://127.0.0.1:8000/regions`;
    useEffect(() => {
        axios
          .get(URI)
          .then((res) => {
            if (res.status === 200) {
              if (Object.entries(allRegions).length === 0) {

                setAllRegions(res.data);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, [allRegions]);
    const sortedRegions = allRegions.sort((a,b)=>(
        a.group_of_regions > b.group_of_regions ? 1 : -1
    ))
    return ( 
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Region</Form.Label>
          <Form.Control as="select">
           {sortedRegions.map(el=><option key={el._id}>{el.region_name} ({el.group_of_regions})</option>)}
          </Form.Control>
        </Form.Group>
     );
}
 
export default AddRegion;