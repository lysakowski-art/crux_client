import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios"

import "./_app.scss"
// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [lang, setLang] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("");
  const [cookieStatus, setCookieStatus] = useState({});

  const URI = "http://127.0.0.1:8000/check_session";

  useEffect(() => {
    axios
      .get(URI, { withCredentials: true })
      .then((res) => {
        console.log(res);
        // if (res.status === 200) {
        //   if (Object.entries(cookieStatus).length === 0) {
        //     if (res.data.loggedIn === true) {
        //       setCookieStatus(res.data);
        //       setLoggedIn(true);
        //     }
        //   }
        // } else if (res.status === 404) {
        //   console.log("No session");
        // }
      })
      .catch((error) => console.log(error));
  }, [cookieStatus]);

  return (
      <Router>
        <div className="wrapper">
          <Header lang={lang} setLang={setLang} loggedIn={loggedIn} setUserName={setUserName} userName={userName} setLoggedIn={setLoggedIn}/>
          <Main lang={lang} loggedIn={loggedIn}/>
          <div className="push"/>
        </div>
        <Footer lang={lang} className="footer"/>
      </Router>
  );
};

export default App;
