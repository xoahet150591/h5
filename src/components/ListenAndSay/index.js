import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import {
  setTimeOutAddClass,
  setIntervalControlClass,
} from "helper/setTimeOutControlClass";

const ListenAndSay = (props) => {
  const {
    currentPage,
    onPushAction,
    listen,
    icon,
    people,
    kids,
    teacher,
    actionType,
    value,
    className,
    penUrl,
  } = props;
  const [pen, setPen] = useState("");
  useEffect(() => {
    setIntervalControlClass("pencil-text", "zoom", 1000);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-wrapper__content">
        <div className="listen-wrapper">
          <img
            alt={images.icons.listenPage12}
            src={images.icons.listenPage12}
            className="listen-img"
          />
        </div>
        <div className="pencil-image-wrapper">
          <img
            src={icon}
            alt={icon}
            className={`pencil-image ${className ? className :  "" } ` }
            onClick={(e) => {
              onPushAction(e, actionType, value);
              setPen(penUrl);
            }}
          />
        </div>
        <div className="pencil-text-wrapper">
          <img
            src={pen}
            alt={pen}
            className={` pencil-text ${pen === "" ? "d-none" : " "}${className ? className :  "" } `}
          />
        </div>
        <div className="people-page-wrapper">
          <img src={people} alt={people} className={`people-page ${className ? className :  "" } ` } />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListenAndSay);
