import React from "react";
import { Form } from "react-bootstrap";

const UserInput = ({ placeholder, label, value, setValue, type }) => {
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <Form.Group>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Form.Control
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={handleValue}
      />
    </Form.Group>
  );
};

export default UserInput;
