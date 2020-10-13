import React,{useEffect,useState} from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {useTranslation} from 'react-i18next'



const AddRegion = ({as, value, setValue, name}) => {
    const [allRegions, setAllRegions] = useState([]);
    const {i18n, t}=useTranslation();
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

    // handle
    const handleSelect = (e) => {
      setValue(e.target.value)
    }

    return ( 
        <Form.Group>
          <Form.Label>{t(name)}</Form.Label>
          <Form.Control as={as} onChange={handleSelect}>
           {sortedRegions.map((el)=><option key={el._id} value={el._id}>{el.region_name} ({el.group_of_regions})</option>)}
          </Form.Control>
        </Form.Group>
     );
}
 
export default AddRegion;