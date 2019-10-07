import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AdmissionFormPage from '../AdmissionFormPage/AdmissionFormPage';

class App extends Component {
    
    /*---------- Lifecycle Methods ----------*/
    componentDidMount() {
        console.log('App: componentDidMount');
    }
     
    render() {
        console.log('App: render');
        return (     
            <div className="App component">
                <header>App: Triage Me+!</header>
                <Switch>
                    <Route exact path='/' render={() =>
                        <NavBar />    
                    } />

                    <Route exact path='/AdmissionFormPage' render={(props) => (
                        <AdmissionFormPage {...props} />
                    )}/>
                </Switch>
            </div>
        )
    }
};

export default App;