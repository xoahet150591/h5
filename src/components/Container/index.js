import React, { useRef } from "react";
import "./styles.scss";

const Container = (props) => {
	const refImage = useRef();

	const { currentPage } = props;

	const { urlBackground, content } = props;

	return (
		<div className="container">
			<div className={`content`}>
				<img
					src={urlBackground}
					alt={urlBackground}
					className="content__image"
					ref={refImage}
				/>
				<div className={`page page${currentPage}`}>
					<div className={`page__content page${currentPage}__content`}>
						{content}
					</div>
				</div>
			</div>
		</div>
	);
};
export default React.memo(Container);
