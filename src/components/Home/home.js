import React from "react";
import Page from "../_common/getPage";


const Home = ({ lang }) => {
  const home_URI = "home";
  return (
    <div className="home">

      <Page uri={home_URI} lang={lang} />
    </div>
  );
};

export default Home;