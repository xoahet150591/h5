import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import {
	setTimeOutAddClass,
	setIntervalControlClass,
} from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";
import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const ListenAndSay = (props) => {
	const {
		onPushAction,
		listen,
		icon,
		people,
		kids,
		teacher,
		actionType,
		value,
		className,
		penUrl,
	} = props;
	const [pen, setPen] = useState("");


	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'ListenAndSay'

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
				setPen(recordEventData.eventData.penUrl);
				//playAudio
				let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
				playAudio(audioUrl)
			}
		}
	},[currentRecord])

	useEffect(() => {
		setIntervalControlClass("pencil-image", "zoom", 1000);
	}, []);

	return (
		<div className="page-wrapper">
			<div className="page-wrapper__content">
				<div className="listen-wrapper">
					<img
						alt={images.icons.listenPage12}
						src={images.icons.listenPage12}
						className="listen-img"
						data-aos="fade-right"
					/>
				</div>
				<div className="pencil-image-wrapper">
					<img
						data-aos="fade-right"
						data-aos-duration="1000"
						src={icon}
						alt={icon}
						className={`pencil-image ${className ? className : ""} `}
						onClick={(e) => {
							imgClickHandler(e,{
								actionType: 'fireEvent',
								eventName: imgClickEventName,
								eventData: {
									penUrl: penUrl,
									playAudio:value
								}
							})
							// onPushAction(e, actionType, value);
							// setPen(penUrl);
						}}
					/>
				</div>
				<div className="pencil-text-wrapper">
					<img
						src={pen}
						alt={pen}
						className={` pencil-text ${pen === "" ? "d-none" : " "}${
							className ? className : ""
						} `}
					/>
				</div>
				<div className="people-page-wrapper">
					<img
						data-aos="fade-left"
						data-aos-duration="1000"
						src={people}
						alt={people}
						className={`people-page ${className ? className : ""} `}
					/>
				</div>
			</div>
		</div>
	);
};

export default React.memo(ListenAndSay);
