import React from 'react';

export default class Form extends React.Component {

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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   };
  //   let dataArray = this.state.submittedData.concat(formData);
  //   this.setState({
  //     submittedData: dataArray
  //   });
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div>
  //              <span>{data.firstName}</span>
  //              <span>{data.lastName}</span>
  //            </div>
  //   });
  // }

  render() {
    return (
      <div>
        <form>
          <input type="text" 
                 onChange={event => this.props.handleFirstNameChange(event)}
                 name="firstName"
                 value={this.props.formData.firstName} />
          <input type="text"
                 onChange={event => this.props.handleLastNameChange(event)}
                 name="lastName"
                 value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}