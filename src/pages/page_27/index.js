import React, { useState, useEffect, useCallback } from "react";
import Container from "components/Container";
import images from "assets/images";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";
import WhatDoYouHave from "components/WhatDoYouHave/index";
const page27 = [
	{
		clap : "clap",
		active: true,
		image: images.icons.iHaveAPencil,

	},
	{
		clap : "",
		active: false,
		image: images.icons.iHaveAPen,
		
	},
	{
		clap : "",
		active: false,
		image: images.icons.iHaveAMarker,
		
	},
	{
		clap : "",
		active: false,
		image: images.icons.iHaveCrayon,
		
	}
]
const Page27 = (props) => {
	const { currentPage, onPushAction } = props;
	return <WhatDoYouHave
		title = {images.icons.titlePage27}
		page27 = {page27}
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		icQues = {images.icons.icPencil}
	/>
};

export default React.memo(Page27);
