
import React from 'react';
import './App.css';

//import '@fontsource/roboto';
import NavBar from './components/navbar';
import Itemtype from './pages/itemtype';
import Stock from './pages/stock';
import Stores from './pages/store';
import AddItem from './pages/additem';
import AddStore from './pages/addstore';
import AddStock from './pages/addstock';

import {BrowserRouter as Router , Switch, Route} from "react-router-dom";


export default function App(){
  
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={Itemtype}/>
        <Route path='/Itemtype' component={Itemtype}/>
        <Route path='/Stores' component={Stores}/>
        <Route path='/Stock' component={Stock}/>
        <Route path='/AddItem' component={AddItem}/>
        <Route path='/AddStore' component={AddStore}/>
        <Route path='/AddStock' component={AddStock}/>
        
      </Switch>
    </Router>
   
  );
}

      



    
  




