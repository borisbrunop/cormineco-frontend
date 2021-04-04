import React from "react";
import "../../../styles/home.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import CorminecoSVG from "../../component/svg/corminecoSVG.js";
import CompromisoSVG from "../../component/svg/compromisoSVG";
import AlcanceSVG from "../../component/svg/alcanceSVG";
import ContactoSVG from "../../component/svg/contactoSVG";
import ambiente from "../../../img/ambiente.jpg";
import residuos from "../../../img/residuos.jpg";
import Fade from "react-reveal/Fade";
import suelos from "../../../img/suelos.jpg";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import useStyles from "./style";

export const Home = () => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<>
			<div className={"flex-column home " + classes.div}>
				<div className={"mr-3 " + classes.menu}>
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
				<img src={ambiente} className={classes.ambiente} />
				<img src={ambiente} className={classes.ambienteLg} />
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
			<div className={"sqCorminecoLgDeg justify-content-center  align-items-center " + classes.sqCorminecoLg}>
				<div className={classes.containerLg + " row"}>
					<div className="col-6" />
					<div className="col-6 flex-column justify-content-center align-items-center">
						<div className="d-flex align-items-center justify-content-center">
							<h3 className={classes.titleCorminecoLg}>CORMINECO</h3>
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<p className={classes.pCorminecoLg}>
								¿Quienes somos?
								<br />
								Conoce a fondo nuestra misión, visión, valores y la forma en que manejamos las
								situaciones como una compañía de gran excelencia.
							</p>
						</div>
						<div className="d-flex align-items-end justify-content-end">
							<p onClick={e => history.push(`/cormineco`)} className={classes.infoCorminecoLg}>
								Ver mas ...
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* <div className={classes.residuoDiv}> */}
			<div className={classes.resSqrLg}>
				<div className={classes.resLg}>
					<img src={residuos} className={classes.residuosLg} />
				</div>
			</div>
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
			<div className={"sqCompromisoLgDeg justify-content-center  align-items-center " + classes.sqCompromisoLg}>
				<div className={classes.containerLg + " row"}>
					<div className="col-6 flex-column justify-content-center align-items-center">
						<div className="d-flex align-items-center justify-content-center">
							<h3 className={classes.titleCompromisoLg}>COMPROMISO</h3>
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<p className={classes.pCompromisoLg}>
								Exigimos la concientización de la responsabilidad que se conlleva con las personas, los
								clientes, la sostenibilidad, la gestión ambiental, los resultados, entre otros.
							</p>
						</div>
						<div className="d-flex align-items-end justify-content-start">
							<p onClick={e => history.push(`/compromiso`)} className={classes.infoCompromisoLg}>
								Ver mas ...
							</p>
						</div>
					</div>
					<div className="col-6" />
				</div>
			</div>
			{/* </div> */}
			{/* <div className={classes.suelosDiv}> */}
			<img src={suelos} className={classes.suelos} />
			<img src={suelos} className={classes.suelosLg} />
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
			<div className={"sqSuelosLgDeg " + classes.sqSuelosLg}>
				<div className={classes.containerLg + " row"}>
					<div className="col-6" />
					<div className="col-6 flex-column justify-content-center align-items-center">
						<div className="d-flex align-items-center justify-content-center">
							<h3 className={classes.titleSuelosLg}>ALCANCE</h3>
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<p className={classes.pSuelosLg}>
								Demostrarle al mundo de qué esta hecho Cormineco, todos los proyectos que se pueden
								alcanzar trabajando con nosotros, nuestras especialidades, el equipo de soporte,
								proyectos ambientales, cuerpos de agua y más.
							</p>
						</div>
						<div className="d-flex align-items-end justify-content-end">
							<p onClick={e => history.push(`/cormineco`)} className={classes.infoSuelosLg}>
								Ver mas ...
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
			<div className={classes.contacto}>
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
			{/* </div> */}
		</>
	);
};
