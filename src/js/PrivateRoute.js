import React, { useContext } from "react";
import Route, { Redirect } from "react-router-dom";
import { Context } from "./store/appContext";

export default function PrivateRoute({ component: Component, ...rest }) {
	const { store, actions } = useContext(Context);

	return (
		<Route
			{...rest}
			render={props => {
				return store.adminUserAuth ? <Component {...props} /> : <Redirect to="/admin" />;
			}}
		/>
	);
}
