import React from "react";
import "./styles.scss";

const AppHeading = (props) => {
	const { headingText, isHideHeading, onClickHeading, isPointer } = props;
	const classPointer = isPointer ? "isPointer" : null;
	return (
		<div className="app-heading">
			{!isHideHeading ? (
				<span
					className={`app-heading__text ${classPointer}`}
					onClick={() => {
						onClickHeading?.();
					}}
				>
					{headingText}
				</span>
			) : null}
		</div>
	);
};

export default React.memo(AppHeading);
