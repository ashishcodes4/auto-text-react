import React, { Component } from 'react';
import './App.css';
// import Dropdown from './Components/Dropdown';
import Product from './Components/v1.1/Product';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Product />
      </div>
    );
  }
}

export default App;
