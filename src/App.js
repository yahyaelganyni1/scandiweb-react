import React, { Component } from 'react'
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    )
  }
}
