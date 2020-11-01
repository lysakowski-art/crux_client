import React from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";


const UserSubmit = ({loginData, content,endpoint,setLoggedIn,setUserName}) => {
    const URI = `http://127.0.0.1:8000/${endpoint}`
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios
          .post(URI,loginData)
          .then(res=>{
              if(res.status === 201){
                  setLoggedIn(true)
                  setUserName(res.data.user_name)
              }
          })
          .catch(error=>{
            console.log(error)
          })
      }
    return ( 
        <Button variant="dark" onClick={handleSubmit}>
            {content}
        </Button >
     );
}
 
export default UserSubmit;