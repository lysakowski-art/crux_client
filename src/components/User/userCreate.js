import React,{useState} from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";

const UserCreate = ({registerData, handleClose, content, endpoint}) => {

  const URI = `http://127.0.0.1:8000/${endpoint}`
  const handleSubmit=(e)=>{
    e.preventDefault();
      axios
        .post(URI, registerData, { withCredentials: true })
        .then(res=>{
            if(res.status === 201){
              console.log(res.data.message);
              alert(res.data.message)
            }
        }).then(()=>{
          handleClose()
        })
        .catch(error=>{
          console.log(error)
        })
      }
    return (
        <>
        <Button variant="dark" onClick={handleSubmit}>
            {content}
        </Button >
        </>
        
     );
}
 
export default UserCreate;