import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import cart from '../images/cart.svg';

const GET_PRODUCTS = gql`
  query {
    category(input: { title: "clothes" }) {
      name
      products {
        id
        name
        inStock
        description
        brand
        gallery
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  }
`;

class Clothes extends Component {
  displayProducts = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    return data.category.products.map((product) => (
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
        <h2>{product.name}</h2>
        <p>
          {product.prices[0].amount} {product.prices[0].currency.symbol}
        </p>
      </li>
    ));
  };

  render() {
    return <ul className="products">{this.displayProducts()} </ul>;
  }
}

export default graphql(GET_PRODUCTS)(Clothes);
