import React,{useState} from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";
import * as EmailValidator from 'email-validator';

const UserCreate = ({registerData, content, endpoint}) => {
  const [loading,setLoading] = useState(true)
  const url = `http://127.0.0.1:8000/${endpoint}`
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(EmailValidator.validate(registerData["email_adress"])){
      if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(registerData["password"])){
      axios
        .post(url, registerData, { withCredentials: true })
        .then(res=>{
            if(res.status === 201){
              alert(res.data.message)
              setLoading(false)
            } else if(res.status === 400){
              alert(res.data.message)
              setLoading(false)
            } else if(res.status ===500){
              alert(res.data.message)
              setLoading(false)
            }
        })
        .catch(error=>{
          console.log(error)
        })
      } else{
        alert("Password must contain minimum eight characters, at least one letter, one number and one special character.")
      }
    } else {
      alert("Not correct email adress")
    }
      
      }
    return (
        <>
        <Button variant="light" onClick={handleSubmit}>
            {content}
        </Button >
        </>
        
     );
}
 
export default UserCreate;