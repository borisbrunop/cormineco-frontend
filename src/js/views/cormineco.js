import React from "react";
import Fade from "react-reveal/Fade";
import "../../styles/home.scss";

export const Cormineco = () => {
	return (
		<>
			<Fade duration={1000} delay={500} distance="30px">
				<div className="text-center mt-5">
					<h1>Cormineco</h1>
					<a href="#" className="btn btn-success test">
						If you see this green button, bootstrap is working
					</a>
				</div>
			</Fade>
		</>
	);
};
