/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import images from "assets/images/index";
import "./styles.scss";
import Container from "components/Container/index";
import CursorContainer from "components/CursorContainer/index";
import ButtonBackgroundMusic from "components/ButtonBackgroundMusic/index";

import audios from "assets/audios";
import {
	setCurrentPage,
	setCurrentStep,
	setIsAudioEndOrPause,
	setIsPlayRecord,
	setIsShowNextIcon,
	setUrlBackground,
} from "redux/slice";
import { useSelector, useDispatch } from "react-redux";
import Pages from "pages";
import BackAndNextPage from "components/BackAndNextPage";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";
import { PAGE_DATA } from "constants/App";

const Home = () => {
	const currentPage = useSelector((state) => state.app.currentPage);
	const currentStep = useSelector((state) => state.app.currentStep);
	const urlBackground = useSelector((state) => state.app.urlBackground);
	const [isShowPlayButton, setIsShowPlayButton] = useState(true);

	const handleClickPause = () => {
		setIsShowPlayButton(false);
	};
	const handleClickPlay = () => {
		setIsShowPlayButton(true);
	};

	const dispatch = useDispatch();

	const isPlayRecord = useSelector((state) => state.app.isPlayRecord);

	const isAudioEndOrPause = useSelector((state) => state.app.isAudioEndOrPause);

	useEffect(() => {
		if (isAudioEndOrPause === "end" || isAudioEndOrPause === "pause") {
			let prevStack = window.bridge._prevRecordStack;
			let tmpArrDulpPlayed = new Set();
			for (const v of prevStack) {
				tmpArrDulpPlayed.add(v.id);
			}
			tmpArrDulpPlayed = [...tmpArrDulpPlayed];
			if (tmpArrDulpPlayed.length >= 4) {
				dispatch(setIsShowNextIcon(true));
			}
		}
	}, [isAudioEndOrPause, currentPage]);

	useEffect(() => {
		// add animation
		setIntervalControlClass("image-start-unit", "scale", 3000);

		// set object global
		const initBJY = () => {
			window.bridge = window.BJYBridge.getInstance({
				onPageChange: (page, step) => {
					return new Promise((resolve) => {
						let pageData = PAGE_DATA[page];
						if (pageData) {
							dispatch(setCurrentPage(page));
							dispatch(setUrlBackground(images.background[page]));
							dispatch(setCurrentStep(0));
							resolve(pageData.length);
						} else {
							console.error = "Error: Illegal Page";
						}
					});
				},
				onRecordChange: (record, prevRecord) => {
					console.log(record, "=====> record <=====");
					if (
						record &&
						record[record.length - 1] &&
						record[record.length - 1].type === "play_audio"
					) {
						const audio = new Audio(record[record.length - 1].url);
						audio.id = record[record.length - 1].id;
						audio.play();
						audio.addEventListener(
							"ended",
							() => {
								dispatch(setIsAudioEndOrPause("end"));
							},
							[]
						);
						audio.addEventListener(
							"pause",
							() => {
								dispatch(setIsAudioEndOrPause("pause"));
							},
							[]
						);
						window.bridge._prevRecordStack.push(audio);
						window.bridge.popRecord();
						dispatch(setIsPlayRecord(false));
					}
				},
			});
			new Promise((resolve) => {
				var initData = {
					page: currentPage,
					step: currentStep,
				};
				resolve(initData);
			}).then((initData) => {
				const page = initData.page;
				const step = initData.step;
				window.bridge.getReady({
					page: page,
					step: step,
					pageCount: PAGE_DATA.length,
					stepCount: PAGE_DATA[page].length,
				});
			});
		};
		initBJY();

		const audiosPrevPlaying = window.bridge?._prevRecordStack;
		if (audiosPrevPlaying.length > 0) {
			for (const v of audiosPrevPlaying) {
				v.pause();
			}
		}

		// play audio background
		switch (currentPage) {
			case 0:
				window.bridge.pushRecord({
					type: "play_audio",
					url: audios.find((item) => item.id === "audioBg").audio,
					id: "audioBg",
				});
				dispatch(setIsPlayRecord(true));
				dispatch(setCurrentStep(currentStep + 1));
				break;
			case 24:
				for (const v of window.bridge?._prevRecordStack) {
					v.pause();
				}
				window.bridge.pushRecord({
					type: "play_audio",
					url: audios.find((item) => item.id === "page24_voice").audio,
					id: "page24_voice",
				});
				dispatch(setIsPlayRecord(true));
				dispatch(setCurrentStep(currentStep + 1));
				break;
			case 25:
				window.bridge.pushRecord({
					type: "play_audio",
					url: audios.find((item) => item.id === "page25_voice").audio,
					id: "page25_voice",
				});
				dispatch(setIsPlayRecord(true));
				dispatch(setCurrentStep(currentStep + 1));
				break;
			default:
				dispatch(setIsPlayRecord(false));
				break;
		}
	}, [currentPage, dispatch]);

	useEffect(() => {
		if (isPlayRecord) {
			const recordStack = window.bridge?._recordStack;
			window.bridge?._onRecordChange?.(recordStack);
		}
	}, [isPlayRecord]);

	const handleClick = useCallback(
		(e, actionType, value) => {
			switch (actionType) {
				case "change_page":
					let targetPage = value;
					window.bridge.requestChangePage(targetPage);
					const PromiseChangePage = window.bridge?._onPageChange(targetPage);
					PromiseChangePage.then((res) => {
						if (res <= PAGE_DATA[targetPage].length) {
							const audioPlaying =
								window.bridge._prevRecordStack[
									window.bridge._prevRecordStack.length - 1
								];
							audioPlaying?.pause();
						}
						window.bridge._prevRecordStack = [];
					});
					break;
				case "play_audio":
					const audioPlaying =
						window.bridge._prevRecordStack[
							window.bridge._prevRecordStack.length - 1
						];
					if (audioPlaying) {
						audioPlaying?.pause();
					}
					let targetAudio = value;
					window.bridge.pushRecord({
						type: "play_audio",
						url: audios.find((item) => item.id === targetAudio)?.audio,
						id: targetAudio,
					});
					dispatch(setIsPlayRecord(true));
					dispatch(setCurrentStep(currentStep + 1));
					break;
				default:
					break;
			}
		},
		[currentPage]
	);

	const renderContent = () => {
		return (
			<div className="back-to-school">
				<CursorContainer
					animation="scale"
					onClick={handleClick}
					actionType="change_page"
					value={currentPage + 1}
				>
					<img
						src={images.common.unit2}
						alt={images.common.unit2}
						className="image-start-unit"
					/>
				</CursorContainer>
				<BackAndNextPage
					isDisablePrevIcon
					currentPage={currentPage}
					onClickChangePage={handleClick}
				/>
				<ButtonBackgroundMusic
					audioPlaying={
						window.bridge?._prevRecordStack?.[
							window.bridge._prevRecordStack.length - 1
						]
					}
					handleClickPause={handleClickPause}
					handleClickPlay={handleClickPlay}
					isShowPlayButton={isShowPlayButton}
				/>
			</div>
		);
	};

	return (
		<div className="home">
			<Container
				content={
					currentPage > 0 ? (
						<Pages
							onPushAction={handleClick}
							currentPage={currentPage}
							audioPlaying={
								window.bridge?._prevRecordStack?.[
									window.bridge._prevRecordStack.length - 1
								]
							}
						/>
					) : (
						renderContent()
					)
				}
				urlBackground={urlBackground}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default React.memo(Home);
