export const setTimeOutAddClass = (elements, className, time) => {
	const ele = document.querySelectorAll(`.${elements}`);
	setTimeout(() => {
		for (const e of ele) {
			e.classList.add(className);
		}
	}, time);
	for (const e of ele) {
		e.addEventListener("animationend", () => {
			e.classList.remove(className);
		});
	}
};

export const setIntervalControlClass = (elements, className, time) => {
	const ele = document.querySelectorAll(`.${elements}`);
	setInterval(() => {
		for (const e of ele) {
			e.classList.add(className);
		}
	}, time);

	for (const e of ele) {
		e.addEventListener("animationend", () => {
			e.classList.remove(className);
		});
	}
};
