import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page12 = (props) => {
	const { currentPage, onPushAction } = props;

	const [isShowTextSing, setIsShowTextSing] = useState(false);

	useEffect(() => {
		setIntervalControlClass("icon-sit", "zoom", 2000);
	}, []);

	const renderContent = () => {
		return (
			<div className="page12-wrapper">
				<img
					className="title-screen"
					src={images.icons.icMiniGame12}
					alt={images.icons.icMiniGame12}
				/>
				<div className="page12-wrapper__content">
					<div className="page12-wrapper__content--wrapper">
						<img
							className="icon-sit"
							src={images.icons.icSit}
							alt={images.icons.icSit}
							onClick={(e) => {
								setIsShowTextSing(true);
								onPushAction(e, "play_audio", "sitPage12");
							}}
						/>
						{isShowTextSing ? (
							<img
								src={images.texts.textSit.url}
								alt={images.texts.textSit.url}
								className="text-sit"
							/>
						) : null}
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page12);
