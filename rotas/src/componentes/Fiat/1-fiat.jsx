 import React from "react"

 import './Fiat.css'
 import Ford from '../Ford/2-ford'
 import chevroletHeader from "./chevroletHeader"
 import { Route, Switch } from 'react-router'

 export default function Fiat() {
     return (
        <div>
            <FiatHeader />

            <Ford texto="Ford" />

            <div className="Fiat">

            </div>
        </div>
     );
 }