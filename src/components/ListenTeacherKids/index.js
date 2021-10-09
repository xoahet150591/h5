import images from "assets/images/index";
import React, { useState } from "react";
import "./style.scss";
import Container from "components/Container";

const ListenTeacherKids = (props) => {
	const { currentPage, onPushAction } = props;
	const {imageText , imageKids ,imageObj, fileAudio ,className } = props;

    const [image, setImage] = useState("");
	const renderContent = () => {
		return (
			<div className={` page-wrapperM17 ${className ? className :  "" } ` }>
				<div className="page-wrapper__content">
					<img 
						src={images.icons.title17}
						alt={images.icons.title17}
						className="page-wrapper__content--box-empty1"
					/>
                    <div className="page-content">
                        <div className="people-kids">
                            <img 
                            src={imageKids} 
                            alt={imageKids} 
                            />
                        </div>
                        <div className="context-middle">
                            <div className="img-object">
                                <img 
                                src={imageObj} 
                                alt={imageObj} 
                                onClick={(e) => { onPushAction(e, "play_audio", fileAudio) ; setImage(imageText); }}
                                />
                            </div>
                            <div className={`img-text ${image === '' ? "" :  "show" } ` }>
                                <img 
                                src={image} 
                                alt={image} 
                                />
                        </div>
                    </div>
                    <div className="people-teacher">
                            <img 
                                src={images.icons.teacher}
                                alt={images.icons.teacher}
                                />
                        </div>
				</div>
			</div>
        </div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default ListenTeacherKids;
