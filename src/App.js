import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import {HashRouter, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
          <Route path='/' exact  component={Home}/>
          <Route path='/services' exact  component={Services}/>
          <Route path='/products' exact  component={Products}/>
          <Route path='/sign-up' exact  component={SignUp}/>
      </HashRouter>
    </div>
  );
}

export default App;
