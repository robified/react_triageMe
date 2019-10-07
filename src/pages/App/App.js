import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
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
                            <NavBar {...props}/>
                        </>
                    } />

                    <Route exact path='/about' render={(props) => (
                        <>
                            <NavBar {...props}/>
                            <AboutPage {...props} />
                        </>
                    )}/>
                    
                    <Route exact path='/admissionform' render={(props) => (
                        <>
                            <NavBar {...props}/>
                            <AdmissionFormPage {...props} />
                        </>
                    )}/>

                    <Route exact path='/signup' render={(props) =>
                        <>
                            <NavBar {...props}/>
                        </>
                    } />

                    <Route exact path='/login' render={(props) =>
                        <>
                            <NavBar {...props}/>
                        </>
                    } />

                    <Route exact path='/logout' render={(props) =>
                        <>
                            <NavBar {...props}/>
                        </>
                    } />
                </Switch>
            </div>
        )
    }
};

export default App;