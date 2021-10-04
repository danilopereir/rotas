import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="/Fiat"> 4.1  </Link></li>
                    <li> <Link to="/Fiat"> 4.2  </Link></li>
                    <li> <Link to="/Fiat"> 4.3  </Link></li>
                    <li> <Link to="/Fiat"> 4.4  </Link></li>
                    <li> <Link to="/Fiat"> 4.5  </Link></li>
                </ul>
            </nav>
        </div>
    )
}