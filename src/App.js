import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./_app.scss"
// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [lang, setLang] = useState(true);

  return (
      <Router>
        <div className="wrapper">
          <Header lang={lang} setLang={setLang} />
          <Main lang={lang} />
          <div className="push"/>
        </div>
        <Footer lang={lang} className="footer"/>
      </Router>
  );
};

export default App;
