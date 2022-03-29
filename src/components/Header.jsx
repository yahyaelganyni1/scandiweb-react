import React, { Component } from 'react';
import logo from '../images/logo.svg';
import dropdown from '../images/dropdown.svg';
import cart from '../images/cart.svg';
import './header.scss';
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>women</li>
            <li>men</li>
            <li>kids</li>
          </ul>
          <img src={logo} alt="website logo" />
          <ul>
            <li>
              $<img src={dropdown} alt="dropdown logo" />
            </li>
            <li>
              <img src={cart} alt="cart logo" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
