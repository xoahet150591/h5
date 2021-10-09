import React from "react";
import "./styles.scss";

const BoxContent = (props) => {
	const {
		urlQuestionIcon,
		urlQuestionText,
		urlAnswer1,
		urlAnswer2,
		urlAnswer3,
		onPushAction,
	} = props;
	const {
		styleQuestionIcon,
		styleQuestionText,
		styleAnswer1,
		styleAnswer2,
		styleAnswer3,
	} = props;
	return (
		<div className="box-content">
			<div className="box-content__question">
				<img
					src={urlQuestionIcon}
					alt={urlQuestionIcon}
					style={styleQuestionIcon}
					className="box-content__question--icon"
				/>
				<img
					src={urlQuestionText}
					alt={urlQuestionText}
					style={styleQuestionText}
					className="box-content__question--text"
				/>
			</div>
			<div className="box-content__answer">
				<img
					src={urlAnswer1}
					alt={urlAnswer1}
					style={styleAnswer1}
					className="box-content__answer--1"
					onClick={(e) => onPushAction(e, "play_audio", "audioFalse")}
				/>
				<img
					src={urlAnswer2}
					alt={urlAnswer2}
					style={styleAnswer2}
					className="box-content__answer--2"
					onClick={(e) => onPushAction(e, "play_audio", "audioFalse")}
				/>
				<img
					src={urlAnswer3}
					alt={urlAnswer3}
					style={styleAnswer3}
					className="box-content__answer--3"
					onClick={(e) => onPushAction(e, "play_audio", "audioTrue")}
				/>
			</div>
		</div>
	);
};

export default React.memo(BoxContent);
