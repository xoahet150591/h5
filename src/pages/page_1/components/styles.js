const widthClient = window.innerWidth;
const heightClient = window.innerHeight;
let styles;
styles = {
	styleConversationWrapper: {
		position: "relative",
		width: `${widthClient * 0.4}px`,
		height: `${heightClient * 0.4}px`,
	},
	styleSpeakerAndTextWrapper: {
		display: "flex",
		alignItems: "center",
		position: "absolute",
		top: "10px",
		left: `${widthClient * 0.08}px`,
	},
	styleImagePeople: {
		width: "100%",
		height: "95%",
		objectFit: "contain",
		cursor: "pointer",
	},
	styleImageSpeaker: {
		width: `${widthClient * 0.07}px`,
		height: `${widthClient * 0.07}px`,
		objectFit: "contain",
		cursor: "pointer",
	},
	styleImageText: {
		width: `${widthClient * 0.14}px`,
		height: `${widthClient * 0.07}px`,
		objectFit: "contain",
	},
};

if (widthClient >= 500) {
	styles = {
		styleConversationWrapper: {
			position: "relative",
			width: `${widthClient * 0.4}px`,
			height: `${heightClient * 0.4}px`,
		},
		styleSpeakerAndTextWrapper: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "10px",
			left: `${widthClient * 0.08}px`,
		},
		styleImagePeople: {
			width: "100%",
			height: "100%",
			objectFit: "contain",
		},
		styleImageSpeaker: {
			width: `${widthClient * 0.07}px`,
			height: `${widthClient * 0.07}px`,
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageText: {
			width: `${widthClient * 0.14}px`,
			height: `${widthClient * 0.07}px`,
			objectFit: "contain",
		},
	};
}
if (widthClient >= 600) {
	styles = {
		styleConversationWrapper: {
			position: "relative",
			width: `${widthClient * 0.4}px`,
			height: `${heightClient * 0.4}px`,
		},
		styleSpeakerAndTextWrapper: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "10px",
			left: `${widthClient * 0.09}px`,
		},
		styleImagePeople: {
			width: "100%",
			height: "100%",
			objectFit: "contain",
		},
		styleImageSpeaker: {
			width: `${widthClient * 0.06}px`,
			height: `${widthClient * 0.06}px`,
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageText: {
			width: `${widthClient * 0.13}px`,
			height: `${widthClient * 0.06}px`,
			objectFit: "contain",
		},
	};
}

if (widthClient >= 700) {
	styles = {
		styleConversationWrapper: {
			position: "relative",
			width: `${widthClient * 0.4}px`,
			height: `${heightClient * 0.4}px`,
		},
		styleSpeakerAndTextWrapper: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "10px",
			left: `${widthClient * 0.1}px`,
		},
		styleImagePeople: {
			width: "100%",
			height: "100%",
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageSpeaker: {
			width: `${widthClient * 0.06}px`,
			height: `${widthClient * 0.06}px`,
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageText: {
			width: `${widthClient * 0.1}px`,
			height: `${widthClient * 0.05}px`,
			objectFit: "contain",
		},
	};
}
if (widthClient >= 800) {
	styles = {
		styleConversationWrapper: {
			position: "relative",
			width: `${widthClient * 0.25}px`,
			height: `${heightClient * 0.6}px`,
		},
		styleSpeakerAndTextWrapper: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "10px",
			left: `${widthClient * 0.03}px`,
		},
		styleImagePeople: {
			width: "100%",
			height: "100%",
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageSpeaker: {
			width: `${widthClient * 0.05}px`,
			height: `${widthClient * 0.05}px`,
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageText: {
			width: `${widthClient * 0.12}px`,
			height: `${widthClient * 0.09}px`,
			objectFit: "contain",
		},
	};
}
if (widthClient >= 900) {
	styles = {
		styleConversationWrapper: {
			position: "relative",
			width: `${widthClient * 0.25}px`,
			height: `${heightClient * 0.6}px`,
		},
		styleSpeakerAndTextWrapper: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "10px",
			left: `${widthClient * 0.03}px`,
		},
		styleImagePeople: {
			width: "100%",
			height: "100%",
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageSpeaker: {
			width: `${widthClient * 0.05}px`,
			height: `${widthClient * 0.05}px`,
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageText: {
			width: `${widthClient * 0.11}px`,
			height: `${widthClient * 0.07}px`,
			objectFit: "contain",
		},
	};
}

if (widthClient >= 1000) {
	styles = {
		styleConversationWrapper: {
			position: "relative",
			width: `250px`,
			height: `${heightClient * 0.6}px`,
		},
		styleSpeakerAndTextWrapper: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "10px",
			left: `${1000 * 0.03}px`,
		},
		styleImagePeople: {
			width: "100%",
			height: "100%",
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageSpeaker: {
			width: `${1000 * 0.05}px`,
			height: `${1000 * 0.05}px`,
			objectFit: "contain",
			cursor: "pointer",
		},
		styleImageText: {
			width: `${1000 * 0.11}px`,
			height: `${1000 * 0.07}px`,
			objectFit: "contain",
		},
	};
}

export default styles;
