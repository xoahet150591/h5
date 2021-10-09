import React from "react";
import { setTimeOutAddClass } from "helper/setTimeOutControlClass";
import "./styles.scss";

const Conversation = (props) => {
	const {
		urlImageSpeaker,
		urlImagePeople,
		urlImageText,
		onPushAction,
		actionType,
		value,
	} = props;
	const {
		styleConversationWrapper,
		styleSpeakerAndTextWrapper,
		styleImageSpeaker,
		styleImagePeople,
		styleImageText,
		className,
	} = props;
	return (
		<div className="conversation" style={styleConversationWrapper}>
			<img
				src={urlImagePeople}
				alt={urlImagePeople}
				className={`conversation__people ${value}`}
				style={styleImagePeople}
				onClick={(e) => {
					onPushAction?.(e, actionType, value);
					setTimeOutAddClass(value, className, 1000);
				}}
			/>
			<div
				className="conversation__speaker-text"
				style={styleSpeakerAndTextWrapper}
			>
				{/* <img
					src={urlImageSpeaker}
					alt={urlImageSpeaker}
					className="conversation__speaker-text--speaker"
					style={styleImageSpeaker}
					onClick={(e) => {
						onPushAction?.(e, actionType, value);
						setTimeOutAddClass(value, className, 1000);
					}}
				/>
				<img
					src={urlImageText}
					alt={urlImageText}
					className={`conversation__speaker-text--text ${value}`}
					style={styleImageText}
				/> */}
			</div>
		</div>
	);
};

export default React.memo(Conversation);
