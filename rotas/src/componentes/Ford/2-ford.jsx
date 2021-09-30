import React from "react";
import Header from './Header/Header.jsx';
import "./Ford/2-ford.jsx";


function Ford() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Ford"}
						color={"red"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default Chevrolet;