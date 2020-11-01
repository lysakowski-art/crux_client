import React from "react";
import ReactDOM from "react-dom";
import './i18n/i18n';
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';

// import "./_reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
