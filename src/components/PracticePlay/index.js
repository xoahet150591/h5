import React, { useState } from "react";
import Container from "components/Container";
import BoxNext from "components/BoxNext/index";
import images from "assets/images/index";
import "./styles.scss";

const PracticePlay = (props) => {
	const [classImage, setClassImage] = useState("");

	const { currentPage, onPushAction, page6 } = props;
	const { imageKids, className } = props;

	var content = page6.map((item, index) => {
		window.addEventListener(`practicePlay_${item.image}`, () => {
			setClassImage("active");
		});
		if (item.active === false)
			return (
				<img
					className="item"
					// data-aos="fade-right"
					alt={item.image}
					src={item.image}
					onClick={(e) => {
						onPushAction(e, "play_audio", "audioFalse");
					}}
				/>
			);
		return (
			<img
				className={` item ${
					classImage || window[`classImage_${item.image}`]
						? classImage || window[`classImage_${item.image}`]
						: ""
				} `}
				alt={item.image}
				src={item.image}
				onClick={(e) => {
					onPushAction(
						e,
						"play_audio",
						"audioTrue",
						`practicePlay_${item.image}`
					);

					// , () => {
					//   window[`classImage_${item.image}`] = "avtive";
					//   console.log(window[`classImage_${item.image}`]);
					//   // setClassImage("active");
					//   try {
					//     setClassImage("active");
					//   } catch (error) {
					//     console.log(error);
					//   }
					// }

					setTimeout(() => {
						onPushAction(e, "play_audio", item.audio);
					}, 2000);
					setTimeout(() => {
						onPushAction(e, "play_audio", item.clap);
					}, 3000);
				}}
			/>
		);
	});

	const renderContent = () => {
		return (
			<div className={` page6-wrapper ${className ? className : ""} `}>
				<div className="page6-wrapper__content--topic">
					<img
						className="topic"
						src={images.icons.topic6}
						alt={images.icons.topic6}
					/>
				</div>
				<div className="page6-wrapper__content">
					<div className="page6-wrapper__content--answer">
						<div className="mid-item">
							<img
								className="item kids"
								// data-aos="fade-down"
								alt={imageKids}
								src={imageKids}
							/>
							<img
								className="item ans"
								alt={images.icons.answer6}
								src={images.icons.answer6}
							/>
						</div>
						<div className="star">{content}</div>
					</div>
				</div>
			</div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};
export default PracticePlay;
