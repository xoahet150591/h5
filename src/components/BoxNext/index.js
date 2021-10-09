import React from "react";
import "./styles.scss";

const BoxNext = (props) => {
	const {
		urlMainImage,
		urlArrowImage,
		classNameArrow,
		value,
		onPushAction,
		actionType,
	} = props;
	return (
		<div className="box-next">
			<img
				className="main-image"
				src={urlMainImage}
				alt={urlMainImage}
				onClick={(e) => {
					onPushAction?.(e, actionType, value);
				}}
			/>
			<img
				className={`arrow-image ${classNameArrow}`}
				src={urlArrowImage}
				alt={urlArrowImage}
				onClick={(e) => {
					onPushAction?.(e, actionType, value);
				}}
			/>
		</div>
	);
};

export default React.memo(BoxNext);
