import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AdmissionForm extends Component {
    state = {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    componentDidMount() {
        console.log('AdmissionForm: componentDidMount')
    }
  
    componentWillUnmount() {
        console.log('AdmissionForm: componentWillUnmount')
    }
  

    handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.firstName]: e.target.value,
          [e.target.lastName]: e.target.value,
        });
    }

    render() {
        console.log('AdmissionForm: render')
        return (
            <div>
                First Name: <input 
                    type="text" 
                    placeholder="First Name" 
                    value={this.state.name} 
                    name="firstName"
                />
                <br />
                Last Name: <input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName"
                    value={this.state.name} 
                />
                
                <br />
                
                <button>Submit</button> 
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}

export default AdmissionForm;