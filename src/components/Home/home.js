import React, { useContext } from "react";
import Page from "../_common/getPage";
import {Col} from "react-bootstrap"
import {ParallaxBanner} from 'react-scroll-parallax'
import {GlobalContext} from '../Context/globalProvider'
import "./_home.scss"
const Home = () => {
  const {lang} = useContext(GlobalContext)
  const homePL = "5f8c773dedb30b0648691632";
  const homeEN = "5f8c7772edb30b0648691633";
  const bannerImage = {
    image: "/banner.jpg",
    amount: 0.3,
  }
  const bannerStyle = {
    height: '15vh',
  }
  return (
    <div className="page-container">
      <ParallaxBanner layers={[bannerImage]} style={bannerStyle}>
        <h1>Crux of Poland</h1>
      </ParallaxBanner>
      <Page pageId={lang ?  homePL : homeEN}/>
    </div>
  );
};

export default Home;