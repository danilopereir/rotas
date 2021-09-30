import React from 'react'
import { Switch,Route, Link } from 'react-router-dom'
import Fiat from './componentes/1-Fiat'
import Ford from './componentes/2-Ford'
import Chevrolet from './componenetes/3-Chevrolet'
import Vw from './componenetes/4-Vw'
import Hyundai from './componenetes/5-Hyundai'

export default function App() {
    return (
    <div>
        <header>
            <Link to='/Fiat'>1-Fiat</Link>
            <Link to='/Ford'>2-Ford</Link>
            <Link to='/Chevrolet'>3-Chevrolet</Link>
            <Link to='/Vw'>4-Vw</Link>
            <Link to='/Hyundai'>5-Hyundai</Link>
        </header>
        <main>
        <Switch>
            <Route path='/Fiat' component={Fiat}/>
            <Route path='/Ford' component={Ford}/>
            <Route path='/Chevrolet' component={Chevrolet}/>
            <Route path='/Vw' component={Vw}/>
            <Route path='/Hyundai' component={Hyundai}/>
        </Switch> 
        </main>
    </div>
    )
}