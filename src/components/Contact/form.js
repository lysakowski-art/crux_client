import React,{useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap'
import "./_contact.scss"
import {useTranslation} from "react-i18next"
import axios from "axios"
import * as EmailValidator from 'email-validator';


const ContactForm = () => {
  const {t} = useTranslation()
  const [senderMail,setSenderMail] = useState("")
  const [mailContent, setMailContent] = useState("")
  const [contactData, setContactData] = useState({})
  const url = "http://"+process.env.REACT_APP_BACKEND_URL+"contact"
  console.log(url)
  const handleMailChange = (e)=> {
    setSenderMail(e.target.value)
  }
  const handleContentChange = (e) =>{
    setMailContent(e.target.value)
  }
  const handleSendContactData = (e)=>{
    e.preventDefault()
    if(EmailValidator.validate(contactData.senderMail)){
    const send = async () => {
      await axios
        .post(url, contactData)
        .then(res=>{
          alert(res.data.message)
        })
        .catch(err=>{
          console.log(err)
        })
    }
    send();
  } else {
    alert("Invalid mail adress")
  }
  }
  useEffect(()=>{
    setContactData({
      senderMail,
      mailContent
    })
  },[senderMail, mailContent])
  console.log(mailContent)
  return (
    <div className="contact-container">
      <Form className="contact-form">
      <Form.Group size="sm">
      <Form.Label>{t('email')}</Form.Label>
        <Form.Control value={senderMail} onChange={handleMailChange} type="email" placeholder="name@example.com" size="lg"/>
      </Form.Group>
      <Form.Group size="md">
        <Form.Control value={mailContent} onChange={handleContentChange} as="textarea" rows={6} placeholder={t("what's on your mind")}/>
      </Form.Group>
      <Button onClick={handleSendContactData} variant="light">{t('confirm')}</Button>
    </Form>
    </div>
    
  );
};

export default ContactForm;
