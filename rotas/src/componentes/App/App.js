 import React from 'react';
 import './App.css';

 import Header from '../Header/Header'
 import {Switch,Route} from 'react-router-dom'
 import Fiat from '../Fiat/1-fiat'
 import Ford from '../Ford/2-ford'
 import Chevrolet from '../Chevrolet/3-chevrolet'
 import Vw from '../Vw/4-Vw'
 import Hyundai from '../Hyundai/5-Hyundai'
 import Header from '../Header/Header'
 
 function App() {
     return (
         <div>
    
           <header />

           <main>
               <Switch>
                   <Route exact path = "/Fiat" render = {(props) => <Fiat/>}></Route>
                   <Route exact path = '/Ford' render = {(props) => <Ford/>}></Route>
                   <Route exact path = '/Chevrolet' render = {(props) => <Chevrolet/>}></Route>
                   <Route exact path = '/Vw' render = {(props) => <Vw/>}></Route>
                   <Route exact path = '/Hyundai' render = {(props) => <Hyundai/>}></Route>

               </Switch>

           </main>

         </div>
     );
 }

 export default App;