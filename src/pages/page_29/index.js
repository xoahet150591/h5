import React, { useState, useEffect, useCallback } from "react";
import Container from "components/Container";
import images from "assets/images";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";
import WhatDoYouHave from "components/WhatDoYouHave/index";
const page27 = [
	{
		clap : "",
		active: false,
		image: images.icons.iHaveAPencil,

	},
	{
		clap : "",
		active: false,
		image: images.icons.iHaveAPen,
		
	},
	{
		clap : "clap",
		active: true,
		image: images.icons.iHaveAMarker,
		
	},
	{
		clap : "",
		active: false,
		image: images.icons.iHaveCrayon,
		
	}
]
const Page29 = (props) => {
	const { currentPage, onPushAction } = props;
	return <WhatDoYouHave
		title = {images.icons.titlePage29}
		page27 = {page27}
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		icQues = {images.icons.icMarker}
	/>
};

export default React.memo(Page29);
