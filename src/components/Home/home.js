import React from "react";
import Page from "../_common/getPage";

const Home = ({ lang }) => {
  const homePL = "5f8c773dedb30b0648691632";
  const homeEN = "5f8c7772edb30b0648691633";
  return (
    <div className="home">

      <Page pageId={lang ?  homePL : homeEN} />
    </div>
  );
};

export default Home;