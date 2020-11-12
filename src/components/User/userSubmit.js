import React,{useContext, useState} from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";
import {GlobalContext} from "../Context/globalProvider"
import {useHistory} from "react-router-dom"

const UserSubmit = ({variant,loginData, content,endpoint}) => {
    const {setLoggedIn,setUserName, setUserType} = useContext(GlobalContext)
    const [loading, setLoading] = useState(true)
    const url = `http://127.0.0.1:8000/${endpoint}`
    const history = useHistory()
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
                  history.push("/")
                  setLoading(false)
              } else if (res.status === 404){
                  alert(res.data.message)
                  setLoading(false)
              } else if (res.status === 409){
                  alert(res.data.message)
                  setLoading(false)
              } else if (res.status === 400){
                alert(res.data.message)
                setLoading(false)
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