import React, { Component } from 'react';
import logo from '../images/logo.svg';
import dropdown from '../images/dropdown.svg';
import cart from '../images/cart.svg';
import './header.scss';
import { Link } from 'react-router-dom';

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
            <li>
              $ <img src={dropdown} alt="dropdown logo" />
            </li>
            <li>
              <Link to="\">
                <img src={cart} alt="cart logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
