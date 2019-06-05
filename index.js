import React, { Component } from 'react';
import { render } from 'react-dom';
import Cola from './Hello';
import Count from './Count'
import Registro from './Registro'

import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() 
{
  const name = "Chuca";
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
    </div>
  );
}

render(<App />, document.getElementById('root'));
