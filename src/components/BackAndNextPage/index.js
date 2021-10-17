/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import images from "assets/images";
import "./styles.scss";
import CursorContainer from "components/CursorContainer/index";

const BackAndNextPage = (props) => {
	const {
		isDisableNextIcon,
		isDisablePrevIcon,
		onClickChangePage,
		currentPage,
		valueCustomForPrevPage,
		valueCustomForNextPage,
	} = props;

	const styleCustom = isDisablePrevIcon
		? { justifyContent: "flex-end" }
		: isDisableNextIcon
		? { justifyContent: "flex-start" }
		: {};

	return (
		<div className="back-and-next-page" style={styleCustom}>
			{!isDisablePrevIcon ? (
				<CursorContainer
					onClick={onClickChangePage}
					actionType="changePage"
					value={{
						page:valueCustomForPrevPage || currentPage - 1,
						step:0
					}}
				>
					<img
						className="ic-prev-page"
						src={images.icons.icRowLeft}
						alt={images.icons.icRowLeft}
					/>
				</CursorContainer>
			) : null}

			{!isDisableNextIcon ? (
				<CursorContainer
					currentPage={currentPage}
					onClick={onClickChangePage}
					actionType="changePage"
					value={{
						page:valueCustomForNextPage || currentPage + 1,
						step:0
					}}
				>
					<img
						className="ic-next-page"
						src={images.icons.icRowRight}
						alt={images.icons.icRowRight}
						data-type="changePage"
					/>
				</CursorContainer>
			) : null}
		</div>
	);
};

export default React.memo(BackAndNextPage);
