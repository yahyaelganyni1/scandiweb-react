import React, { Component } from 'react'
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Clothes from './components/Clothes';
import Tech from './components/Tech';


class App extends Component {


  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>

            <Route path="/" element={<Products />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </div>
      </Router>
    )
  }
}


// export default graphql(GET_PRODUCTS)(App);

export default App;
