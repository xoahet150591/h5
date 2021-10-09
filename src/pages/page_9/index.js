import React from "react";
import images from "assets/images/index";
import Container from "components/Container";
import PracticePlay from "components/PracticePlay/index";

const Page9 = (props) => {
  const { currentPage, onPushAction } = props;
  const page6 = [
    {
      audio: "",
      clap : "",
      active: false,
      image: images.icons.sing6,
  
    },
    {
      audio: "",
      clap : "",
      active: false,
      image: images.icons.sit6,
      
    },
    {
      audio: "",
      clap : "",
      active: false,
      image: images.icons.stand6,
      
    },
    {
      audio: "talk",
      clap : "clap",
      active: true,
      image: images.icons.talk6,
      
    }
  ]
  return (
    <PracticePlay
      imageKids={images.icons.kidtalk6}
      page6 = {page6}
      className= "page9-wrapper"
      // fileAudioSing={"audioFalse"}
      // fileAudioSit={"audioFalse"}
      // fileAudioTalk={"audioTrue"}
      // fileAudioStand={"audioFalse"}
      currentPage={currentPage}
      onPushAction={onPushAction}
    />
  );
};

export default React.memo(Page9);
