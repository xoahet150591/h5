import React, { useEffect, useState } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import Listen from "components/Listen/index";

const Page16 = (props) => {
	const { currentPage, onPushAction } = props;
	const renderContent = () => {
		return (
			<Listen
				onPushAction={onPushAction}
				listen={images.icons.listenPage12}
				icon={images.icons.questionPage16}
				kids={images.people.kids_page16.url}
				teacher={images.people.teacher_page16.url}
				actionType="play_audio"
				value="what"
			/>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page16);
