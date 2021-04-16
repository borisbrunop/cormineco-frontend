import React, { Component, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../../styles/footer.scss";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../store/appContext";

const useStyles = makeStyles(theme => ({
	hidden: {
		display: "none"
	},
	contacto: {
		width: "100%",
		height: "200px",
		marginTop: "100px"
	},
	// positionContacto: {
	// 	position: "absolute",
	// 	bottom: "-1430px",
	// 	width: "100%",
	// 	height: "200px"
	// },
	rectangle: {
		[theme.breakpoints.up("sm")]: {
			height: "250px"
		}
	},
	titleContacto: {
		color: "#E5DAB8",
		fontSize: "35px",
		position: "absolute",
		top: "0px",
		right: "10px",
		[theme.breakpoints.up("sm")]: {
			fontSize: "50px",
			top: "-20px",
			right: "17px"
		}
	},
	pContacto: {
		color: "#E5DAB8",
		position: "absolute",
		top: "65px",
		left: "10px",
		marginRight: "10px",
		fontSize: "10px",
		textAlign: "center",
		[theme.breakpoints.up("sm")]: {
			top: "75px",
			fontSize: "14px"
		}
	},
	footerContacto: {
		color: "#E5DAB8",
		position: "absolute",
		bottom: "10px",
		left: "50%",
		transform: "translateX(-50%)",
		fontSize: "10px",
		textAlign: "center",
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			fontSize: "12px"
		}
	},
	social: {
		position: "absolute",
		bottom: "30px",
		left: "50%",
		transform: "translateX(-50%)",
		[theme.breakpoints.up("sm")]: {
			bottom: "45px"
		}
	},
	socialColor: {
		color: "#E5DAB8",
		[theme.breakpoints.up("sm")]: {
			fontSize: "30px"
		}
	}
}));

export const Footer = () => {
	const classes = useStyles();
	const location = useLocation();
	const { store, actions } = useContext(Context);

	return (
		<>
			{location.pathname === "/" ? (
				""
			) : (
				<>
					<div className={store.loadingCormineco ? classes.contacto : classes.hidden}>
						<div className={"positionContacto " + classes.rectangle}>
							<h3 className={classes.titleContacto}>CONTACTO</h3>
							<p className={classes.pContacto}>
								Dirección: Av Oeste. Esquina Principal A Conde. Edif Ambos Mundos. Piso 3. Local 04. Urb
								Catedral Caracas. Distrito Capital. Zona postal 1010.
							</p>
							<div className={classes.social}>
								<IconButton aria-label="mail">
									<MailOutlineIcon className={classes.socialColor} />
								</IconButton>
								<IconButton aria-label="instagram">
									<InstagramIcon className={classes.socialColor} />
								</IconButton>
								<IconButton aria-label="faceboock">
									<FacebookIcon className={classes.socialColor} />
								</IconButton>
							</div>
							<p className={classes.footerContacto}>Corporación Ecológica CORMINECO C.A. 2016</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};
