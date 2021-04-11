import Axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			residuosImg: "",
			ambienteImg: "",
			suelosImg: "",
			loadingInicio: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getimages: async folder => {
				let json = JSON.stringify({ folder: folder });
				// setStore({
				// 	loadingInicio: false
				// });
				let res = await Axios.post("https://cormineco.herokuapp.com/images", json, {
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (response.status === 200) {
							let store = getStore();
							// let res = JSON.parse(response.data);
							let images = [];
							response.data.map(image => {
								if (image.name === "residuos_waru5q") {
									setStore({
										residuosImg: image.image_url
									});
								}
								if (image.name === "suelos_habcp9") {
									setStore({
										suelosImg: image.image_url
									});
								}
								if (image.name === "ambiente_jsgxwh") {
									setStore({
										ambienteImg: image.image_url
									});
								}
							});
							setStore({
								loadingInicio: true
							});
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
