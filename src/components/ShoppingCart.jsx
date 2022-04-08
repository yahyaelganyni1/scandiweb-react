// create shopping cart component

import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import cartLogo from '../images/cart.svg';
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  totalItems(cart) {
    const countProduct = cart.reduce((accum, item) => accum + item.quantity, 0);
    return countProduct;
  }

  render() {
    const { cart, onAddToCart, onRemoveFromCart } = this.props;
    return (
      <div className="shopping-Cart">
        <h1 className="cart-header">Cart</h1>
        {cart.length === 0 && (
          <h2 className="empty-shoppingCart">Shopping Cart is empty </h2>
        )}
        {cart.length > 0 && (
          <div>
            {cart.map((product, index) => (
              <CartProduct
                key={index}
                product={product}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
