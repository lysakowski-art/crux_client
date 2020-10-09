import React from "react";
import Page from "../_common/getPage";

const Home = ({ lang }) => {
  const about_URI = "about";
  return (
    <div className="about">
      <Page uri={about_URI} lang={lang} />
    </div>
  );
};

export default Home;