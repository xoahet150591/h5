import React, { useState, useEffect } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page25 = (props) => {
	const { currentPage, onPushAction } = props;

	useEffect(() => {
		setIntervalControlClass("icon-sing", "zoom", 2000);
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
				className="table__item"
				data-id={audio}
				onClick={(e) => {
					const audioId = e.target.dataset.id;
					onPushAction(e, "play_audio", audioId);
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
				onClick={(e) => {
					console.log(e, "eeeee");
					// onPushAction(e, "play_audio", audio);
				}}
			/>
		);
	});

	const renderContent = () => {
		return (
			<div className="page25-wrapper">
				<div className="page25-wrapper__content">
					<div className="page25-wrapper__content--wrapper">
						<div className="table">{listImage}</div>
						<div className="text-wrapper">{listText}</div>
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page25);
