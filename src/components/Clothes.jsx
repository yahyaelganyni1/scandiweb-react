import React, { Component } from 'react';
import './products.scss';
import cart from '../images/cart.svg';
import { Link } from 'react-router-dom';

class Clothes extends Component {
  render() {
    const { product } = this.props;
    return (
      <li
        key={product.id}
        className={!product.inStock ? 'out-of-stock' : 'zoom'}
      >
        {!product.inStock ? <p className="watermark">Out Of Sock</p> : ''}
        {product.inStock ? (
          <button className="cart hidden">
            <img src={cart} alt="" />
          </button>
        ) : (
          ''
        )}

        <img src={product.gallery[0]} alt="product img" width="200" />
        <h2>
          <Link to={`/${product.id}`}>{product.name}</Link>
        </h2>
        <p>
          {product.prices[0].amount} {product.prices[0].currency.symbol}
        </p>
      </li>
    );
  }
}

// export default graphql(GET_PRODUCTS)(withRouter(Products));

export default Clothes;
