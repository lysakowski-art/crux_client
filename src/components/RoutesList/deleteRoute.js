import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteRoute = ({ _id, setRouteActive }) => {
  const url = process.env.REACT_APP_BACKEND_URL + `routes/${_id}`;
  const handleClick = (e) => {
    e.preventDefault();
    const send = async () => {
      axios
        .delete(url, { withCredentials: true })
        .then((res) => {
          alert(res.data.message);
        })
        .then(() => {
          setRouteActive(false);
        });
    };
    send();
  };
  return (
    <Button variant="danger" onClick={handleClick}>
      X
    </Button>
  );
};

export default DeleteRoute;
