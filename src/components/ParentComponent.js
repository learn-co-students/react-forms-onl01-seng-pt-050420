import React, { Component } from "react";
import Form from "./Form";
import { DisplayData } from "./DisplayData";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Form 
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange} />
          <DisplayData formData={this.state} />
      </div>
    );
  }
}