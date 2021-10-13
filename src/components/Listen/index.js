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
    kids,
    teacher,
    actionType,
    value,
    className,
  } = props;
  const [pen, setPen] = useState("");

  return (
    <div className="page-wrapper">
      <div className="page-wrapper__content">
        <div className="listen-wrapper">
          <img
            alt={listen}
            src={listen}
            className="listen-img-16"
            data-aos="fade-right"
          />
        </div>
        <div className="text-image-wrapper">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            src={icon}
            alt={icon}
            className={`text-image ${className ? className : ""} `}
            onClick={(e) => {
              onPushAction(e, actionType, value);
            }}
          />
        </div>
        <div
          className="people-wrapper"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <img src={kids} alt={kids} className=" kids-page-16" />
          <img src={teacher} alt={teacher} className="teacher-page-16" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListenAndSay);
