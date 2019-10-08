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
    componentDidMount() {
        console.log('App: componentDidMount');
    }
     
    render() {
        console.log('App: render');
        return (     
            <div className="App component">
                <header>
                    <h1>App: Triage Me+!</h1>
                </header>
                
                <Switch>
                    <Route exact path='/' render={(props) =>
                        <>
                            <NavBar
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                        </>
                    }/>

                    <Route path='/about' render={(props) => (
                        <>
                            <AboutPage {...props} />
                        </>
                    )}/>
                    
                    <Route exact path='/admissionform' render={(props) => (
                        <>
                            <AdmissionFormPage {...props} />
                        </>
                    )}/>

                    <Route path='/signup' render={({history}) =>
                        <>
                            <SignupPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        </>
                    }/>

                    <Route path='/login' render={({history}) =>
                        <>
                            <LoginPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        </>
                    }/>

                    <Route path='/logout' render={(props) =>
                        <>
                            <NavBar {...props}/>
                        </>
                    }/>
                </Switch>
            </div>
        )
    }
};

export default App;