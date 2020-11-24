import React from "react";
import ReactDOM from "react-dom";
// import './i18n/i18n';
import App from "./App";
// import { ParallaxProvider } from 'react-scroll-parallax';
import {GlobalProvider} from './components/Context/globalProvider'

ReactDOM.render(
  <React.StrictMode>
    {/* <ParallaxProvider> */}
    <GlobalProvider>
        <App />
      </GlobalProvider>
    {/* </ParallaxProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
