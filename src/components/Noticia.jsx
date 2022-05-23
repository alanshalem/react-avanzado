import "./Noticia.css";

function Noticia(props) {
	let { noticia } = props;
	return (
		<div className="noticia">
			<div className="media alert alert-primary">
				<img
					src={noticia.image}
					className="mr-3"
					style={{ width: "150px", borderRadius: "15px" }}
					alt={noticia.id}
				/>
				<div className="media-body">
					<p>
						<u>Noticia Nro. {noticia.id}</u>
					</p>
					<p>
						<b>{noticia.title}</b>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Noticia;
