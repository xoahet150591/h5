import React, { useEffect, useState } from "react";
import Container from "components/Container";
import ListenAndSay from "components/ListenAndSay/index";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";
const Page12 = (props) => {
  const { currentPage, onPushAction } = props;

  const renderContent = () => {
    return (
      <ListenAndSay
        onPushAction={onPushAction}
        sing={images.icons.listenPage12}
        icon={images.icons.pencilImgPage12}
        penUrl={images.texts.pencilTextPage12.url}
        people={images.people.people_page12.url}
        actionType="play_audio"
        value="pencil"
        className="pencil-12"
      ></ListenAndSay>
    );
  };

  return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page12);
