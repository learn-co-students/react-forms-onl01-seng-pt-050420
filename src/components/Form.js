import React, { Component } from 'react';

export default class Form extends Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry"
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}