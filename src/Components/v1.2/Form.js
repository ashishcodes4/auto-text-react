import React, { Component } from 'react';
import Product from './Product';
import Category from './Category';
import SubCat from './SubCat'
class Form extends Component {
  render() {
    return (
      <div className='container'>
        <Product />
        <Category />
        <SubCat />
      </div>
    )
  }
}

export default Form;