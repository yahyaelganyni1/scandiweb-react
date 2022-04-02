import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const GET_PRODUCTS = gql`
  {
    currencies {
      symbol
    }
  }
`;

class Currency extends Component {
  render() {
    const { data } = this.props;
    console.log(data.currencies);

    return (
      <select>
        {data.currencies?.map((currency, index) => (
          <option key={index}>{currency.symbol}</option>
        ))}
      </select>
    );
  }
}

export default graphql(GET_PRODUCTS)(Currency);
