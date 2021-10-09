import images from "assets/images/index";
import React from "react";
import ListenKidsClick from "components/ListenKidsClick/index";

const Page4 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenKidsClick 
		className   = "page4-wrapper"
		imageSing  = {images.icons.talkPage3}
		imageKids  = {images.icons.kidsPage3}
		fileAudio = "page3_talk"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>	
};

export default Page4;
