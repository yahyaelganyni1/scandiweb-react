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

    return (
      <select>
        {data.currencies?.map((currency, index) => (
          <option key={index} value={currency.symbol}>
            {currency.symbol}
          </option>
        ))}
      </select>
    );
  }
}

export default graphql(GET_PRODUCTS)(Currency);
