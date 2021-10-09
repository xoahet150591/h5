import React, { useState, useEffect, useCallback } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

const Page27 = (props) => {
	const { currentPage, onPushAction } = props;

	const renderContent = () => {
		return (
			<div className="page27-wrapper">
				<img
					className="title-screen"
					src={images.icons.titlePage27}
					alt={images.icons.titlePage27}
				/>
				<div className="page27-wrapper__content">
					<div className="page27-wrapper__content--wrapper">
						<div className="text-wrapper">
							<img
								src={images.icons.iHaveAPencil}
								alt={images.icons.iHaveAPencil}
							/>
							<img
								src={images.icons.iHaveAMarker}
								alt={images.icons.iHaveAMarker}
							/>
							<img
								src={images.icons.iHaveCrayon}
								alt={images.icons.iHaveCrayon}
							/>
							<img src={images.icons.iHaveAPen} alt={images.icons.iHaveAPen} />
						</div>
						<img src={images.icons.icPencil} alt={images.icons.icPencil} />
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page27);
