import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home/home";
import { Compromiso } from "./views/compromiso";
import { Alcance } from "./views/alcance";
import { Contacto } from "./views/contacto";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cormineco } from "./views/cormineco/cormineco";
import { Context } from "./store/appContext";

import Spinner from "../js/component/spinner";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<BrowserRouter>
			<ScrollToTop>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/cormineco">
						<Cormineco />
					</Route>
					<Route exact path="/alcance">
						<Alcance />
					</Route>
					<Route exact path="/contacto">
						<Contacto />
					</Route>
					<Route exact path="/compromiso">
						<Compromiso />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
