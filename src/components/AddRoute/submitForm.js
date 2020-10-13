import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import {useTranslation} from 'react-i18next'


const SubmitForm = ({ type, name, variant, data }) => {
  const {i18n, t}=useTranslation();
  const URI = "http://127.0.0.1:8000/routes/"
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
    axios
      .post(URI,data)
      .then(res=>{
        console.log(res)
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
