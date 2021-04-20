import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
	textFieldDiv: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
}));

export const Admin = () => {
	const classes = useStyles();
	const [pass, setPass] = useState("");
	const { store, actions } = useContext(Context);
	const [msg, setMsg] = useState({});
	const history = useHistory();

	const handleAdmin = async password => {
		await actions.loginAdmin(password);
		if (store.adminUserAuth) {
			history.push("/adminD");
		}
	};

	return (
		<>
			<div className={classes.textFieldDiv}>
				<div className="flex-column">
					<div className="d-flex justify-content-center align-items-center my-4">
						<TextField
							onChange={e => {
								setPass(e.target.value);
							}}
							variant="outlined"
						/>
					</div>
					<div className="d-flex justify-content-center align-items-center my-4">
						<Button onClick={e => handleAdmin(pass)} variant="outlined" color="primary">
							Enter
						</Button>
					</div>
					<div className="d-flex justify-content-center align-items-center my-4">
						{store.msg && <Alert severity="error">{store.msg}</Alert>}
						{msg.success && <Alert severity="success">{msg.succes}</Alert>}
					</div>
				</div>
			</div>
		</>
	);
};
// import React from "react";

// export const Admin = () => (
// 	<div className="text-center mt-5">
// 		<h1>ADMIN</h1>
// 	</div>
// );
