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
	misionImg: {
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
		height: "510px"
	},
	sqCormineco: {
		width: "100%",
		height: "385px",
		position: "relative",
		top: "65px",
		left: "0px",
		zIndex: "1",
		background: "rgba(233, 225, 203, 0.5)",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			top: "60px",
			height: "405px"
		}
	},
	cicleOverflow: {
		height: "510px",
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
			marginLeft: "95px"
		}
	},
	InfoCormineco: {
		color: "#006666",
		fontSize: "14px",
		textAlign: "justify",
		marginRight: "145px",
		[theme.breakpoints.down(custome.breakpoints.values.lgCellphone)]: {
			marginRight: "190px"
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
		height: "610px",
		backgroundColor: "rgba(233, 225, 203)",
		overflow: "hidden"
	},
	circleVision: {
		width: "600px",
		height: "600px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "relative",
		top: "0px",
		left: "50%",
		transform: "translateX(-50%)"
	},
	valoresHeader: {
		backgroundColor: "rgba(233, 225, 203, 0.7)",
		width: "100%",
		height: "60px",
		cursor: "pointer"
	},
	valoresDiv: {
		width: "100%",
		height: "600px",
		backgroundColor: "rgba(233, 225, 203, 0.7)",
		overflow: "hidden"
	},
	misionHeader: {
		backgroundColor: "rgba(233, 225, 203, 0.5)",
		width: "100%",
		height: "60px",
		cursor: "pointer"
	},
	misionDiv: {
		width: "100%",
		height: "400px",
		backgroundColor: "rgba(233, 225, 203, 0.5)"
	}
}));

export default useStyles;
