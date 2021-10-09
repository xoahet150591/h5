import React from "react";
import "./styles.scss";
import Pages from "pages";

const CursorContainer = (props) => {
	const { animation, onClick, actionType, value } = props;
	console.log(actionType, "-", value);
	return (
		<div
			onClick={(e) => {
				onClick?.(e, actionType, value);
			}}
			className={`cursor-container ${animation}`}
		>
			{props.children}
		</div>
	);
};

export default React.memo(CursorContainer);
