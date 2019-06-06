import React, {useState} from 'react';
import './app.css'

//static-top
const Navbar = () => 
{
  const [collapse, setCollapse] = useState("collapse navbar-collapse");
  return (
<nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" onClick={ () => { (collapse.indexOf("show") >=0) ? setCollapse("collapse navbar-collapse") :  setCollapse("collapse navbar-collapse show") }} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className={collapse} id="navbarNavAltMarkup">
    <div class="navbar-nav mr-auto">   
    </div>  
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">PERDIDOS <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">ENCONTRADOS</a>
      <a class="nav-item nav-link" href="#">ADOPTA</a>      
    </div>
  <form class="form-inline">
    <input class="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>    
  </form>      
  </div>

</nav>
)
}


export default Navbar;