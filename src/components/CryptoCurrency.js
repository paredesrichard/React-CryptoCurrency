import React, { Component } from "react";
//import "./CryptoCurrency.css";
import styled from "styled-components";

const StyledCryptoCurItem = styled.li`
  padding: 1rem 2rem 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  min-width: 9rem;
  border: solid 1px rgba(0, 0, 0, 0.05);

  ${props => {
    switch (props.id) {
      case "bitcoin":
        return "background-color: #fbe2c3; border-bottom: solid 4px #f7931a;";
      case "ethereum":
        return "background-color: #c2c9ff; border-bottom: solid 4px #454a75;";
      case "litecoin":
        return "background-color: #ececec; border-bottom: solid 4px #bebebe;";
      default:
        return "";
    }
  }};
`;

class CryptoCurrency extends Component {
  render() {
    const {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d
    } = this.props.data;

    return (
      <StyledCryptoCurItem id={id}>
        <p className="cryptocurrencty-name">
          {" "}
          {name} ({symbol})
        </p>
        <h1>${(+price_usd).toFixed(2)}</h1>
        <p>{percent_change_1h}% 1hr</p>
        <p>{percent_change_24h}% 24hrs</p>
        <p>{percent_change_7d}% 7days</p>
      </StyledCryptoCurItem>
    );
  }
}

export default CryptoCurrency;
