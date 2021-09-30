import React from "react";
import Header from './Header/Header.jsx';
import "./Vw/4-Vw.jsx";


function Vw() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Vw"}
						color={"green"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}