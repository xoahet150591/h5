import React from "react";
import images from "assets/images/index";
import Container from "components/Container";
import PracticePlay from "components/PracticePlay/index";

const Page8 = (props) => {
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
      audio: "stand",
      clap : "clap",
      active: true,
      image: images.icons.stand6,
      
    },
    {
      audio: "",
      clap : "",
      active: false,
      image: images.icons.talk6,
      
    }
  ]

  return (
    <PracticePlay
      className= "page8-wrapper"
      imageKids={images.icons.kidstand6}
      page6 = {page6}
      // fileAudioSing={"audioFalse"}
      // fileAudioSit={"audioFalse"}
      // fileAudioTalk={"audioFalse"}
      // fileAudioStand={"audioTrue"}
      currentPage={currentPage}
      onPushAction={onPushAction}
    />
  );
};

export default React.memo(Page8);
