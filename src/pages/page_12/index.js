import React from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";

const Page11 = (props) => {
	const { currentPage, onPushAction } = props;

	const renderContent = () => {
		return (
			<div className="page11-wrapper">
				<div className="page11-wrapper__content">
					<img
						className="item"
						alt={images.people.page11ChildConver.url}
						src={images.people.page11ChildConver.url}
					/>
					<div className="page11-wrapper__content--answer">
						<img
							className="item"
							alt={images.icons.paperIcon}
							src={images.icons.paperIcon}
							onClick={(e) => onPushAction(e, "play_audio", "audioFalse")}
						/>
						<img
							className="item"
							alt={images.icons.glueIcon}
							src={images.icons.glueIcon}
							onClick={(e) => onPushAction(e, "play_audio", "audioFalse")}
						/>
						<img
							className="item"
							alt={images.icons.paintIcon}
							src={images.icons.paintIcon}
							onClick={(e) => onPushAction(e, "play_audio", "paint")}
						/>
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page11);
