import React, { useEffect, useState } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import Practice from "components/Practice/index";
//import ButtonMusicRight from "components/ButtonMusicRight/index";
const Page24 = (props) => {
	const { currentPage, audioPlaying } = props;
	const [isShowPlayButton, setIsShowPlayButton] = useState(true);

	const handleClickPause = () => {
		setIsShowPlayButton(false);
	};
	const handleClickPlay = () => {
		setIsShowPlayButton(true);
	};
	const renderContent = () => {
		return (
			<div className="wrap-all">
				{/* <ButtonMusicRight
					audioPlaying={audioPlaying}
					handleClickPause={handleClickPause}
					handleClickPlay={handleClickPlay}
					isShowPlayButton={isShowPlayButton}
					className="button"
				/> */}
				<Practice
					imagePractice={images.icons.practicePage21}
					kid1={images.icons.kid1Page21}
					kid2={images.icons.kid2Page21}
					kid3={images.icons.kid3Page21}
					kid4={images.icons.kid4Page21}
					sing={images.icons.singPage21}
					talk={images.icons.talkPage21}
					sit={images.icons.sitPage21}
					stand={images.icons.standPage21}
				></Practice>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page24);
