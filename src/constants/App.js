const pageCount = 34;

const getPageData = () => {
	const data = Array(pageCount).fill([]);
	data[1] = [].concat(...Array(4).fill(""));
	return data;
};

export const PAGE_DATA = getPageData();
