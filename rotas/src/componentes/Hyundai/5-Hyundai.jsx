import React from "react";
import Header from './Header/Header.jsx';
import "./Hyundai/5-hyundai.jsx";


function Hyundai() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Hyundai"}
						color={"purple"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}