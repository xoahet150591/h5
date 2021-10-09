import React, { useEffect, useState } from "react";
import Container from "components/Container";
import ListenAndSay from "components/ListenAndSay/index";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page15 = (props) => {
  const { currentPage, onPushAction } = props;
  const renderContent = () => {
    return (
      <ListenAndSay
        onPushAction={onPushAction}
        listen={images.icons.listenPage15}
        icon={images.icons.markerImgPage15}
        penUrl={images.texts.markerTextPage15.url}
        people={images.people.people_page15.url}
        actionType="play_audio"
        value="marker"
        className="people-15"
      ></ListenAndSay>
    );
  };

  return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page15);
