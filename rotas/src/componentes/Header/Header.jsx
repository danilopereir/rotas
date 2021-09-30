import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/Fiat'>1-Fiat</Link></li>
                    <li><Link to='/Ford'>2-Ford</Link></li>
                    <li><Link to='/Chevrolet'>3-Chevrolet</Link></li>
                    <li><Link to='/Vw'>4-Vw</Link></li>
                    <li><Link to='/Hyundai'>5-Hyundai</Link></li>
                </ul>
            </nav>
        </div>
    )
}