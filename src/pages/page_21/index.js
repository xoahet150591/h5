import images from "assets/images/index";
import ListenTeacherKids from "components/ListenTeacherKids/index";
import React from "react";


const Page18 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenTeacherKids
		className   = "pageMD18-wrapper"
		imageText  = {images.icons.text18}
		imageKids  = {images.icons.kids18}
		imageObj  = {images.icons.pen18}
		fileAudio = "page21_audio"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>
};

export default Page18;
