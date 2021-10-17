import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const Page11 = (props) => {
	const { onPushAction } = props;

	const [isShowTextSing, setIsShowTextSing] = useState(false);

	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'Page11'

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
								imgClickHandler(e,{
									actionType: 'fireEvent',
									eventName: imgClickEventName,
									eventData: {
										showTextSing: true,
										playAudio:"singPage11"
									}
								})
								// setIsShowTextSing(true);
								// onPushAction(e, "play_audio", "singPage11");
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
