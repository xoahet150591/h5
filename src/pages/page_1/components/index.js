import React, { useState } from "react";
import Container from "components/Container";
import images from "assets/images/index";
import ButtonClickMusic from "components/ButtonClickMusic";

import "./styles.scss";

const Page1 = (props) => {
	const { currentPage, onPushAction } = props;

	const renderContent = () => {
		return (
			<ButtonClickMusic
				onPushAction={onPushAction}
				sing={images.icons.sing}
				kids={images.people.kids}
				icon={images.icons}
			></ButtonClickMusic>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page1);
