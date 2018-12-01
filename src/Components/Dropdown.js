import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      category: '',
      subCat: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit() {
    console.log('button clicked');
    console.log(this.state.product);
  }

  render() {
    const product = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];
    return (
      <div className='product_dropdwn'>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Product
          </label>
        </div>
        <select className="custom-select" onChange={this.onChange} name='product'>
          <option defaultValue>Choose...</option>
          <option value="standard">Standard Event</option>
          <option value="express">Express Event</option>
          <option value="flex">Flex Event</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Category
          </label>
        </div>
        <select className="custom-select" onChange={this.onChange} name='category'>
          <option defaultValue>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Sub Category
          </label>
        </div>
        <select className="custom-select" onChange={this.onChange} name='subCat'>
          <option defaultValue>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div>
      <button type="submit" className='btn btn-info button' onClick={this.onSubmit}>Submit</button>
      </div>
      </div>
    );
  }
}

export default Dropdown;
