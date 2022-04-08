import React, { Component } from 'react'
import Header from './components/Header';
import './App.css';
import { Route, withRouter, Link } from 'react-router-dom';
import Products from './components/Products';
import Clothes from './components/Clothes';
import Tech from './components/Tech';
import ShoppingCart from './components/ShoppingCart';
import SingleProduct from './components/SingleProduct';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

// let title = "all";
const GET_PRODUCTS = gql`
{
  categories {
    products {
        id
        name
        inStock
        description
        brand
        gallery
        attributes {
          name
          items {
            id
            displayValue
            value
          }
        }
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


class App extends Component {

  state = {
    cart: [],
    selectedSize: "",
  }


  onAddToCart = (product) => {
    let cloneProduct = structuredClone(product);

    const existingProduct = this.state.cart.find(p => p.id === cloneProduct.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    }
    else {
      cloneProduct.quantity = 1;
      this.setState({
        cart: [...this.state.cart, cloneProduct]
      })
    }
  }

  onRemoveFromCart = (product) => {

    const existingProduct = this.state.cart.find(p => p.id === product.id);
    if (existingProduct.quantity === 1) {
      this.setState({
        cart: this.state.cart.filter(p => p.id !== product.id)
      })
    }
    else {
      existingProduct.quantity -= 1;
    }
  }

  setSelectedSize = (e) => {
    this.setState({
      selectedSize: e,
    });
    console.log(e)
  };


  render() {
    const { data } = this.props;
    {
      if (data.loading) {
        return <div>Loading...</div>
      }
    }





    return (


      <div className="App">
        <Header cart={this.state.cart} onAddToCart={this.onAddToCart} onRemoveFromCart={this.onRemoveFromCart} />
        <ul className="products">
          {data.categories[0].products.map(product => (
            <Route exact path='/' >
              <Products product={product} key={product.key} onAddToCart={this.onAddToCart} />
            </Route>
          ))}
        </ul>
        <ul className="products">
          {data.categories[1].products.map(product => (
            <Route path="/clothes" exact  >
              <Clothes product={product} key={product.key} />
            </Route>

          ))}
        </ul>
        <ul className="products">
          {data.categories[2].products.map(product => (
            <Route path="/tech" exact >
              <Tech product={product} key={product.key} />
            </Route>
          ))}
        </ul>

        {data.categories[0].products.map(product =>
          <Route path={`/${product.id}`} >
            <SingleProduct product={product} key={product.key} onAddToCart={this.onAddToCart} setSelectedSize={this.setSelectedSize} bgColor={this.state.bgColor} />
          </Route>
        )}
        <Route path="/cart" exact >
          <ShoppingCart cart={this.state.cart} onAddToCart={this.onAddToCart} onRemoveFromCart={this.onRemoveFromCart} setSelectedSize={this.setSelectedSize} />
        </Route>
      </div>
    )
  }
}


export default graphql(GET_PRODUCTS)(withRouter(App));

// export default App;
