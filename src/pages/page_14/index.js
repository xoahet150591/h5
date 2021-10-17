import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const Page14 = (props) => {
	const {onPushAction } = props;

	const [isShowTextSing, setIsShowTextSing] = useState(false);

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
				setIsShowTextSing(recordEventData.eventData.showTextSing);

				//playAudio
				let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
				playAudio(audioUrl)
			}
		}
	},[currentRecord])

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
								imgClickHandler(e,{
									actionType: 'fireEvent',
									eventName: imgClickEventName,
									eventData: {
										showTextSing: true,
										playAudio:"stand"
									}
								})
								// setIsShowTextSing(true);
								// onPushAction(e, "play_audio", "stand");
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
