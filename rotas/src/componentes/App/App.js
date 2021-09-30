 import React from 'react';
 import {Switch,Route,Link} from 'react-router-dom'
 import Fiat from './componentes/1-fiat.jsx'
 import Ford from './componentes/2-ford.jsx'
 import Chervolet from './componentes/3-chervolet.jsx'
 import Vw from './componentes/4-Vw.jsx'
 import Hyundai from './componentes/5-Hyundai.jsx'


 export default function App() {
     return (
    <>
           <header>
                <Link to='/Fiat'>1-Fiat</Link>
                <Link to='/Ford'>2-Ford</Link>
                <Link to='/Chevrolet'>3-Chevrolet</Link>
                <Link to='/Vw'>4-Vw</Link>
                <Link to='/Hyundai'>5-Hyundai</Link>
           </header>
           <main>
               <Switch>
                   <Route path='/Fiat' component={Fiat} />
                   <Route path='/Ford' component={Ford} />
                   <Route path='/Chevrolet' component={Chevrolet} />
                   <Route path='/Vw' component={Vw} />
                   <Route path='/Hyundai' component={Hyundai} />
               </Switch>
           </main>
         </>
     );
 }