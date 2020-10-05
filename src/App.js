import React,{useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [lang, setLang] =useState(true)
  
  return (
    <div className="wrapper">
      <Router>
        <Header lang={lang} setLang={setLang}/>
        <Main lang={lang}/>
        <Footer lang={lang}/>
      </Router>
    </div>
  );
};

export default App;
