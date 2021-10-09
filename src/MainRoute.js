import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "constants/App";

const MainRoute = () => {
	const listRoute = routes.map((route) => {
		return (
			<Route
				key={route.id}
				path={route.path}
				exact={route.exact}
				component={route.component}
			/>
		);
	});
	return <Switch>{listRoute}</Switch>;
};

export default MainRoute;
