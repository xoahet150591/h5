import images from "assets/images/index";
import React, { useState } from "react";
import "./style.scss";
import Container from "components/Container";

const ListenKidsClick = (props) => {
	const { currentPage, onPushAction } = props;
	const {imageSing , imageKids , fileAudio ,className } = props;

    const [image, setImage] = useState("");
	const renderContent = () => {
		return (
			<div className={` page-wrapper1 ${className ? className :  "" } ` }>
				<div className="page-wrapper__content">
					<img 
						src={images.icons.lisenPage2}
						alt={images.icons.lisenPage2}
						className="page-wrapper__content--box-empty1"
					/>
					<div className={`title-sing ${image === '' ? "" :  "show" } ` }>
						<img src={image} alt={image} />
					</div>
					<div className="people-kids">
						<img 
						src={imageKids} 
						alt={imageKids} 
						onClick={(e) => { onPushAction(e, "play_audio", fileAudio) ; setImage(imageSing); }}
						/>
					</div>
				</div>
			</div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default ListenKidsClick;
