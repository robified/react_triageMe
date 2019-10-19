import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import AdmissionFormPage from '../AdmissionFormPage/AdmissionFormPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // Initialize user if there's a token, otherwise null
            user: userService.getUser()
        };
    }

    
    /*--- Callback Methods ---*/
    handleLogout = () => {
        userService.logout();
        //will remove user object from state
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
    }
    
    /*---------- Lifecycle Methods ----------*/
    
     
    render() {
        
        return (     
            <div className="App component">                
                <Switch>
                    <Route exact path='/' render={(props) =>
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                            
                            <header>
                                <h1>App: Triage Me+!</h1>
                            </header>
                        </>
                    }/>

                    <Route path='/about' render={(props) => (
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                            <AboutPage {...props} />
                        </>
                    )}/>
                    
                    <Route exact path='/admissionform' render={(props) => (
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                            <AdmissionFormPage {...props} />
                        </>
                    )}/>

                    <Route path='/login' render={({history}) =>
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                            <LoginPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        </>
                    }/>

                    <Route path='/signup' render={({history}) =>
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                            <SignupPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        </>
                    }/>

                    <Route path='/logout' render={(props) =>
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                        </>
                    }/>
                </Switch>
            </div>
        )
    }
};

export default App;