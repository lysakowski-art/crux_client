import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SubmitForm = ({ type, name, variant, data }) => {
  const { t } = useTranslation();

  const url = process.env.REACT_APP_BACKEND_URL + "routes";
  const handleSubmit = (e) => {
    e.preventDefault();
    const createRoute = async () => {
      await axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    createRoute();
  };

  return (
    <Button variant={variant} type={type} onClick={handleSubmit}>
      {t(name)}
    </Button>
  );
};

export default SubmitForm;
