import React, { useState, useEffect, useCallback } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";
//import ButtonBackgroundMusic from "components/ButtonBackgroundMusic/index";
//import ButtonMusicRight from "components/ButtonMusicRight/index";

import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const Page25 = (props) => {
	const {  onPushAction, audioPlaying } = props;
	const [isShowPlayButton, setIsShowPlayButton] = useState(true);

	// useEffect(() => {
	// 	setIntervalControlClass("icon-sing", "zoom", 2000);
	// }, []);

	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'Page12'

	const imgClickHandler = (e,op)=>{
		onPushAction(e,op.actionType,op)
	}

	useEffect(()=>{
		if(currentRecord.length > 0){
			let recordEventData = currentRecord[currentRecord.length-1];
			if(recordEventData.eventPage === currentPage && 
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName){
				console.log(`runRecordEvent`,recordEventData)
				//setIsShowTextSing(recordEventData.eventData.showTextSing);
				handleAddClass(recordEventData.eventData.class);
				//playAudio
				let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
				playAudio(audioUrl)
			}
		}
	},[currentRecord])

	const handleAddClass = useCallback((ele) => {
		const e = document.querySelectorAll(ele);
		for (const i of e) {
			setIntervalControlClass(i, "zoom", 2000);
		}
	}, []);

	const listImage = images.page25.icons.map((item, index) => {
		let audio = "audioFalse";
		switch (index) {
			case 7:
				audio = "markerPage25";
				break;
			case 15:
				audio = "pencilPage25";
				break;
			case 19:
				audio = "penPage25";
				break;
			case 29:
				audio = "crayonPage25";
				break;
			default:
				break;
		}
		return (
			<img
				key={`${index}`}
				src={item}
				alt={item}
				className={`table__item ${audio}`}
				data-id={audio}
				onClick={(e) => {
					const audioId = e.target.dataset.id;
					imgClickHandler(e,{
						actionType: 'fireEvent',
						eventName: imgClickEventName,
						eventData: {
							class: audio,
							playAudio:audioId
						}
					})
					//handleAddClass(audio);
					//onPushAction(e, "play_audio", audioId);
				}}
			/>
		);
	});

	const listText = images.page25.texts.map((item, index) => {
		const widthFirstItem = index === 0 ? "95%" : "70%";
		return (
			<img
				key={`${index}`}
				style={{ width: widthFirstItem }}
				src={item}
				alt={item}
				className="text-wrapper__item"
				data-id={index}
			/>
		);
	});

	const handleClickPause = () => {
		setIsShowPlayButton(false);
	};
	const handleClickPlay = () => {
		setIsShowPlayButton(true);
	};

	const renderContent = () => {
		return (
			<div className="page25-wrapper">
				<div className="page25-wrapper__content">
					<div className="page25-wrapper__content--wrapper">
						<div className="table">{listImage}</div>
						<div className="text-wrapper">{listText}</div>
					</div>
				</div>
				{/* <ButtonMusicRight
					audioPlaying={audioPlaying}
					handleClickPause={handleClickPause}
					handleClickPlay={handleClickPlay}
					isShowPlayButton={isShowPlayButton}
					className="button"
				/> */}
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page25);
