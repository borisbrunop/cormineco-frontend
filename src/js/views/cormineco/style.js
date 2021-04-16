import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const custome = createMuiTheme({
	breakpoints: {
		values: {
			smCellphone: 0,
			lgCellphone: 375,
			tablet: 600,
			pc: 960,
			lgPc: 1280,
			xlPc: 1920
		}
	}
});

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	corminecoTitle: {
		marginTop: "130px",
		height: "60px",
		color: "#2B7D79",
		fontSize: "50px",
		fontWeight: "40"
	},
	corminecoDiv: {
		width: "100%",
		height: "100%"
	},
	topImg: {
		width: "100%",
		position: "absolute",
		bottom: "-160px",
		zIndex: "-1",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			bottom: "-165px"
		}
	},
	infoCorminecoDiv: {
		overflow: "hidden",
		width: "100%",
		height: "550px"
	},
	sqCormineco: {
		width: "100%",
		height: "100%",
		position: "relative",
		top: "65px",
		left: "0px",
		zIndex: "1",
		background: "rgba(233, 225, 203, 0.5)",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			top: "60px"
		}
	},
	cicleOverflow: {
		height: "100%",
		width: "600px"
	},
	circleCormineco: {
		width: "500px",
		height: "500px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		zIndex: "2",
		marginTop: "-60px"
	},
	topInfoCorminecoDiv: {
		width: "100%",
		marginTop: "72px",
		marginLeft: "75px",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			marginTop: "60px",
			marginLeft: "95px"
		}
	},
	topInfoCormineco: {
		color: "#09233A",
		fontSize: "14px",
		textAlign: "justify",
		marginRight: "145px",
		fontWeight: "500",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			marginRight: "190px"
		}
	},
	InfoCorminecoDiv: {
		width: "100%",
		marginTop: "15px",
		marginLeft: "75px",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			marginLeft: "95px",
			marginTop: "15px"
		}
	},
	InfoCormineco: {
		color: "#006666",
		fontSize: "14px",
		textAlign: "justify",
		marginRight: "145px",
		marginTop: "25px",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			marginRight: "190px",
			marginTop: "20px"
		}
	},
	BottomInfoCorminecoDiv: {
		width: "100%",
		height: "650px",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center"
	},
	bottomCicleOverflow: {
		height: "100%",
		width: "600px",
		display: "flex",
		justifyContent: "center"
	},
	bottomSqCormineco: {
		left: "0px",
		zIndex: "1",
		backgroundColor: "#F1EDE2",
		width: "100%",
		height: "100%"
	},
	BottomCircleCormineco: {
		width: "450px",
		height: "450px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		zIndex: "2",
		marginTop: "42px"
	},
	bottomImg: {
		width: "120%",
		position: "relative",
		bottom: "-30px",
		left: "-40px"
	},
	BottomInfoCormineco: {
		color: "#006666",
		fontSize: "14px",
		textAlign: "justify",
		marginRight: "50px",
		marginLeft: "50px",
		marginTop: "95px",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			marginTop: "20px"
		}
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	headers: {
		width: "100%",
		marginLeft: "10px",
		color: "#2B7D79"
	},
	visionHeader: {
		backgroundColor: "rgba(233, 225, 203)",
		width: "100%",
		height: "60px",
		cursor: "pointer"
	},
	visionDiv: {
		width: "100%",
		height: "505px",
		backgroundColor: "rgba(233, 225, 203)",
		overflow: "hidden"
	},
	circleVision: {
		width: "700px",
		height: "600px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "relative",
		top: "0px",
		right: "0px"
	},
	visionInfo: {
		color: "#006666",
		fontSize: "14px",
		textAlign: "right",
		position: "relative",
		top: "98px",
		marginLeft: "72px",
		marginRight: "335px"
	},
	visionImg: {
		width: "110%",
		position: "relative",
		top: "110px",
		left: "-100px"
	},
	valoresHeader: {
		backgroundColor: "#EDE8D8",
		width: "100%",
		height: "60px",
		cursor: "pointer"
	},
	valoresDiv: {
		width: "100%",
		height: "1000px",
		backgroundColor: "#EDE8D8",
		overflow: "hidden"
	},
	iniciativaDiv: {
		position: "relative",
		top: "30px",
		right: "10px",
		width: "100%",
		textAlign: "right"
	},
	iniciativaTitle: {
		fontSize: "25px",
		color: "#006666",
		fontWeight: "500"
	},
	iniciativaInfo: {
		fontSize: "14px",
		color: "#006666",
		paddingLeft: "50px"
	},
	confianzaCircle: {
		width: "500px",
		height: "500px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "absolute",
		right: "0px",
		marginTop: "40px",
		textAlign: "left"
	},
	confianzaInfoDiv: {
		marginTop: "40px",
		marginLeft: "135px"
	},
	confianzaTitle: {
		fontSize: "25px",
		color: "#006666",
		fontWeight: "500"
	},
	confianzaInfo: {
		fontSize: "14px",
		color: "#006666",
		paddingRight: "90px"
	},
	valoresImg: {
		width: "165%",
		position: "relative",
		top: "200px",
		left: "-105px",
		zIndex: "1"
	},
	excCircle: {
		width: "600px",
		height: "600px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "relative",
		right: "0px",
		top: "30px",
		zIndex: "3"
	},
	excInfoDiv: {
		position: "relative",
		top: "45px",
		right: "220px",
		background: "rgba(233, 225, 203, 0.5)",
		height: "124px",
		paddingTop: "15px",
		textAlign: "right"
	},
	excTitle: {
		fontSize: "25px",
		color: "#09233A",
		fontWeight: "500",
		marginRight: "18px"
	},
	excInfo: {
		fontSize: "14px",
		color: "#09233A",
		paddingLeft: "310px",
		marginRight: "18px"
	},
	sosInfoDiv: {
		position: "relative",
		top: "90px",
		left: "30px",
		height: "124px",
		paddingTop: "15px",
		textAlign: "left"
	},
	sosTitle: {
		fontSize: "25px",
		color: "#006666",
		fontWeight: "500",
		marginRight: "18px"
	},
	sosInfo: {
		fontSize: "14px",
		color: "#006666",
		marginRight: "220px"
	},
	innInfoDiv: {
		position: "relative",
		top: "120px",
		right: "220px",
		height: "124px",
		paddingTop: "15px",
		textAlign: "right"
	},
	innTitle: {
		fontSize: "25px",
		color: "#006666",
		fontWeight: "500",
		marginRight: "18px"
	},
	innInfo: {
		fontSize: "14px",
		color: "#006666",
		paddingLeft: "310px",
		marginRight: "18px"
	},
	misionHeader: {
		backgroundColor: "rgba(233, 225, 203)",
		width: "100%",
		height: "60px",
		cursor: "pointer"
	},
	misionDiv: {
		width: "100%",
		height: "510px",
		backgroundColor: "rgba(233, 225, 203)",
		overflow: "hidden"
	},
	circleMision: {
		width: "600px",
		height: "600px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "absolute",
		right: "0px",
		marginTop: "25px"
	},
	misionInfoDiv: {
		position: "relative",
		top: "105px",
		textAlign: "left",
		left: "8px"
	},
	misionInfo: {
		color: "#006666",
		fontSize: "14px",
		marginRight: "105px"
	},
	misionImg: {
		width: "130%",
		position: "relative",
		top: "15px",
		left: "-85px"
	}
}));

export default useStyles;
