import React from "react";
import {Form} from 'react-bootstrap'
import "./_contact.scss"
const ContactForm = () => {
  return (
    <div className="contact-container">
      <Form className="contact-form">
      <Form.Group size="sm">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" size="lg"/>
      </Form.Group>
      <Form.Group size="md">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
    </Form>
    </div>
    
  );
};

export default ContactForm;
