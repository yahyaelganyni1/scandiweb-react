import React, { Component } from 'react'
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/Product';
export default class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Product />
        </div>
      </Router>
    )
  }
}
