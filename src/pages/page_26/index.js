import React, { useState, useEffect, useCallback } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page26 = (props) => {
	const { currentPage, onPushAction } = props;

	const renderContent = () => {
		return (
			<div className="page26-wrapper">
				<div className="page26-wrapper__content">
					<div className="page26-wrapper__content--wrapper">
						<img
							src={images.icons.icDua}
							alt={images.icons.icDua}
							onClick={(e) => {
								e.target.classList.add("animation1");
								setTimeout(() => {
									onPushAction(e, "change_page", 27);
								}, 2000);
							}}
						/>
						<img
							src={images.icons.icDau}
							alt={images.icons.icDau}
							onClick={(e) => {
								alert("đang xử lý");
							}}
						/>
						<img
							src={images.icons.icNho}
							alt={images.icons.icNho}
							onClick={(e) => {
								alert("đang xử lý");
							}}
						/>
						<img
							src={images.icons.icCam}
							alt={images.icons.icCam}
							onClick={(e) => {
								alert("đang xử lý");
							}}
						/>
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page26);
