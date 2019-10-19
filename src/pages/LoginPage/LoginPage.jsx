import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class LoginPage extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="component">
        <header>
          <p>Login Page: I am a Login Page!</p>
        </header>

        <h1>Log In</h1>
        
        <form onSubmit={this.handleSubmit} >
          <div>
            <div >
              <input 
                type="email"
                placeholder="Email" 
                value={this.state.email} 
                name="email" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          
          <div>
            <div >
              <input 
                type="password"
                placeholder="Password" 
                value={this.state.pw} 
                name="pw" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          
          <div>
            <div>
              <button>Log In</button>
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default LoginPage;
