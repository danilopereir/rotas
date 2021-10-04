import React from "react";

import './chevrolet.css'
import Fiat from '../Fiat/1-fiat'
import Ford from '../Ford/2-ford'
import { Route, Switch } from 'react-router'


export default function Chevrolet() {
	return (
		<div>
			<chevroletHeader />

			<Fiat texto="chervolet" />

			<div className="chevrolet">
				
			</div>

		</div>

	);
}

export default Chevrolet;