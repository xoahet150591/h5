import images from "assets/images/index";
import ListenTeacherKids from "components/ListenTeacherKids/index";
import React from "react";


const Page17 = (props) => {
	const { currentPage, onPushAction } = props;
	return <ListenTeacherKids
		className   = "pageMD17-wrapper"
		imageText  = {images.icons.pencil17}
		imageKids  = {images.icons.kids17}
		imageObj  = {images.icons.pen17}
		fileAudio = "page20_audio"
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		/>
};

export default Page17;
