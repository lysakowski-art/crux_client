import React,{useContext} from "react";
import Page from "../_common/getPage";
import {GlobalContext} from "../Context/globalProvider"
import {useHistory} from "react-router-dom"

const About = () => {

  const { lang} = useContext(GlobalContext)
  const aboutEN = "5f8c7787edb30b0648691635";
  const aboutPL = "5f8c777fedb30b0648691634";
  return (
    <div className="page-container">
      <Page pageId={lang ?  aboutPL : aboutEN}/>
    </div>
  );
};

export default About;