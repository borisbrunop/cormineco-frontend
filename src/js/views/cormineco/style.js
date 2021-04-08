import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	headers: {
		width: "50%",
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
