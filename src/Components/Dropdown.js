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
    console.log(this.state.category);
  }

  render() {
    const { product, category, subCat } = this.state;

    //Category Dropdown options
    const standardProduct = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "eventDetails" },
      { label: "Websie & Registration", value: "websiteRegistration" },
      { label: "Promotion & Communcation", value: "promotionCommunication" },
      { label: "Invitee Management", value: "InviteeManagement" },
      { label: "Reporting", value: "Reporting" },
    ];

    const expressProduct = [
      { label: "* Select Category", value: 0 },
      { label: "Express Product 1", value: "Express Product 1" },
      { label: "Express Product 2", value: "Express Product 2" },
      { label: "Express Product 3", value: "Express Product 3" },
      { label: "Express Product 4", value: "Express Product 4" },
      { label: "Express Product 5", value: "Express Product 5" },
      { label: "Express Product 6", value: "Express Product 6" },
    ];

    const flexProduct = [
      { label: "* Select Category", value: 0 },
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

    let CategoryOptions;
    if (product === "flex") {
      CategoryOptions = flexOptions;
    } else {
      if (product === "express") {
        CategoryOptions = expressOptions;
      } else {
        CategoryOptions = standardOptions;
      }
    }

    //Sub Category options

    const eventDetail = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "Event Details" },
      { label: "Websie & Registration", value: "Websie & Registration" },
      { label: "Promotion & Communcation", value: "Promotion & Communcation" },
      { label: "Invitee Management", value: "Invitee Management" },
      { label: "Reporting", value: "Reporting" },
    ];

    const websiteRegistration = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "Event Details" },
      { label: "Websie & Registration", value: "Websie & Registration" },
      { label: "Promotion & Communcation", value: "Promotion & Communcation" },
      { label: "Invitee Management", value: "Invitee Management" },
      { label: "Reporting", value: "Reporting" },
    ];

    const proomotionCommunication = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "Event Details" },
      { label: "Websie & Registration", value: "Websie & Registration" },
      { label: "Promotion & Communcation", value: "Promotion & Communcation" },
      { label: "Invitee Management", value: "Invitee Management" },
      { label: "Reporting", value: "Reporting" },
    ];

    const inviteeManagement = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "Event Details" },
      { label: "Websie & Registration", value: "Websie & Registration" },
      { label: "Promotion & Communcation", value: "Promotion & Communcation" },
      { label: "Invitee Management", value: "Invitee Management" },
      { label: "Reporting", value: "Reporting" },
    ];

    const reporting = [
      { label: "* Select Category", value: 0 },
      { label: "Event Details", value: "Event Details" },
      { label: "Websie & Registration", value: "Websie & Registration" },
      { label: "Promotion & Communcation", value: "Promotion & Communcation" },
      { label: "Invitee Management", value: "Invitee Management" },
      { label: "Reporting", value: "Reporting" },
    ];

    const eventDetailOptions = eventDetail.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const websiteRegistrationOptions = eventDetail.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const PromotionCommunicationOptions = eventDetail.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));
    const InviteeManagementOptions = eventDetail.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));
    const reportingOptions = eventDetail.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    let subCategoryOptions;
    if(category === 'eventDetails') {
      subCategoryOptions = eventDetailOptions;
    }

    return (
      <div className='container'>
        <h1 className='mt-2 mb-2'>Auto Text : Make your life easy</h1>
      <div className="product_dropdwn mt-5">
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
           {subCategoryOptions}
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
        <div className='description mt-3'>

        </div>
      </div>
      </div>
    );
  }
}

export default Dropdown;
