import React from "react";
import images from "assets/images/index";
import Container from "components/Container";
import PracticePlay from "components/PracticePlay/index";

const page6 = [
	{
		audio: "sing",
		clap : "clap",
		active: true,
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
		audio: "",
		clap : "",
		active: false,
		image: images.icons.talk6,
		
	}
]
const Page6 = (props) => {
  const { currentPage, onPushAction } = props;
  
    return <PracticePlay
	imageKids = {images.icons.kidsing6}
	page6 = {page6}
	// fileAudioSing  = {"audioTrue"}
	// fileAudioSit  = {"audioFalse"}
	// fileAudioTalk  = {"audioFalse"}
	// fileAudioStand = {"audioFalse"}
	// isSingActive  = {"active"}
	// singAudio  = {"sing"}
	// clapSingAudio ={"clap"}
	currentPage  = {currentPage}
	onPushAction  = {onPushAction}
	/>
    
  };


export default React.memo(Page6);
