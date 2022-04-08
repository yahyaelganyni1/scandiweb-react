import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './singleProduct.scss';
class SingleProduct extends Component {
  state = {
    image: this.props.product.gallery[0],
  };

  render() {
    const { product, onAddToCart, setSelectedSize } = this.props;
    return (
      <div key={product.key} className="single-product">
        <div className="image-display">
          <ul>
            {product.gallery.map((image, index) => {
              return (
                <li key={index}>
                  <img
                    src={image}
                    alt="product img"
                    width="60"
                    onClick={(e) => this.setState({ image: e.target.src })}
                  />
                </li>
              );
            })}
          </ul>
          <img
            src={this.state.image}
            alt="selected img"
            className="selected-img"
          />
        </div>
        <div className="product-description">
          <h1>{product.name}</h1>
          <p>{product.brand}</p>
          {product.attributes.map((attribute, index) => (
            <div key={index}>
              <p>{attribute.name}</p>
              <ul className="size">
                {attribute.items.map((item, index) => (
                  <li key={index} onClick={() => setSelectedSize(item.value)}>
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p> PRICE: </p>
          <h4>
            {product.prices[0].amount} {product.prices[0].currency.symbol}
          </h4>
          <button onClick={() => onAddToCart(product)}>Add To Cart</button>
          {product.description}
        </div>
      </div>
    );
  }
}

export default withRouter(SingleProduct);
