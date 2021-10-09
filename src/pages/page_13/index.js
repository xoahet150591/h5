import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page13 = (props) => {
	const { currentPage, onPushAction } = props;

	const [isShowTextSing, setIsShowTextSing] = useState(false);

	useEffect(() => {
		setIntervalControlClass("icon-talk", "zoom", 2000);
	}, []);

	const renderContent = () => {
		return (
			<div className="page13-wrapper">
				<img
					className="title-screen"
					src={images.icons.icMiniGamePage13}
					alt={images.icons.icMiniGamePage13}
				/>
				<div className="page13-wrapper__content">
					<div className="page13-wrapper__content--wrapper">
						<img
							className="icon-talk"
							src={images.icons.icTalk}
							alt={images.icons.icTalk}
							onClick={(e) => {
								setIsShowTextSing(true);
								onPushAction(e, "play_audio", "talkPage13");
							}}
						/>
						{isShowTextSing ? (
							<img
								src={images.texts.textTalk.url}
								alt={images.texts.textTalk.url}
								className="text-talk"
							/>
						) : null}
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page13);
