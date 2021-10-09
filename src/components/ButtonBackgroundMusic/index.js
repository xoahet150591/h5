import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

const ButtonBackgroundMusic = (props) => {
	const { isShowPlayButton, handleClickPause, handleClickPlay } = props;

	const { audioPlaying } = props;

	useEffect(() => {
		if (audioPlaying) {
			if (!isShowPlayButton) {
				audioPlaying?.pause();
			} else {
				audioPlaying?.play();
			}
		}
	}, [audioPlaying, isShowPlayButton]);

	return (
		<div className="button-background">
			{isShowPlayButton ? (
				<img
					src={images.icons.icPauseMusic}
					onClick={handleClickPause}
					alt={images.icons.icPauseMusic}
				/>
			) : (
				<img
					src={images.icons.icPlayMusic}
					onClick={handleClickPlay}
					alt={images.icons.icPlayMusic}
				/>
			)}
		</div>
	);
};

export default React.memo(ButtonBackgroundMusic);
