import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      category: "",
      subCat: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    console.log("button clicked");
    console.log(this.state.product);
  }

  render() {
    const { product } = this.state;

    const standardProduct = [
      { label: "* Select Product", value: 0 },
      { label: "Standard Product 1", value: "Product 1" },
      { label: "Standard Product 2", value: "Product 2" },
      { label: "Standard Product 3", value: "Product 3" },
      { label: "Standard Product 4", value: "Product 4" },
      { label: "Standard Product 5", value: "Product 5" },
    ];

    const expressProduct = [
      { label: "* Select Product", value: 0 },
      { label: "Express Product 1", value: "Express Product 1" },
      { label: "Express Product 2", value: "Express Product 2" },
      { label: "Express Product 3", value: "Express Product 3" },
      { label: "Express Product 4", value: "Express Product 4" },
      { label: "Express Product 5", value: "Express Product 5" },
      { label: "Express Product 6", value: "Express Product 6" },
    ];

    const flexProduct = [
      { label: "* Select Product", value: 0 },
      { label: "Flex Product 1", value: "Flex Product 1" },
      { label: "Flex Product 2", value: "Flex Product 2" },
      { label: "Flex Product 3", value: "Flex Product 3" },
      { label: "Flex Product 4", value: "Flex Product 4" },
      { label: "Flex Product 5", value: "Flex Product 5" },
    ];

    const standardOptions = standardProduct.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const expressOptions = expressProduct.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const flexOptions = flexProduct.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    
    let options;
    if (product === "flex") {
      options = flexOptions;
    } else {
      if (product === "express") {
        options = expressOptions;
      } else {
        options = standardOptions;
      }
    }

    return (
      <div className="product_dropdwn">
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
            <option defaultValue>Choose...</option>
            <option value="standard">Standard Event</option>
            <option value="express">Express Event</option>
            <option value="flex">Flex Event</option>
          </select>
        </div>
        <div className="input-group mb-3 mr-2">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Category
            </label>
          </div>
          <select
            className="custom-select"
            onChange={this.onChange}
            name="category"
          >
            {options}
          </select>
        </div>
        <div className="input-group mb-3 mr-2">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Sub Category
            </label>
          </div>
          <select
            className="custom-select"
            onChange={this.onChange}
            name="subCat"
          >
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-info button"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Dropdown;
