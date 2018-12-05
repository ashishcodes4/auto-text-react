import React, { Component } from 'react';
import Category from './Category';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log(this.state.product);
    return (
      <div>
      <div className="input-group mb-3 mr-2">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Product
            </label>
          </div>
          <select
            className="custom-select"
            onChange={this.onChange}
            name="product"
          >
            <option defaultValue>* Select Product</option>
            <option value="standard">Standard Event</option>
            <option value="express">Express Event</option>
            <option value="flex">Flex Event</option>
          </select>
        </div>
        <Category product={this.state.product} />
      </div>
    )
  }
}

export default Product;