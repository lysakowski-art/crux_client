import React, { useContext, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../Context/globalProvider";
import { useHistory } from "react-router-dom";

const UserSubmit = ({ variant, loginData, content, endpoint }) => {
  const { setLoggedIn, setUserName, setUserType } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const url = process.env.REACT_APP_BACKEND_URL + endpoint;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const logUser = async () => {
      if (loading) {
        await axios
          .post(url, loginData, { withCredentials: true })
          .then((res) => {
            if (res.status === 201) {
              setLoggedIn(true);
              setUserName(res.data.userName);
              setUserType(res.data.userType);
              history.push("/");
              setLoading(false);
            } else if (res.status === 404) {
              alert(res.data.message);
              setLoading(false);
            } else if (res.status === 409) {
              alert(res.data.message);
              setLoading(false);
            } else if (res.status === 400) {
              alert(res.data.message);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    logUser();
  };
  return (
    <Button variant={variant} onClick={handleSubmit}>
      {content}
    </Button>
  );
};

export default UserSubmit;
