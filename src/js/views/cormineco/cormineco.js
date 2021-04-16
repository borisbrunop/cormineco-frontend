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
	const [loadingCormineco, setLoadingCormineco] = useState(false);
	const [misionImg, setMisionImg] = useState("");
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
						<img src={store.topImg} className={classes.topImg} />
					</div>
					<div className={classes.infoCorminecoDiv + " d-flex justify-content-center"}>
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

					<div className={"text-center"}>
						<div onClick={handleVision} className={"d-flex " + classes.visionHeader}>
							<div className={"d-flex justify-content-start align-items-center " + classes.headers}>
								<h3 className={visionShow ? "animationHeadersIn" : "animationHeadersOut"}>Vision</h3>
							</div>
						</div>
						<Collapse in={visionShow}>
							<Paper elevation={0}>
								<div className={classes.visionDiv}>
									<div className={classes.visionInfoDiv}>
										<p className={classes.visionInfo}>
											Ser una organización líder en adquisición, transformación y comercialización
											de recursos naturales en la República Bolivariana de Venezuela.
										</p>
									</div>
									<div className={classes.circleVision} />
									<img src={store.visionImg} className={classes.visionImg} />
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
									<div className={classes.iniciativaDiv}>
										<h3 className={classes.iniciativaTitle}>INICIATIVA</h3>
										<p className={classes.iniciativaInfo}>
											Manifestada a través de los comportamientos y actitudes de nuestros
											empleados.
										</p>
									</div>

									<div className={classes.confianzaCircle} />
									<div className={classes.confianzaInfoDiv}>
										<h3 className={classes.confianzaTitle}>CONFIANZA</h3>
										<p className={classes.confianzaInfo}>
											Seguridad de los accionistas y el equipo, en todos nuestros compromisos y
											acciones.
										</p>
									</div>
									{/* </div> */}
									<img src={store.valoresImg} className={classes.valoresImg} />
									<div className={classes.excInfoDiv}>
										<h3 className={classes.excTitle}>EXCELENCIA</h3>
										<p className={classes.excInfo}>
											En la forma que desarrollamos nuestras operaciones y en la calidad de los
											resultados.
										</p>
									</div>
									<div className={classes.sosInfoDiv}>
										<h3 className={classes.sosTitle}>SOSTENIBILIDAD</h3>
										<p className={classes.sosInfo}>
											Enfocados en mejorar la calidad de vida de las generaciones actuales y
											futuras.
										</p>
									</div>
									<div className={classes.innInfoDiv}>
										<h3 className={classes.innTitle}>INNOVACIÓN</h3>
										<p className={classes.innInfo}>
											Con la intención de crear nuevas alternativas en las diversas áreas en las
											que actuamos.
										</p>
									</div>
									<div className={classes.excCircle} />
									{/* </div> */}
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
									<div className={classes.circleMision} />
									<div className={classes.misionInfoDiv}>
										<p className={classes.misionInfo}>
											Ser una organización líder en adquisición, transformación y comercialización
											de recursos naturales en la República Bolivariana de Venezuela.
										</p>
										<img src={store.misionImg} className={classes.misionImg} />
									</div>
								</div>
							</Paper>
						</Collapse>
					</div>
					<div className={classes.BottomInfoCorminecoDiv}>
						<div className={classes.bottomCicleOverflow}>
							<div className={classes.bottomSqCormineco}>
								<div className={classes.BottomCircleCormineco}>
									<p className={classes.BottomInfoCormineco}>
										En este contexto, es prioridad la innovación y mejora continua de los procesos
										que nos permitan profundizar la calidad de nuestros servicios. Generamos
										alianzas con proveedores estableciendo relaciones a largo plazo, con el fin de
										crecer juntos para darle un valor agregado a nuestras operaciones de servicios.
									</p>
									<img src={store.bottomImg} className={classes.bottomImg} />
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<Spinner />
			)}
		</>
	);
};
