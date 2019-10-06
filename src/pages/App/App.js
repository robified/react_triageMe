import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
    
    /*---------- Lifecycle Methods ----------*/
    componentDidMount() {
        console.log('App: componentDidMount');
    }
     
    render() {
        console.log('App: render');
        return (
            <div className="App component">
                <Route path='/navbar' render={(props) => (
                    <NavBar {...props}/>
                )}/>
                
                <header>
                    <h1>App: Triage Me+!</h1>
                </header>
            </div>
        )
    }
};

export default App;