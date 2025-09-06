import "./AppDownload.css";
import { assets } from "../../assets/assets.js";
import React from "react";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experiance Download <br /> Tomato{" "}
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
