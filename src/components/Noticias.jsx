import React from "react";
import Noticia from "./Noticia";
import "./Noticias.css";
import axios from "axios";
const URL_NOTICIAS_LOCAL = "./notices.json";
const URL_NOTICIAS_REMOTA =
	"https://62852de4a48bd3c40b7c8561.mockapi.io/api/noticias";

class Noticias extends React.Component {
	state = {
		noticias: [],
	};

	async componentDidMount() {
		// fetch con then/catch
		fetch(URL_NOTICIAS_LOCAL)
			.then((response) => response.json())
			.then((noticias) => {
				this.setState({ noticias });
			})
			.catch((error) => console.error(error));

		// axios con then catch
		axios(URL_NOTICIAS_LOCAL)
			.then((response) => {
				let { noticias } = response.data;
				console.log(noticias);
			})
			.catch((error) => console.error(error));

		// axios con async await
		try {
			// let response = await axios(URL_NOTICIAS_LOCAL);
			// let noticias = response.data;
			let { data: noticias } = await axios(URL_NOTICIAS_REMOTA);
			console.log(noticias);
			this.setState({ noticias });
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		let { noticias } = this.state;
		console.log(noticias);

		return (
			<div className="noticias">
				<div className="container mt-3">
					<div className="jumbotron">
						<h2>Mis Noticias</h2>
						<hr />
						{noticias.map((noticia) => (
							<Noticia noticia={noticia} key={noticia.id} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Noticias;
