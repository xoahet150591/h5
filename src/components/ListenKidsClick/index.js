import images from "assets/images/index";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Container from "components/Container";
import Aos from "aos";
import "aos/dist/aos.css";

const ListenKidsClick = (props) => {
	const { currentPage, onPushAction } = props;
	const {imageSing , imageKids , fileAudio ,className } = props;

    const [image, setImage] = useState("");
	const [classAni, setClassAni] = useState("");
	useEffect(() => {
        Aos.init()
    } ,[])
	useEffect(() =>{
		setTimeout(() =>{
			setClassAni('')
		},1500)
	},[classAni])
	const renderContent = () => {
		return (
			<div className={` page-wrapper1 ${className ? className :  "" } ` }>
				<div className="page-wrapper__content">
					<img 
						data-aos="fade-right"
						src={images.icons.lisenPage2}
						alt={images.icons.lisenPage2}
						className="page-wrapper__content--box-empty1"
					/>
					<div className="page-content-des">
						<div className={`title-sing ${image === '' ? "" :  classAni } ` }>
							<img src={image} alt={image} />
						</div>
						<div className="people-kids">
							<img 
							data-aos="zoom-in"
							src={imageKids} 
							alt={imageKids} 
							onClick={(e) => { onPushAction(e, "play_audio", fileAudio) ; setImage(imageSing); setClassAni("show"); }}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default ListenKidsClick;
