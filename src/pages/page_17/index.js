import React, { useEffect, useState } from "react";
import Container from "components/Container";
import ListenAndSay from "components/ListenAndSay/index";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page14 = (props) => {
  const { currentPage, onPushAction } = props;
  const renderContent = () => {
    return (
      <ListenAndSay
        onPushAction={onPushAction}
        listen={images.icons.listenPage14}
        icon={images.icons.crayonImgPage14}
        penUrl={images.texts.crayonTextPage14.url}
        people={images.people.people_page14.url}
        actionType="play_audio"
        value="crayon"
        className="people-14"
      ></ListenAndSay>
    );
  };

  return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page14);
