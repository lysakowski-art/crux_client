import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from 'react-bootstrap'
import axios from "axios"

import "./_app.scss"
// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {GlobalContext} from "./components/Context/globalProvider"

const App = () => {
  const [cookieStatus, setCookieStatus] = useState({});
  const url = "http://127.0.0.1:8000/check_session";
  const {setLoggedIn, loading, setLoading, setUserName} = useContext(GlobalContext)
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          if (Object.entries(cookieStatus).length === 0) {
            if (res.data.loggedIn === true) {
              setLoggedIn(res.data.loggedIn);
              setUserName(res.data.user_name);
              setCookieStatus(res.data)
              setLoading(false)
            }
          }
        } else if (res.status === 400) {
          console.log(res.message);
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      });
  }, []);

  return loading ?  <Spinner animation="grow" variant="dark" size="xl"/>
:  (
      <Router>
        <div className="wrapper">
          <Header/>
          <Main/>
          <div className="push"/>
        </div>
        <Footer className="footer"/>
      </Router>
  );
};

export default App;
