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
		clap : "clap",
		active: true,
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
const Page30 = (props) => {
	const { currentPage, onPushAction } = props;
	return <WhatDoYouHave
		title = {images.icons.titlePage30}
		page27 = {page27}
		currentPage  = {currentPage}
		onPushAction  = {onPushAction}
		icQues = {images.icons.icCrayon}
	/>
};

export default React.memo(Page30);
