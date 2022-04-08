import React, { Component } from 'react';
import logo from '../images/logo.svg';
import cartLogo from '../images/cart.svg';
import './header.scss';
import { Link } from 'react-router-dom';
import Currency from './Currency.jsx';
// import ShoppingCart from './ShoppingCart';
import CartProduct from './CartProduct';

export default class Header extends Component {
  state = {
    display: false,
  };

  render() {
    const { cart } = this.props;
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
                <img src={cartLogo} alt="cart logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
