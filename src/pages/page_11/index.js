import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page11 = (props) => {
	const { currentPage, onPushAction } = props;

	const [isShowTextSing, setIsShowTextSing] = useState(false);

	useEffect(() => {
		setIntervalControlClass("icon-sing", "zoom", 2000);
	}, []);

	const renderContent = () => {
		return (
			<div className="page11-wrapper">
				<img
					className="title-screen"
					src={images.icons.icMiniGame11}
					alt={images.icons.icMiniGame11}
				/>
				<div className="page11-wrapper__content">
					<div className="page11-wrapper__content--wrapper">
						<img
							className="icon-sing"
							src={images.icons.icSing}
							alt={images.icons.icSing}
							onClick={(e) => {
								setIsShowTextSing(true);
								onPushAction(e, "play_audio", "singPage11");
							}}
						/>
						{isShowTextSing ? (
							<img
								src={images.texts.textSing.url}
								alt={images.texts.textSing.url}
								className="text-sing"
							/>
						) : null}
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page11);
