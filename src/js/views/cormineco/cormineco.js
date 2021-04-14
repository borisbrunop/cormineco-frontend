import React, { useState, useContext, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "../../../styles/cormineco.scss";
import styles from "../../../styles/cormineco.scss";
import useStyles from "./style";
import Slide from "react-reveal/Slide";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../store/appContext";
import Spinner from "../../component/spinner";

export const Cormineco = () => {
	const [visionShow, setVisionShow] = useState(false);
	const [valoresShow, setValoresShow] = useState(false);
	const [misionShow, setMisionShow] = useState(false);
	const classes = useStyles();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getImages("cormineco");
	}, []);

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
			{store.loadingCormineco ? (
				<>
					<div className={classes.corminecoDiv + " d-flex justify-content-center"}>
						<h3 className={classes.corminecoTitle}>CORMINECO</h3>
						<img src={store.misionImg} className={classes.misionImg} />
					</div>
					<div className={classes.infoCorminecoDiv + " prueba d-flex justify-content-center"}>
						<div className={classes.cicleOverflow + " d-flex justify-content-center"}>
							<div className={classes.sqCormineco}>
								<div className={classes.circleCormineco + " d-flex flex-column"}>
									<div className={classes.topInfoCorminecoDiv}>
										<p className={classes.topInfoCormineco}>
											Nuestra gestión estará orientada a satisfacer las necesidades de los
											clientes, respetando los valores profesionales y éticos establecidos en pro
											a maximizar la calidad de nuestras operaciones.
										</p>
									</div>
									<div className={classes.InfoCorminecoDiv}>
										<p className={classes.InfoCormineco}>
											En CORMINECO, C.A. nos esforzamos día a día por hacer lo justo y correcto.
											Asimismo, existe un Código de Conducta en el cual basamos nuestra guía de
											acciones.
										</p>
										<p className={classes.InfoCormineco}>
											El comportamiento de cada uno de los empleados en CORMINECO, se basa en una
											ética organizacional donde se dan unos valores establecidos, ello en pro de
											la consolidación de nuestra <strong>Misión, Visión y Valores.</strong>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={"text-center mt-4"}>
						<div onClick={handleVision} className={"d-flex " + classes.visionHeader}>
							<div className={"d-flex justify-content-start align-items-center " + classes.headers}>
								<h3 className={visionShow ? "animationHeadersIn" : "animationHeadersOut"}>Vision</h3>
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
								<h3 className={valoresShow ? "animationHeadersIn" : "animationHeadersOut"}>Valores</h3>
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
								<h3 className={misionShow ? "animationHeadersIn" : "animationHeadersOut"}>Mision</h3>
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
				</>
			) : (
				<Spinner />
			)}
		</>
	);
};
