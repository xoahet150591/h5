/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-loop-func */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bridge from "helper/bridge";
import { setIsLoading } from "redux/slice";
import { loadingConfig } from "constants/App";

const Audios = (props) => {
	const dispatch = useDispatch();

	const audioActiveId = useSelector((state) => state.app.audioActiveId);

	const listenAudioPauseAndEndedEvent = (audioTag) => {
		audioTag.addEventListener("ended", () => {
			bridge.pushRecord(audioTag.id, dispatch, true);
			bridge.pushRecord("", dispatch);
			dispatch(setIsLoading(loadingConfig.unLoading));
		});
		// audioTag.addEventListener("pause", () => {
		// 	bridge.pushRecord(audioTag.id, dispatch, true);
		// 	bridge.pushRecord("", dispatch);
		// 	dispatch(setIsLoading(loadingConfig.unLoading));
		// });
	};

	useEffect(() => {
		let audioActiveTag;
		if (audioActiveId !== "") {
			if (bridge.getRefAudios()) {
				const refAudios = bridge.getRefAudios();
				for (const audioId in refAudios) {
					if (audioId === audioActiveId) {
						audioActiveTag = refAudios[audioId];
						audioActiveTag?.play();
						listenAudioPauseAndEndedEvent(audioActiveTag);
					}
				}
			}
		}
	}, [audioActiveId]);

	const listAudio = bridge.baseData.audios.map((item, index) => {
		const key = index;
		return (
			<div key={key}>
				<audio
					id={item.id}
					src={item.audio}
					ref={(ref) => {
						bridge.setRefAudios(item.id, ref);
					}}
				/>
			</div>
		);
	});
	return <div style={{ display: "none" }}>{listAudio}</div>;
};

export default React.memo(Audios);
