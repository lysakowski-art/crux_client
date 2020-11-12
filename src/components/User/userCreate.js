import React,{useState} from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";
import * as EmailValidator from 'email-validator';

const UserCreate = ({registerData, handleClose, content, endpoint}) => {

  const url = `http://127.0.0.1:8000/${endpoint}`
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(EmailValidator.validate(registerData["email_adress"])){
      axios
        .post(url, registerData, { withCredentials: true })
        .then(res=>{
            if(res.status === 201){
              console.log(res.data.message);
              alert(res.data.message)
            } else if(res.status === 400){
              alert(res.data.message)
            } else if(res.status ===500){
              alert(res.data.message)
            }
        }).then(()=>{
          handleClose()
        })
        .catch(error=>{
          console.log(error)
        })
    } else {
      alert("Not correct email adress")
    }
      
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