import React from "react";
import images from "assets/images/index";
import Container from "components/Container";
import PracticePlay from "components/PracticePlay/index";


const Page7 = (props) => {
  const { currentPage, onPushAction } = props;
  const page6 = [
    {
      audio: "",
      clap : "",
      active: false,
      image: images.icons.sing6,
  
    },
    {
      audio: "sit",
      clap : "clap",
      active: true,
      image: images.icons.sit6,
      
    },
    {
      audio: "",
      clap : "",
      active: false,
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
      className = "page7-wrapper"
      imageKids={images.icons.kidsit6}
      page6 ={page6}
      // fileAudioSing={"audioFalse"}
      // fileAudioSit={"audioTrue"}
      // fileAudioTalk={"audioFalse"}
      // fileAudioStand={"audioFalse"}
      // isSitActive={"active"}
      // sitAudio={"sit"}
      // clapSitAudio={"clap"}
      currentPage={currentPage}
      onPushAction={onPushAction}
    />
  );
};

export default React.memo(Page7);
