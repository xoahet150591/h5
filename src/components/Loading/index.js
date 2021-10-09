import React from "react";
import { Spin } from "antd";
import "./styles.scss";

const Loading = (props) => {
	const { isGlobalLoading } = props;
	return (
		<div className="loading">
			{isGlobalLoading ? (
				<div className="loading__global">
					<Spin size="large" />
				</div>
			) : (
				<div className="loading__not-global" />
			)}
		</div>
	);
};

export default React.memo(Loading);
