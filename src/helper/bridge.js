import audios from "assets/audios";
import { setAudioActiveId, setIsLoading, setIsShowAnswer } from "redux/slice";
import { loadingConfig } from "constants/App";

const Bridge = (() => {
	let instance;
	function init() {
		const refAudios = {};
		const refTextImages = {};
		const prevRecordStack = new Set();
		let textImageClicked;
		return {
			baseData: {
				audios,
			},
			prevRecordStack: [],
			page: 0,
			pageCount: 0,
			step: 0,
			stepCount: 0,
			feelStatusType: null,
			getReady: ({ page, pageCount, step, stepCount }) => {
				instance.page = page;
				instance.pageCount = pageCount;
				instance.step = step;
				instance.stepCount = stepCount;
			},
			pushRecord: (audioId, dispatch, isEnd) => {
				// proccess play audio
				if (!isEnd) {
					console.log(audioId, "audioId");
					dispatch(setAudioActiveId(audioId));
					dispatch(setIsLoading(loadingConfig.local));
					// get textImage active
					for (const textImageId in instance.getRefTextImages()) {
						if (audioId === textImageId) {
							textImageClicked = instance.getRefTextImages()[textImageId];
						}
					}
					if (audioId === "cat") {
						dispatch(setAudioActiveId(audios[1].id));
					} else if (
						audioId === "dog" ||
						audioId === "bee" ||
						audioId === "chicken"
					) {
						dispatch(setAudioActiveId(audios[0].id));
					}
					textImageClicked?.classList.add("scaleImage");
					textImageClicked?.addEventListener("animationend", () => {
						textImageClicked?.classList.remove("scaleImage");
					});
					return;
				}
				// proccess audio end or pause
				else {
					prevRecordStack.add(audioId);
					instance.prevRecordStack = [...prevRecordStack].reverse();
					instance.step = instance.step + 1;
					if (
						audioId === "howAreYouToday" ||
						audioId === "whatIsYourName" ||
						audioId === "whereAreYouFrom" ||
						audioId === "whichOneIsCat"
					) {
						dispatch(setIsShowAnswer(true));
					}
					return;
				}
			},
			onRecordChange: (audioId, prevAudioId) => {},
			requestChangePage: (targetPage, targetStep) => {
				instance.page = targetPage;
			},
			onPageChange: (targetPage, currentStep) => {
				const step = instance.step;
				const stepCount = instance.stepCount;
				return new Promise((resolve, reject) => {
					if (step >= stepCount) {
						resolve();
						instance.step = 0;
						instance.stepCount = 0;
					} else {
						instance.page = instance.page - 1;
					}
				});
			},
			setRefAudios: (audioId, ref) => {
				refAudios[audioId] = ref;
			},
			getRefAudios: () => {
				return refAudios;
			},
			setRefTextImages: (textImageId, ref) => {
				refTextImages[textImageId] = ref;
			},
			getRefTextImages: () => {
				return refTextImages;
			},
		};
	}

	return {
		getInstance: function () {
			if (!instance) instance = init();
			return instance;
		},
	};
})();

const bridge = Bridge.getInstance();

export default bridge;
