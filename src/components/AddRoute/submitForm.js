import React from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";
import {useTranslation} from 'react-i18next'


const SubmitForm = ({ type, name, variant, data }) => {
  const {t}=useTranslation();
  const URI = "http://127.0.0.1:8000/routes"
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
    axios
      .post(URI,data)
      .then(res=>{
        console.log(res)
        alert(res.data.message)
      })
      .catch(error=>{
        console.log(error)
      })
  }

  return (
    <Button variant={variant} type={type} onClick={handleSubmit}>
     {t(name)}
    </Button>
  );
};

export default SubmitForm;
