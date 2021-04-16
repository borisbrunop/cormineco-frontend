import Axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			residuosImg: "",
			ambienteImg: "",
			suelosImg: "",
			visionImg: "",
			valoresImg: "",
			misionImg: "",
			topImg: "",
			bottomImg: "",
			loadingInicio: false,
			loadingCormineco: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getImages: async folder => {
				let json = JSON.stringify({ folder: folder });
				// setStore({
				// 	loadingInicio: false
				// });
				await Axios.post("https://cormineco.herokuapp.com/images", json, {
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (response.status === 200) {
							if (folder === "inicio") {
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
							if (folder === "cormineco") {
								response.data.map(image => {
									if (image.name === "mision_j66ent") {
										setStore({
											topImg: image.image_url
										});
									}
									if (image.name === "cormineco_bncynw") {
										setStore({
											bottomImg: image.image_url
										});
									}
									if (image.name === "rio_aiof3v") {
										setStore({
											visionImg: image.image_url
										});
									}
									if (image.name === "valores_cefp72") {
										setStore({
											valoresImg: image.image_url
										});
									}
									if (image.name === "vision_pl4exl") {
										setStore({
											misionImg: image.image_url
										});
									}
								});
								setStore({
									loadingCormineco: true
								});
							}
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
