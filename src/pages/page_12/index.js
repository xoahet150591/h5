import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const Page12 = (props) => {
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
								imgClickHandler(e,{
									actionType: 'fireEvent',
									eventName: imgClickEventName,
									eventData: {
										showTextSing: true,
										playAudio:"sitPage12"
									}
								})
								// setIsShowTextSing(true);
								// onPushAction(e, "play_audio", "sitPage12");
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
