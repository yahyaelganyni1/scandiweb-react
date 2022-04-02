// create shopping cart component

import React from 'react';
import { Link } from 'react-router-dom';

// create a class cpmoponent
class ShoppingCart extends React.Component {
  render() {
    const { cart, onAddToCart } = this.props;
    console.log(cart);
    return (
      <div>
        {cart.length === 0 && <h2>Shopping Cart is empty </h2>}

        {cart.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>
              {product.prices[0].amount} {product.prices[0].currency.symbol}
            </p>
            <button onClick={() => onAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
