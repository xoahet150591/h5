import images from "assets/images/index";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Container from "components/Container";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const ListenTeacherKids = (props) => {
	const { onPushAction } = props;
	const { imageText, imageKids, imageObj, fileAudio, className } = props;
	const [image, setImage] = useState("");

	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'ListenTeacherKids'

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
				setImage(recordEventData.eventData.imageText);
				//playAudio
				let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
				playAudio(audioUrl)
			}
		}
	},[currentRecord])

	useEffect(() => {
		setIntervalControlClass("img-highlight", "zoom", 3000);
	}, []);
	const renderContent = () => {
		return (
			<div className={` page-wrapperM17  ${className ? className : ""} `}>
				<div className="page-wrapper__content">
					<img
						data-aos="fade-right"
						src={images.icons.title17}
						alt={images.icons.title17}
						className="page-wrapper__content--box-empty1"
					/>
					<div className="page-content">
						<div
							className="people-kids"
							data-aos="fade-left"
							data-aos-anchor-placement="bottom-bottom"
						>
							<img src={imageKids} alt={imageKids} />
						</div>
						<div className="context-middle">
							<div className="img-object">
								<img
									data-aos="fade-down"
									src={imageObj}
									alt={imageObj}
									onClick={(e) => {
										imgClickHandler(e,{
											actionType: 'fireEvent',
											eventName: imgClickEventName,
											eventData: {
												imageText: imageText,
												playAudio:fileAudio
											}
										})
										// onPushAction(e, "play_audio", fileAudio);
										// setImage(imageText);
									}}
									className="img-highlight"
								/>
							</div>
							<div className={`img-text ${image === "" ? "" : "show"} `}>
								<img src={image} alt={image} />
							</div>
						</div>
						<div className="people-teacher" data-aos="fade-left">
							<img src={images.icons.teacher} alt={images.icons.teacher} />
						</div>
					</div>
				</div>
			</div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default ListenTeacherKids;
