import React, { Component } from "react";

class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCat: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    console.log(this.state.product);
    console.log(this.state.category);
  }

  render() {
    const { product, category } = this.props;

    const eventDetail = [
      { label: "* Select Sub Category", value: 0 },
      { label: "General", value: "general" },
      { label: "Planning", value: "planning" },
      { label: "Agenda Items", value: "agendaItems" },
      { label: "Pricing", value: "pricing" },
    ];

    const websiteRegistration = [
      { label: "* Select Sub Category", value: 0 },
      { label: "Webiste", value: "webiste" },
      { label: "Registration", value: "registration" },
      { label: "Onsite", value: "onsite" },
      { label: "Survey", value: "survey" },
    ];

    const promotionCommunication = [
      { label: "* Select Sub Category", value: 0 },
      { label: "Web", value: "web" },
      { label: "Email", value: "email" },
      { label: "Alerts", value: "alerts" },
    ];

    const inviteeManagement = [
      { label: "* Select Sub Category", value: 0 },
      { label: "Manage", value: "manage" },
      { label: "Qucik Action", value: "quickAction" },
      { label: "Import", value: "import" },
      { label: "Assign", value: "assign" },
    ];

    const reporting = [
      { label: "* Select Sub Category", value: 0 },
      { label: "Standard Reporting", value: "standard" },
      { label: "Custom Reporting", value: "custom" },
    ];

    const eventDetailOptions = eventDetail.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const websiteRegistrationOptions = websiteRegistration.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const promotionCommunicationOptions = promotionCommunication.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const inviteeManagementOptions = inviteeManagement.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const reportingOptions = reporting.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    let subCategoryOptions;
    if (category === "eventDetails") {
      subCategoryOptions = eventDetailOptions;
    } else {
      if (category === "websiteRegistartion") {
        subCategoryOptions = websiteRegistrationOptions;
      } else {
        if (category === "promotionCommunication") {
          subCategoryOptions = promotionCommunicationOptions;
        } else {
          if (category === "inviteeManagement") {
            subCategoryOptions = inviteeManagementOptions;
          } else {
            if (category === "reporting") {
              subCategoryOptions = reportingOptions;
            }
          }
        }
      }
    }
    return (
      <div className="category">
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
      </div>
    );
  }
}

export default SubCategory;
