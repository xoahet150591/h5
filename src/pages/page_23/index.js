import images from "assets/images/index";
import ListenTeacherKids from "components/ListenTeacherKids/index";
import React from "react";


const Page20 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenTeacherKids
		className   = "pageMD20-wrapper"
		imageText  = {images.icons.text20}
		imageKids  = {images.icons.kids20}
		imageObj  = {images.icons.pen20}
		fileAudio = "page23_audio"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>
};

export default Page20;
