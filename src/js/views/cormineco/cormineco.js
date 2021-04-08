import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "../../../styles/cormineco.scss";
import styles from "../../../styles/cormineco.scss";
import useStyles from "./style";
import Slide from "react-reveal/Slide";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";

export const Cormineco = () => {
	const [visionShow, setVisionShow] = useState(false);
	const [valoresShow, setValoresShow] = useState(false);
	const [misionShow, setMisionShow] = useState(false);
	const classes = useStyles();

	const handleVision = () => {
		setVisionShow(!visionShow);
	};
	const handleValores = () => {
		setValoresShow(!valoresShow);
	};
	const handleMision = () => {
		setMisionShow(!misionShow);
	};

	return (
		<>
			<Fade duration={1000} delay={500} distance="30px">
				<div className="text-center mt-5">
					<h1>Cormineco</h1>
					<div onClick={handleVision} className={"d-flex " + classes.visionHeader}>
						<div className={"d-flex justify-content-start align-items-center " + classes.headers}>
							<h3>Vision</h3>
						</div>
					</div>
					<Collapse in={visionShow}>
						<Paper elevation={0}>
							<div className={classes.visionDiv}>
								<div className={classes.circleVision} />
							</div>
						</Paper>
					</Collapse>
					<div onClick={handleValores} className={"d-flex " + classes.valoresHeader}>
						<div className={"d-flex justify-content-start align-items-center " + classes.headers}>
							<h3>Valores</h3>
						</div>
					</div>
					<Collapse in={valoresShow}>
						<Paper elevation={0}>
							<div className={classes.valoresDiv}>
								<h3>React Reveal</h3>
								<div className={classes.sqValores} />
							</div>
						</Paper>
					</Collapse>
					<div onClick={handleMision} className={"d-flex " + classes.misionHeader}>
						<div className={"d-flex justify-content-start align-items-center " + classes.headers}>
							<h3>Mision</h3>
						</div>
					</div>
					<Collapse in={misionShow}>
						<Paper elevation={0}>
							<div className={classes.misionDiv}>
								<h3>React Reveal</h3>
							</div>
						</Paper>
					</Collapse>
				</div>
			</Fade>
		</>
	);
};
