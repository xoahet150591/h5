/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import images from "assets/images/index";
import "./styles.scss";
import bridge from "helper/bridge";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setIsLoading, setIsShowAnswer } from "redux/slice";
import { loadingConfig } from "constants/App";

const Modal = (props) => {
	const { type } = props;
	let modalWithType;
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClickNextPage = useCallback(() => {
		const currentPage = bridge.page;
		bridge.requestChangePage(currentPage + 1);
		const promiseChangePage = bridge.onPageChange(bridge.page, currentPage);
		promiseChangePage.then((res) => {
			dispatch(setIsLoading(loadingConfig.global));
			dispatch(setIsShowAnswer(false));
			setTimeout(() => {
				dispatch(setIsLoading(loadingConfig.unLoading));
				history.push(`/page/${bridge.page}`);
			}, 1000);
		});
	}, []);

	switch (type) {
		case "nextPage":
			modalWithType = (
				<div className="modal__next-page">
					<img
						src={images.nextPage}
						alt={images.nextPage}
						className="modal__next-page--icon-next"
						onClick={handleClickNextPage}
					/>
				</div>
			);
			break;
		default:
			break;
	}
	return <div className="modal">{modalWithType}</div>;
};

export default React.memo(Modal);
