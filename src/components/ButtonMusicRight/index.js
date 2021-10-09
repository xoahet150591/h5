import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

const ButtonBackgroundMusic = (props) => {
  const [isShowPlayButton, setIsShowPlayButton] = useState(true);
  const { audioPlaying } = props;

  const handleClickPause = () => {
    setIsShowPlayButton(false);
  };
  const handleClickPlay = () => {
    setIsShowPlayButton(true);
  };

  useEffect(() => {
    if (audioPlaying) {
      if (!isShowPlayButton) {
        audioPlaying.pause();
      } else {
        audioPlaying.play();
      }
    }
  }, [audioPlaying, isShowPlayButton]);

  return (
    <div className="button-right">
      {isShowPlayButton ? (
        <img
          src={images.icons.icPauseMusic}
          onClick={handleClickPause} />
      ) : (
        <img
          src={images.icons.icPlayMusic}
          onClick={handleClickPlay} />
      )}
    </div>
  );
};

export default React.memo(ButtonBackgroundMusic);