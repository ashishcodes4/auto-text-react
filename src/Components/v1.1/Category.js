import React, { Component } from "react";
import SubCat from './SubCat';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { product } = this.props;
    //Category Dropdown options
    const standard = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "eventDetails" },
      { label: "Websie & Registration", value: "websiteRegistration" },
      { label: "Promotion & Communcation", value: "promotionCommunication" },
      { label: "Invitee Management", value: "inviteeManagement" },
      { label: "Reporting", value: "reporting" },
    ];

    const express = [
      { label: "* Select Category", value: 0 },
      { label: "Express Product 1", value: "Express Product 1" },
      { label: "Express Product 2", value: "Express Product 2" },
      { label: "Express Product 3", value: "Express Product 3" },
      { label: "Express Product 4", value: "Express Product 4" },
      { label: "Express Product 5", value: "Express Product 5" },
      { label: "Express Product 6", value: "Express Product 6" },
    ];

    const flex = [
      { label: "* Select Category", value: 0 },
      { label: "Flex Product 1", value: "Flex Product 1" },
      { label: "Flex Product 2", value: "Flex Product 2" },
      { label: "Flex Product 3", value: "Flex Product 3" },
      { label: "Flex Product 4", value: "Flex Product 4" },
      { label: "Flex Product 5", value: "Flex Product 5" },
    ];

    //Populate option tags in select tag
    const standardOptions = standard.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const expressOptions = express.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const flexOptions = flex.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    let CategoryOptions;
    if (product === "flex") {
      CategoryOptions = flexOptions;
    } else {
      if (product === "express") {
        CategoryOptions = expressOptions;
      } else {
        if(product === "standard") {
          CategoryOptions = standardOptions
        } else {
          CategoryOptions = null
        }
      }
    }

    return (
      <div className="category">
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
            {CategoryOptions}
          </select>
        </div>
        <SubCat product={this.props.product} category={this.state.category} />
      </div>
      
    );
  }
}

export default Category;
