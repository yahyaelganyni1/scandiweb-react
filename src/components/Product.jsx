import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        category
        id
        name
        inStock
        description
        brand
      }
    }
  }
`;

class Product extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default graphql(GET_PRODUCTS)(Product);
