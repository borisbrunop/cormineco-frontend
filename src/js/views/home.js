import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import CorminecoSVG from "../component/svg/corminecoSVG.js";
import CompromisoSVG from "../component/svg/compromisoSVG";
import AlcanceSVG from "../component/svg/alcanceSVG";
import ContactoSVG from "../component/svg/contactoSVG";
import ambiente from "../../img/ambiente.jpg";
import residuos from "../../img/residuos.jpg";
import Fade from "react-reveal/Fade";
import suelos from "../../img/suelos.jpg";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

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
	ambiente: {
		position: "absolute",
		bottom: "-130px",
		left: "-250px",
		zIndex: "-2",
		width: "545px",
		height: "350px"
	},
	ambienteDiv: {
		height: "100%",
		width: "100%"
	},
	circleCormineco: {
		width: "350px",
		height: "350px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "absolute",
		bottom: "-350px",
		left: "-50px"
	},
	sqCormineco: {
		width: "400px",
		height: "250px",
		background: "rgba(225, 173, 98, 0.5)",
		position: "absolute",
		top: "55px",
		left: "-30px",
		zIndex: "-1"
	},
	titleCormineco: {
		color: "#006666",
		marginTop: "75px",
		marginLeft: "60px",
		fontSize: "35px"
	},
	pCormineco: {
		color: "#E1A754",
		marginTop: "45px",
		marginLeft: "60px",
		fontSize: "12px"
	},
	infoCormineco: {
		color: "#E1A754",
		marginTop: "45px",
		marginLeft: "60px",
		fontSize: "12px",
		cursor: "pointer"
	},
	residuoDiv: {
		height: "100%",
		width: "100%"
	},
	residuos: {
		width: "490px",
		height: "403px",
		zIndex: "-2",
		position: "relative"
	},
	res: {
		position: "relative",
		right: "-110px",
		top: "-99px",
		zIndex: "-2"
	},
	resSqr: {
		width: "360px",
		position: "absolute",
		height: "570px",
		bottom: "-820px",
		right: "0px",
		overflow: "hidden"
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
		position: "relative"
	},
	sqCompromiso: {
		width: "330px",
		height: "340px",
		background: "rgba(161, 178, 178, 0.5)",
		position: "absolute",
		top: "118px",
		right: "0",
		zIndex: "-3"
	},
	titleCompromiso: {
		color: "#09233A",
		marginTop: "50px",
		marginLeft: "48px",
		fontSize: "35px"
	},
	pCompromiso: {
		color: "#5C5C42",
		marginTop: "20px",
		marginRight: "65px",
		fontSize: "12px",
		textAlign: "right"
	},
	infoCompromiso: {
		color: "#5C5C42",
		marginTop: "25px",
		marginRight: "65px",
		fontSize: "12px",
		cursor: "pointer",
		textAlign: "right"
	},
	suelosDiv: {
		height: "420px",
		width: "100%"
	},
	suelos: {
		position: "absolute",
		bottom: "-965px",
		left: "-210px",
		width: "450px",
		height: "300px",
		zIndex: "-4"
	},
	circleSuelos: {
		width: "400px",
		height: "400px",
		background: "rgba(255, 255, 255, 0.5)",
		border: "1px solid #FFFFFF",
		borderRadius: "50%",
		position: "absolute",
		bottom: "-1250px",
		left: "-100px"
	},
	sqSuelos: {
		width: "400px",
		height: "250px",
		background: "rgba(92, 92, 66, 0.5)",
		position: "absolute",
		top: "55px",
		left: "20px",
		zIndex: "-1"
	},
	titleSuelos: {
		color: "#5C5C42",
		marginTop: "65px",
		marginLeft: "110px",
		fontSize: "35px"
	},
	pSuelos: {
		color: "#006666",
		marginTop: "35px",
		marginLeft: "110px",
		marginRight: "10px",
		fontSize: "12px"
	},
	infoSuelos: {
		color: "#006666",
		marginTop: "35px",
		marginLeft: "110px",
		fontSize: "12px",
		cursor: "pointer"
	},
	contacto: {
		width: "100%",
		height: "200px",
		position: "absolute",
		bottom: "-1500px"
	},
	// positionContacto: {
	// 	position: "absolute",
	// 	bottom: "-1430px",
	// 	width: "100%",
	// 	height: "200px"
	// },
	rectangle: {
		zIndex: "-3",
		position: "absolute",
		bottom: "0px",
		width: "100%"
	},
	titleContacto: {
		color: "#E5DAB8",
		fontSize: "35px",
		position: "absolute",
		top: "0px",
		right: "10px"
	},
	pContacto: {
		color: "#E5DAB8",
		position: "absolute",
		top: "65px",
		left: "10px",
		marginRight: "10px",
		fontSize: "10px",
		textAlign: "center"
	},
	footerContacto: {
		color: "#E5DAB8",
		position: "absolute",
		bottom: "0px",
		left: "50%",
		transform: "translateX(-50%)",
		fontSize: "10px",
		textAlign: "center",
		width: "100%"
	},
	social: {
		position: "absolute",
		bottom: "30px",
		left: "50%",
		transform: "translateX(-50%)"
	},
	socialColor: {
		color: "#E5DAB8"
	}
}));

export const Home = () => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<>
			<div className={"flex-column home " + classes.div}>
				<div className="mr-4">
					<div className={"mb-3 d-flex justify-content-end align-content-center " + classes.divSvg}>
						<CorminecoSVG />
					</div>
					<div className={"mb-3 d-flex justify-content-end align-content-center " + classes.divSvg}>
						<CompromisoSVG />
					</div>
					<div className={"mb-3 d-flex justify-content-end align-content-center " + classes.divSvg}>
						<AlcanceSVG />
					</div>
					<div className={"mb-3 d-flex justify-content-end align-content-center " + classes.divSvg}>
						<ContactoSVG />
					</div>
				</div>
				{/* <div className={classes.ambienteDiv}> */}
				<img src={ambiente} className={"imgAnim  " + classes.ambiente} />
			</div>

			<div className={classes.circleCormineco}>
				<h3 className={classes.titleCormineco}>CORMINECO</h3>
				<p className={classes.pCormineco}>
					Conoce a fondo nuestra misión, visión, valores y la forma en que manejamos las situaciones como una
					compañía de gran excelencia.
				</p>
				<p onClick={e => history.push(`/cormineco`)} className={classes.infoCormineco}>
					Ver mas ...
				</p>
				<div className={classes.sqCormineco} />
			</div>
			{/* </div> */}
			{/* <div className={classes.residuoDiv}> */}
			<div className={classes.resSqr}>
				<div className={classes.res}>
					<img src={residuos} className={classes.residuos} />
				</div>
				<div className={classes.circleCompromiso}>
					<h3 className={classes.titleCompromiso}>COMPROMISO</h3>
					<p className={classes.pCompromiso}>
						Exigimos la concientización de la responsabilidad que se conlleva con las personas, los
						clientes, la sostenibilidad, la gestión ambiental, los resultados, entre otros.
					</p>
					<p onClick={e => history.push(`/compromiso`)} className={classes.infoCompromiso}>
						Ver mas ...
					</p>
				</div>
				<div className={classes.sqCompromiso} />
			</div>
			{/* </div> */}
			{/* <div className={classes.suelosDiv}> */}
			<img src={suelos} className={classes.suelos} />
			<div className={classes.circleSuelos}>
				<h3 className={classes.titleSuelos}>ALCANCE</h3>
				<p className={classes.pSuelos}>
					Demostrarle al mundo de qué esta hecho Cormineco, todos los proyectos que se pueden alcanzar
					trabajando con nosotros, nuestras especialidades, el equipo de soporte, proyectos ambientales,
					cuerpos de agua y más.
				</p>
				<p onClick={e => history.push(`/cormineco`)} className={classes.infoSuelos}>
					Ver mas ...
				</p>
				<div className={classes.sqSuelos} />
			</div>
			{/* </div> */}
			<div className={classes.contacto}>
				<div className="positionContacto">
					{/* <svg
						className={classes.rectangle}
						width="375"
						height="210"
						viewBox="0 0 375 210"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M0 64L377 0V210H189.251H0V64Z" fill="#09233A" />
					</svg> */}
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
			{/* </div> */}
		</>
	);
};
