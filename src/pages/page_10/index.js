import React from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";

const Page10 = (props) => {
	const { currentPage, onPushAction } = props;

	const renderContent = () => {
		return (
			<div className="page10-wrapper">
				<div className="page10-wrapper__content"></div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page10);
