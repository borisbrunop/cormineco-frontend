import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//AQUI ESSSSS------------------------------------------------

const useStyles = makeStyles(theme => ({
	sticky: {
		position: "sticky",
		top: "60px"
	},
	div: {
		height: "100vh"
	},
	svg: {
		cursor: "pointer"
	},
	menu: {
		[theme.breakpoints.up("sm")]: {
			marginTop: "10px"
		}
	},
	ambiente: {
		position: "absolute",
		bottom: "-130px",
		left: "-250px",
		zIndex: "-2",
		width: "545px",
		height: "350px",
		[theme.breakpoints.up("md")]: {
			zIndex: "0",
			display: "none"
		},
		[theme.breakpoints.up("sm")]: {
			width: "580px",
			height: "385px",
			left: "-75px"
		}
	},
	ambienteLg: {
		position: "absolute",
		bottom: "-349px",
		left: "-410px",
		zIndex: "0",
		width: "855px",
		height: "520px",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	circleCormineco: {
		width: "350px",
		height: "350px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "absolute",
		bottom: "-350px",
		left: "-50px",
		[theme.breakpoints.up("md")]: {
			display: "none"
		},
		[theme.breakpoints.up("sm")]: {
			width: "510px",
			height: "510px",
			bottom: "-510px"
		}
	},
	sqCormineco: {
		width: "400px",
		height: "250px",
		background: "rgba(225, 173, 98, 0.5)",
		position: "absolute",
		top: "55px",
		left: "-30px",
		zIndex: "-1",
		[theme.breakpoints.up("md")]: {
			display: "none"
		},
		[theme.breakpoints.up("sm")]: {
			width: "628px",
			height: "378px"
		}
	},
	circleCorminecoLg: {
		width: "900px",
		height: "600px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sqCorminecoLg: {
		width: "100%",
		height: "450px",
		position: "absolute",
		bottom: "-460px",
		left: "0px",
		zIndex: "-1",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
			// width: "628px !important",
			// height: "388px !important"
		}
	},
	containerLg: {
		height: "100%",
		width: "100%"
	},
	titleCorminecoLg: {
		color: "#006666",
		fontSize: "50px",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	pCorminecoLg: {
		color: "#006666",
		fontSize: "18px",
		display: "none",
		marginTop: "30px",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	infoCorminecoLg: {
		color: "#006666",
		fontSize: "17px",
		marginRight: "30px",
		cursor: "pointer",
		display: "none",
		marginTop: "145px",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	titleCormineco: {
		color: "#006666",
		marginTop: "75px",
		marginLeft: "60px",
		fontSize: "35px",
		[theme.breakpoints.up("sm")]: {
			fontSize: "50px",
			marginTop: "68px",
			marginLeft: "100px"
		}
	},
	pCormineco: {
		color: "#E1A754",
		marginTop: "45px",
		marginLeft: "60px",
		fontSize: "12px",
		[theme.breakpoints.up("sm")]: {
			fontSize: "18px",
			marginTop: "23px",
			marginLeft: "70px",
			marginRight: "20px"
		}
	},
	infoCormineco: {
		color: "#E1A754",
		marginTop: "45px",
		marginLeft: "60px",
		fontSize: "12px",
		cursor: "pointer",
		[theme.breakpoints.up("sm")]: {
			fontSize: "17px",
			marginTop: "125px",
			marginLeft: "70px"
		}
	},
	residuos: {
		width: "490px",
		height: "403px",
		position: "relative",
		[theme.breakpoints.up("sm")]: {
			width: "560px",
			height: "473px"
		},
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	residuosLg: {
		width: "760px",
		height: "630px",
		display: "none",
		position: "relative",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	resLg: {
		position: "relative",
		width: "100%",
		right: "0px",
		top: "60px",
		display: "none",
		zIndex: "-1",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	resSqrLg: {
		position: "absolute",
		width: "485px",
		height: "905px",
		bottom: "-1270px",
		right: "0px",
		overflow: "hidden",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	res: {
		position: "relative",
		right: "-110px",
		top: "-99px",
		zIndex: "-2",
		[theme.breakpoints.up("md")]: {
			display: "none"
		},
		[theme.breakpoints.up("sm")]: {
			right: "-90px",
			top: "0px"
		}
	},
	resSqr: {
		width: "360px",
		position: "absolute",
		height: "570px",
		bottom: "-820px",
		right: "0px",
		zIndex: "-2",
		overflow: "hidden",
		[theme.breakpoints.up("sm")]: {
			width: "550px",
			height: "905px",
			bottom: "-1270px"
		},
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	circleCompromiso: {
		width: "340px",
		height: "340px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		zIndex: "1",
		top: "-200px",
		right: "-75px",
		position: "relative",
		[theme.breakpoints.up("sm")]: {
			top: "-124px",
			right: "-98px",
			width: "500px",
			height: "500px"
		},
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	sqCompromiso: {
		width: "330px",
		height: "340px",
		background: "rgba(161, 178, 178, 0.5)",
		position: "absolute",
		top: "118px",
		right: "0",
		zIndex: "-3",
		[theme.breakpoints.up("md")]: {
			display: "none"
			// width: "628px !important",
			// height: "388px !important"
		},
		[theme.breakpoints.up("sm")]: {
			width: "550px",
			height: "530px",
			top: "237px"
		}
	},
	sqCompromisoLg: {
		width: "100%",
		height: "450px",
		position: "absolute",
		bottom: "-1185px",
		right: "0",
		zIndex: "-3",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
			// width: "628px !important",
			// height: "388px !important"
		}
	},
	titleCompromisoLg: {
		color: "#005151",
		fontSize: "48px",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	pCompromisoLg: {
		color: "#5C5C42",
		fontSize: "18px",
		textAlign: "left",
		display: "none",
		marginTop: "30px",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	infoCompromisoLg: {
		color: "#5C5C42",
		fontSize: "18px",
		marginTop: "160px",
		cursor: "pointer",
		textAlign: "right",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	titleCompromiso: {
		color: "#212529",
		marginTop: "50px",
		marginLeft: "48px",
		fontSize: "35px",
		[theme.breakpoints.up("sm")]: {
			marginTop: "63px",
			marginLeft: "90px",
			fontSize: "48px"
		}
	},
	pCompromiso: {
		color: "#5C5C42",
		marginTop: "20px",
		marginRight: "65px",
		fontSize: "12px",
		textAlign: "right",
		[theme.breakpoints.up("sm")]: {
			marginTop: "20px",
			fontSize: "18px",
			marginLeft: "27px"
		}
	},
	infoCompromiso: {
		color: "#5C5C42",
		marginTop: "25px",
		marginRight: "65px",
		fontSize: "12px",
		cursor: "pointer",
		textAlign: "right",
		[theme.breakpoints.up("sm")]: {
			marginTop: "95px",
			fontSize: "18px"
		}
	},
	suelos: {
		position: "absolute",
		bottom: "-965px",
		left: "-210px",
		width: "450px",
		height: "300px",
		zIndex: "-4",
		[theme.breakpoints.up("md")]: {
			display: "none"
		},
		[theme.breakpoints.up("sm")]: {
			bottom: "-1550px",
			left: "-193px",
			width: "650px",
			height: "500px"
		}
	},
	suelosLg: {
		position: "absolute",
		bottom: "-1770px",
		left: "-340px",
		width: "800px",
		height: "630px",
		zIndex: "-3",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	circleSuelos: {
		width: "400px",
		height: "400px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "absolute",
		bottom: "-1250px",
		left: "-100px",
		[theme.breakpoints.up("sm")]: {
			bottom: "-1980px",
			left: "-29px",
			width: "550px",
			height: "550px"
		},
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	sqSuelos: {
		width: "400px",
		height: "250px",
		background: "rgba(92, 92, 66, 0.5)",
		position: "absolute",
		top: "55px",
		left: "20px",
		zIndex: "-1",
		[theme.breakpoints.up("sm")]: {
			position: "absolute",
			width: "570px",
			height: "400px"
		},
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	sqSuelosLg: {
		width: "100%",
		height: "450px",
		background: "rgba(92, 92, 66, 0.5)",
		position: "absolute",
		bottom: "-1861px",
		left: "0px",
		zIndex: "-4",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	titleSuelosLg: {
		color: "#5C5C42",
		fontSize: "50px",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	pSuelosLg: {
		color: "#006666",
		fontSize: "18px",
		display: "none",
		marginTop: "30px",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	infoSuelosLg: {
		color: "#006666",
		marginTop: "145px",
		fontSize: "18px",
		cursor: "pointer",
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	titleSuelos: {
		color: "#5C5C42",
		marginTop: "65px",
		marginLeft: "110px",
		fontSize: "35px",
		[theme.breakpoints.up("sm")]: {
			marginTop: "60px",
			marginLeft: "120px",
			fontSize: "50px"
		}
	},
	pSuelos: {
		color: "#006666",
		marginTop: "35px",
		marginLeft: "110px",
		marginRight: "10px",
		fontSize: "12px",
		[theme.breakpoints.up("sm")]: {
			marginTop: "30px",
			marginLeft: "55px",
			marginRight: "20px",
			fontSize: "18px"
		}
	},
	infoSuelos: {
		color: "#006666",
		marginTop: "35px",
		marginLeft: "110px",
		fontSize: "12px",
		cursor: "pointer",
		[theme.breakpoints.up("sm")]: {
			marginTop: "85px",
			marginLeft: "55px",
			fontSize: "18px"
		}
	},
	contacto: {
		width: "100%",
		height: "200px",
		position: "absolute",
		bottom: "-1530px",
		[theme.breakpoints.up("sm")]: {
			bottom: "-2335px"
		}
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

export default useStyles;
