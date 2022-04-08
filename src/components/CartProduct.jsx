import React, { Component } from 'react';
import './CartProduct.scss';
import { Link } from 'react-router-dom';
export default class extends Component {
  render() {
    const { onAddToCart, onRemoveFromCart, product } = this.props;

    return (
      <div>
        <hr />
        <div className="cart-product">
          <div className="img-div">
            <div className="add-remove-btn">
              <Link to="/cart">
                <button onClick={() => onAddToCart(product)}>+</button>
              </Link>
              <p>{product.quantity} </p>
              <Link to="/cart">
                <button onClick={() => onRemoveFromCart(product)}>-</button>
              </Link>
            </div>
            <img src={product.gallery[0]} alt="" width={150} />
          </div>

          <div className="product-details">
            <br />
            <h2>
              <Link to={`/${product.id}`}>{product.name}</Link>
            </h2>
            <h3> {product.brand} </h3>
            <p className="price">
              {Math.floor(product.prices[0].amount * product.quantity)}
              {product.prices[0].currency.symbol}
            </p>
            {product.attributes.map((attribute, index) => (
              <ul key={index}>
                {attribute.items.map((item, index) => (
                  <li key={index}>{item.value}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
