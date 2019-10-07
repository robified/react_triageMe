import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AdmissionFormPage from '../AdmissionFormPage/AdmissionFormPage';
import AboutPage from '../AboutPage/AboutPage';

class App extends Component {
    
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