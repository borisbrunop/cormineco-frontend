import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Context } from "../../store/appContext";

export default function AdminDashboard() {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const handleLogOut = async () => {
		try {
			await actions.logout();
			history.push("/admin");
		} catch {
			console.log("failed log out");
		}
	};

	useEffect(() => {
		actions.authCheck();
	}, []);

	return (
		<div>
			<h1 className="m-5">loged in</h1>
			<Button onClick={e => handleLogOut()} variant="outlined" color="primary">
				log Out
			</Button>
		</div>
	);
}
