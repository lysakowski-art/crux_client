import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import "./_app.scss";
import "./i18n/i18n";
// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { GlobalContext } from "./components/Context/globalProvider";

const App = () => {
  const [cookieStatus, setCookieStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const url = process.env.REACT_APP_BACKEND_URL + "check_session";
  const { setLoggedIn, setUserName, setUserType } = useContext(GlobalContext);
  useEffect(() => {
    if (Object.entries(cookieStatus).length === 0 && loading) {
      const checkSession = async () => {
        await axios
          .get(url, { withCredentials: true })
          .then((res) => {
            if (res.status === 200) {
              if (Object.entries(cookieStatus).length === 0) {
                if (res.data.loggedIn === true) {
                  setLoggedIn(res.data.loggedIn);
                  setUserName(res.data.userName);
                  setUserType(res.data.userType);
                  setCookieStatus(res.data);
                  setLoading(false);
                }
              }
            } else if (res.status === 400) {
              console.log(res.message);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      };
      checkSession();
    }
  }, [cookieStatus, loading, setUserName, setLoggedIn, setUserType, url]);

  return loading ? (
    <div className="loading">
      <Spinner animation="grow" variant="dark" size="xl" />
    </div>
  ) : (
    <Router>
      <div className="wrapper">
        <Header />
        <Main />
        <div className="push" />
      </div>
      <Footer className="footer" />
    </Router>
  );
};

export default App;
