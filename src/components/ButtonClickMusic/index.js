import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import {
  setTimeOutAddClass,
  setIntervalControlClass,
} from "helper/setTimeOutControlClass";

const ButtonClickMusic = (props) => {
  const { currentPage, onPushAction, sing, kids, icon } = props;

  const [imagesv, setImages] = useState("");
  const [imageicon, setImageIcons] = useState("");

  useEffect(() => {
    setIntervalControlClass("wrapper-request", "zoom", 0);
  }, []);
  return (
    <div className="page1-wrapper">
      <img className="image-wrapper" src={sing}></img>
      <div className="wrapper-item">
        <img
          className="pic-1"
          src={icon.button1}
          onClick={(e) => {
            setImages(icon.pagePage);
            setImageIcons(icon.iHavePage);
            onPushAction(e, "play_audio", "iHaveAPaper");
          }}
        ></img>
        <img
          className="pic-2"
          src={icon.button2}
          onClick={(e) => {
            setImages(icon.gluePage);
            setImageIcons(icon.iHaveGlue);    
            onPushAction(e, "play_audio", "iHaveAGlue");
          }}
        ></img>
        <img
          className="pic-3"
          src={icon.button3}
          onClick={(e) => {
            setImages(icon.scrissorPage);
            setImageIcons(icon.iHaveScrissor);
            onPushAction(e, "play_audio", "iHaveAScrissor");
          }}
        ></img>
        <img
          className="pic-4"
          src={icon.button4}
          onClick={(e) => {
            setImages(icon.paintPage);
            setImageIcons(icon.iHavePaint);
            onPushAction(e, "play_audio", "iHaveAPaint");
          }}
        ></img>
      </div>
      <img className="wrapper-people" src={kids.url}></img>
      <div className="wrapper-request">
        <img src={imagesv}></img>
        <img src={imageicon}></img>
      </div>
    </div>
  );
};

export default React.memo(ButtonClickMusic);
