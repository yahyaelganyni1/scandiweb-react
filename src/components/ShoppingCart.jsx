// create shopping cart component

import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
// import { GET_PRODUCTS } from '../../graphql/queries';

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

// create a class cpmoponent
class ShoppingCart extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.products?.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.total}</td>
              </tr>
            ))}
          </tbody>
        </div>
        <Link to="/">
          <button>Back to Products</button>
        </Link>
      </div>
    );
  }
}

export default graphql(GET_PRODUCTS)(ShoppingCart); // pass the query to the component
