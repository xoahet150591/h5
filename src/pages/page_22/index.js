import images from "assets/images/index";
import ListenTeacherKids from "components/ListenTeacherKids/index";
import React from "react";


const Page19 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenTeacherKids
		className   = "pageMD19-wrapper"
		imageText  = {images.icons.text19}
		imageKids  = {images.icons.kids19}
		imageObj  = {images.icons.pen19}
		fileAudio = "page22_audio"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>
};

export default Page19;
