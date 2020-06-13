import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



class App extends Component {
  render (){
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'        component={Index} />
      <Route       path='/contact' component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}}

export default App;
