import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';

function App() {
    return (
        <Router>
            <h1>prince</h1>
            <Navbar />
            <Switch>
                <Router path='/' />
            </Switch>
        </Router>
    );
}
export default App;