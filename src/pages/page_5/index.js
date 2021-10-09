import images from "assets/images/index";
import React from "react";
import ListenKidsClick from "components/ListenKidsClick/index";

const Page6 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenKidsClick 
		className   = "page6-wrapper"
		imageSing  = {images.icons.standPage5}
		imageKids  = {images.icons.kidsPage5}
		fileAudio = "page5_talk"
		currentPage  = {currentPage}	
		onPushAction  = {onPushAction}
		/>	
};

export default Page6;
