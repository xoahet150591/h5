import React, { useCallback, useEffect, useMemo } from "react";
import Container from "components/Container";
import images from "assets/images";
import "./styles.scss";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";
import { useDispatch, useSelector } from "react-redux";
import { configPage10 } from "redux/slice";


const Page10 = (props) => {
	const {  onPushAction } = props;

	const dispatch = useDispatch();

	useEffect(() => {
		setIntervalControlClass("star", "zoom", 2000);
	}, []);

	const page10 = useSelector((state) => state.app.page10);

	const handleChangeLocationTho = useCallback(
		(e, x, y) => {
			e.target.classList.add("none");
			dispatch(configPage10({ locationX: x, locationY: y }));
		},
		[dispatch]
	);


	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'Page10'

	const imgClickHandler = (e,op)=>{
		onPushAction(e,op.actionType,op)
	}

	useEffect(() => {
		const tho = document.querySelector(".tho");
		if (page10.locationX === "0%" && page10.locationY === "-6%") {
			tho?.classList.add("location1");
		} else if (page10.locationX === "40%" && page10.locationY === "28%") {
			tho?.classList.add("location2");
		} else if (page10.locationX === "0%" && page10.locationY === "62%") {
			tho?.classList.add("location3");
		} else if (page10.locationX === "52%" && page10.locationY === "95%") {
			tho?.classList.add("location4");
		}
	}, [page10.locationX, page10.locationY]);

	const renderContent = () => {
		return (
			<div className="page10-wrapper">
				<img
					className="title-screen"
					src={images.icons.icMiniGame04}
					alt={images.icons.icMiniGame04}
				/>
				<div className="page10-wrapper__content">
					<div className="page10-wrapper__content--wrapper">
						<img
							className="line-zic-zac"
							src={images.icons.lineZicZac}
							alt={images.icons.lineZicZac}
						/>
						<img
							className={`tho`}
							src={images.icons.tho}
							alt={images.icons.tho}
							style={{ top: page10.locationX, left: page10.locationY }}
						/>
						<img
							className="ocSen"
							src={images.icons.ocSen}
							alt={images.icons.ocSen}
						/>
						<img
							className="ech"
							src={images.icons.ech}
							alt={images.icons.ech}
						/>
						<img
							className="rua"
							src={images.icons.rua}
							alt={images.icons.rua}
						/>
						<img
							className="star star1"
							src={images.icons.star1}
							alt={images.icons.star1}
							data-id="star1"
							onClick={(e) => {
								handleChangeLocationTho(e, "0%", "-6%");
								setTimeout(() => {
									imgClickHandler(e,{
										actionType: 'changePage',
										eventName: imgClickEventName,
										eventData: {
											page:11,
											step:0
										}
									})
									//onPushAction(e, "change_page", 11);
								}, 2500);
							}}
						/>
						<img
							className="star star2"
							src={images.icons.star2}
							alt={images.icons.star2}
							data-id="star2"
							onClick={(e) => {
								setTimeout(() => {
									//onPushAction(e, "change_page", 12);
									imgClickHandler(e,{
										actionType: 'changePage',
										eventName: imgClickEventName,
										eventData: {
											page:12,
											step:0
										}
									})
								}, 2500);
								handleChangeLocationTho(e, "40%", "28%");
							}}
						/>
						<img
							className="star star3"
							src={images.icons.star3}
							alt={images.icons.star3}
							data-id="star3"
							onClick={(e) => {
								setTimeout(() => {
									//onPushAction(e, "change_page", 13);
									imgClickHandler(e,{
										actionType: 'changePage',
										eventName: imgClickEventName,
										eventData: {
											page:13,
											step:0
										}
									})
								}, 2500);
								handleChangeLocationTho(e, "0%", "62%");
							}}
						/>
						<img
							className="star star4"
							src={images.icons.star4}
							alt={images.icons.star4}
							data-id="star4"
							onClick={(e) => {
								setTimeout(() => {
									//onPushAction(e, "change_page", 14);
									imgClickHandler(e,{
										actionType: 'changePage',
										eventName: imgClickEventName,
										eventData: {
											page:14,
											step:0
										}
									})
								}, 2500);
								handleChangeLocationTho(e, "52%", "95%");
							}}
						/>
					</div>
				</div>
			</div>
		);
	};

	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default React.memo(Page10);
