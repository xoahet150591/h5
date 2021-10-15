import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page14 = (props) => {
	const { currentPage, onPushAction } = props;

	const [isShowTextSing, setIsShowTextSing] = useState(false);

	useEffect(() => {
		setIntervalControlClass("icon-stand", "zoom", 2000);
	}, []);

	const renderContent = () => {
		return (
			<div className="page14-wrapper">
				<img
					className="title-screen"
					src={images.icons.icMiniGamePage13}
					alt={images.icons.icMiniGamePage13}
				/>
				<div className="page14-wrapper__content">
					<div className="page14-wrapper__content--wrapper">
						<img
							className="icon-stand"
							src={images.icons.icStand}
							alt={images.icons.icStand}
							onClick={(e) => {
								setIsShowTextSing(true);
								onPushAction(e, "play_audio", "stand");
							}}
						/>
						{isShowTextSing ? (
							<img
								src={images.icons.textStand}
								alt={images.icons.textStand}
								className="text-stand"
							/>
						) : null}
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page14);
