import React from "react";
import Page from "../_common/getPage";
import RegisterPanel from "../RegisterPanel"
const About = ({ lang }) => {
  const aboutEN = "5f8c7787edb30b0648691635";
  const aboutPL = "5f8c777fedb30b0648691634";
  return (
    <div className="about">
      <Page pageId={lang ?  aboutPL : aboutEN}/>
      <RegisterPanel/>
    </div>
  );
};

export default About;