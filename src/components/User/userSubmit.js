import React,{useContext, useState} from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";
import {GlobalContext} from "../Context/globalProvider"


const UserSubmit = ({variant,loginData, content,endpoint}) => {
    const {setLoggedIn,setUserName, setUserType} = useContext(GlobalContext)
    const [loading, setLoading] = useState(true)
    const url = `http://127.0.0.1:8000/${endpoint}`
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios
          .post(url,loginData, { withCredentials: true })
          .then(res=>{
              if(res.status === 201){
                  setLoggedIn(true)
                  setUserName(res.data.user_name)
                  console.log(res.data.user_type)
                  setUserType(res.data.user_type)
                  setLoading(false)
              } else if (res.status === 404){
                  alert(res.data.message)
              } else if (res.status === 409){
                  alert(res.data.message)
              } else if (res.status === 400){
                alert(res.data.message)
            }
          })
          .catch(error=>{
            console.log(error)
            
          })
      }
    return ( 
        <Button variant={variant} onClick={handleSubmit}>
            {content}
        </Button >
    );
}
 
export default UserSubmit;