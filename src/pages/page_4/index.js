import images from "assets/images/index";
import React from "react";
import ListenKidsClick from "components/ListenKidsClick/index";

const Page5 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenKidsClick 
		className   = "page5-wrapper"
		imageSing  = {images.icons.sitPage4}
		imageKids  = {images.icons.kidsPage4}
		fileAudio = "page4_sit"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>	
};

export default Page5;
