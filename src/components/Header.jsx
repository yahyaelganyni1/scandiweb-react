import React, { Component } from 'react';
import logo from '../images/logo.svg';
import cart from '../images/cart.svg';
import './header.scss';
import { Link } from 'react-router-dom';
import Currency from './Currency.jsx';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <Link to="/">
              <li>All</li>
            </Link>
            <Link to="/clothes">
              <li>clothes</li>
            </Link>
            <Link to="/tech">
              <li>Tech</li>
            </Link>
          </ul>
          <Link to="/">
            <img src={logo} alt="website logo" />
          </Link>
          <ul>
            <li className="currency-dropdown">
              <Currency />
            </li>
            <li>
              <Link to="/cart">
                <img src={cart} alt="cart logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
