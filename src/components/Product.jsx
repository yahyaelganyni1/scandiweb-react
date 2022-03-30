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
        gallery
      }
    }
  }
`;

class Product extends Component {
  displayProducts = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    return data.categories[1].products.map((product) => (
      <li key={product.id}>
        <h2>{product.name}</h2>
        {
          new DOMParser().parseFromString(product.description, 'text/xml')
            .firstChild.innerHTML
        }
        <img src={product.gallery[1]} alt="" />
      </li>
    ));
  };

  render() {
    console.log(this.props.data.categories);
    return <ul>{this.displayProducts()}</ul>;
  }
}

export default graphql(GET_PRODUCTS)(Product);
