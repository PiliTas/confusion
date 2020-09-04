import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuCompnent';
import './App.css';
;

class App extends Component {
render() {
  return (
  <div className="App">
    <Navbar dark color="secondary">
    <div className="container-fluid">
      <NavbarBrand href="/">
        Restaurant Confusión
         </NavbarBrand>
    </div>
    </Navbar>
    <Menu />
    </div>
);
  }
}


  

export default App;
