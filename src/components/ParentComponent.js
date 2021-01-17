import React from 'react'
import DisplayData from './DisplayData'
import Form from './Form'

export default class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div>
            <Form
            formData={this.state}
            handleChange={this.handleChange}
            />
            <DisplayData formData={this.state}/>
            </div>

        )
    }
}