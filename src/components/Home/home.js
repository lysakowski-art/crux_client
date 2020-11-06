import React, { useContext } from "react";
import Page from "../_common/getPage";
import {ParallaxBanner} from 'react-scroll-parallax'
import {GlobalContext} from '../Context/globalProvider'
const Home = () => {
  const {lang} = useContext(GlobalContext)
  const homePL = "5f8c773dedb30b0648691632";
  const homeEN = "5f8c7772edb30b0648691633";
  const bannerImage = {
    image: 'https://s26.flog.pl/media/foto/12769490_okiennik-wielki-.jpg',
    amount: 0.3,
  }
  const bannerStyle = {
    height: '400px',
  }
  return (
    <div>
      <ParallaxBanner layers={[bannerImage]} style={bannerStyle}>
        <h1>Crux of Poland</h1>
      </ParallaxBanner>
      <Page pageId={lang ?  homePL : homeEN}/>
    </div>
  );
};

export default Home;