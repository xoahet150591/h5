import { createSlice } from "@reduxjs/toolkit";
import images from "assets/images/index";

const initialState = {
	isLoading: false,
	isShowAnswer: false,
	isPlayRecord: false,
	currentPage: 0,
	currentStep: 0,
	urlBackground: images.background[0],
	isAudioEndOrPause: false,
	isShowNextIcon: false,
};

export const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			const { payload } = action;
			state.currentPage = payload;
		},
		setCurrentStep: (state, action) => {
			const { payload } = action;
			state.currentStep = payload;
		},
		setUrlBackground: (state, action) => {
			const { payload } = action;
			state.urlBackground = payload;
		},
		setIsLoading: (state, action) => {
			const { payload } = action;
			state.isLoading = payload;
		},
		setIsShowAnswer: (state, action) => {
			const { payload } = action;
			state.isShowAnswer = payload;
		},
		setIsPlayRecord: (state, action) => {
			const { payload } = action;
			state.isPlayRecord = payload;
		},
		setIsAudioEndOrPause: (state, action) => {
			const { payload } = action;
			state.isAudioEndOrPause = payload;
		},
		setIsShowNextIcon: (state, action) => {
			console.log(12121213);
			const { payload } = action;
			state.isShowNextIcon = payload;
		},
	},
});

export const {
	setIsLoading,
	setIsShowAnswer,
	setIsPlayRecord,
	setCurrentPage,
	setCurrentStep,
	setUrlBackground,
	setIsAudioEndOrPause,
	setIsShowNextIcon,
} = slice.actions;

export default slice.reducer;
