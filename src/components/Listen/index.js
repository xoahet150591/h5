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
		kids,
		teacher,
		actionType,
		value,
		className,
	} = props;
	const [pen, setPen] = useState("");

	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'Listen'

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
				//playAudio
				let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
				playAudio(audioUrl)
			}
		}
	},[currentRecord])

	useEffect(() => {
		setIntervalControlClass("text-image", "zoom", 3000);
	}, []);

	return (
		<div className="page-wrapper">
			<div className="page-wrapper__content">
				<div className="listen-wrapper">
					<img
						alt={listen}
						src={listen}
						className="listen-img-16"
						data-aos="fade-right"
					/>
				</div>
				<div className="text-image-wrapper">
					<img
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						src={icon}
						alt={icon}
						className={`text-image ${className ? className : ""} `}
						onClick={(e) => {
							imgClickHandler(e,{
								actionType: 'fireEvent',
								eventName: imgClickEventName,
								eventData: {
									playAudio:value
								}
							})
							//onPushAction(e, actionType, value);
						}}
					/>
				</div>
				<div
					className="people-wrapper"
					data-aos="fade-up"
					data-aos-anchor-placement="bottom-bottom"
				>
					<img src={kids} alt={kids} className=" kids-page-16" />
					<img src={teacher} alt={teacher} className="teacher-page-16" />
				</div>
			</div>
		</div>
	);
};

export default React.memo(ListenAndSay);
