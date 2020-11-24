import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import * as EmailValidator from "email-validator";

const UserCreate = ({
  registerData,
  content,
  endpoint,
  setUserName,
  setPassword,
  setEmailAdress,
}) => {
  const [loading, setLoading] = useState(true);
  const url = process.env.REACT_APP_BACKEND_URL + endpoint;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (EmailValidator.validate(registerData["emailAdress"])) {
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          registerData["password"]
        )
      ) {
        const createUser = async () => {
          await axios
            .post(url, registerData, { withCredentials: true })
            .then((res) => {
              if (res.status === 201) {
                alert(res.data.message);
                setLoading(false);
              } else if (res.status === 400) {
                alert(res.data.message);
                setLoading(false);
              } else if (res.status === 500) {
                alert(res.data.message);
                setLoading(false);
                console.log(loading);
              }
              setUserName("");
              setPassword("");
              setEmailAdress("");
            })
            .catch((error) => {
              console.log(error);
            });
        };
        createUser();
      } else {
        alert(
          "Password must contain minimum eight characters, at least one letter, one number and one special character."
        );
      }
    } else {
      alert("Not correct email adress");
    }
  };
  return (
    <Button variant="light" onClick={handleSubmit}>
      {content}
    </Button>
  );
};

export default UserCreate;
