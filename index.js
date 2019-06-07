import React, { Component } from 'react';
import { render } from 'react-dom';
import Cola from './Hello';
import Count from './Count'
import Registro from './Registro'

import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import Card from './component/Card/Card'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() 
{
  const name = "Chuca";
  return (
    <div >
      <Navbar />
      <Header />      
      <div class="offset-sm-1 col-sm-10">
        <div class="row">
          <div class="col-sm-3">
            <Card text = "BUSCO UN ANIMAL PERDIDO"/>
          </div>
          <div class="col-sm-3">
            <Card text = "HE ENCONTRADO UN ANIMAL"/>
          </div>    
          <div class="col-sm-3">
            <Card text = "QUIERO ADOPTAR UN ANIMAL"/>
          </div>
          <div class="col-sm-3">
            <Card text = "QUIERO COLABORAR CON UNA PROTECTORA"/>
          </div>            
        </div>

      </div>
      
    </div>
  );
}

render(<App />, document.getElementById('root'));
