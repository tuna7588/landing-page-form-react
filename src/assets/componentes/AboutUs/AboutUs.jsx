import React from "react";

//include images into your bundle

import Fondo from "./orange.png";
import AnhTu from "./Anh-Tu.jpg";
import Melisa from "./Melisa.jpg";
import Rocio from "./Rocio.jpg";
import Jordi from "./Jordi.jpg";
import './AboutUs.css';


//create your first component
export const AboutUs = () => {
	return (<>
		<div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', }} className="fondo container-fluid bck-color min-vh-100 d-flex justify-content-center align-items-center flex-column">
			<h1 className="title mb-5"><b>AJRM Team</b></h1>
			<div className="">
				<div className="vuelta w-25 alt p-2">
					<div className="card w-100">
						<div className="front borders">
							<div className="foto">
								<img className="foto-img" src={AnhTu} />
							</div>
							<div className="datos">
								<h4>Anh Tu Nguyen</h4>
								<p>Alias: <b>TuNa</b></p>
							</div>
						</div>
						<div className="back borders">
							<div className="datos">
								<p>Me formé y trabajé en el sector de Economía. Ahora soy un Developer entusiasmada de aprender cosas nuevas y resolver los problemas en el mundo de la programación. Si no me encuentra escribiendo códigos, estoy con mis preciosos hijos o leyendo un libro.</p></div>
						</div>
					</div>
				</div>
				<div className="vuelta w-25 alt p-2">
					<div className="card w-100">
						<div className="front borders">
							<div className="foto">
								<img className="foto-img" src={Melisa} />
							</div>
							<div className="datos">
								<h4>Melisa Navarro</h4>
								<p>Alias: <b>Phoenix</b></p>
							</div>
						</div>
						<div className="back borders">
							<div className="datos">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum congue ex eu porttitor. Nulla facilisi. Donec porttitor tincidunt lorem, in auctor sem eleifend non. Mauris nec tellus suscipit, sodales eros at, vestibulum dui. Praesent vulputate ex est, vitae dictum diam bibendum in. Nunc eget leo a odio pulvinar suscipit.</p></div>
						</div>
					</div>
				</div>
				<div className="vuelta w-25 alt p-2">
					<div className="card w-100">
						<div className="front borders">
							<div className="foto">
								<img className="foto-img" src={Rocio} />
							</div>
							<div className="datos">
								<h4>Rocio Martín</h4>
								<p>Alias: <b>Leela</b></p>
							</div>
						</div>
						<div className="back borders">
							<div className="datos">
								<p>Soy Rocío, decidí cambiar de la Educación Social al mundo de la programación para dar un giro a mi vida. Me apasiona la música, el cine, la literatura y la naturaleza.</p></div>
						</div>
					</div>
				</div>
				<div className="vuelta w-25 alt p-2">
					<div className="card w-100">
						<div className="front borders">
							<div className="foto">
								<img className="foto-img" src={Jordi} />
							</div>
							<div className="datos">
								<h4>Jordi Goixart</h4>
								<p>Alias: <b>DevConKai</b></p>
							</div>
						</div>
						<div className="back borders">
							<div className="datos">
								<p>He sido técnico de diálisis durante la mayor parte de mi vida laboral y después, al ver como cada vez, el mundo de la informática me ha ido gustando más y más, finalmente me decidí a ser Sofware Developer. </p></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
	);
};

