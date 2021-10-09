import React, { useEffect, useState } from "react";
import Container from "components/Container";
import ListenAndSay from "components/ListenAndSay/index";
import images from "assets/images";
import "./styles.scss";

const Page13 = (props) => {
  const { currentPage, onPushAction } = props;
  const renderContent = () => {
    return (
      <ListenAndSay
        onPushAction={onPushAction}
        listen={images.icons.listenPage13}
        icon={images.icons.penImgPage13}
        penUrl={images.texts.penTextPage13.url}
        people={images.people.people_page13.url}
        actionType="play_audio"
        value="pen"
        className="people-13"
      ></ListenAndSay>
    );
  };

  return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page13);
