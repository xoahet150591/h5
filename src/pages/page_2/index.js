import images from "assets/images/index";
import React from "react";
import ListenKidsClick from "components/ListenKidsClick/index";

const Page3 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenKidsClick 
		className   = "page3-wrapper"
		imageSing  = {images.icons.singPage2}
		imageKids  = {images.icons.kidsPage2}
		fileAudio = "page2_sing"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>
};

export default Page3;
