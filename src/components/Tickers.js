import React, { Component } from "react";
import CryptoCurrency from "./CryptoCurrency";
import axios from "axios";
import styled from "styled-components";

const StyledTickers = styled.ul`
  list-style-type: none;
  padding: 0;
  display: inline-flex;
`;

class Tickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "ethereum",
          name: "Ethereum",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "litecoin",
          name: "Litecoin",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        }
      ]
    };
  }

  fetchCryptocurrencyData() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(response => {
        var wanted = ["bitcoin", "ethereum", "litecoin"];
        var result = response.data.filter(currency =>
          wanted.includes(currency.id)
        );
        this.setState({ data: result });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(
      () => this.fetchCryptocurrencyData(),
      60 * 1000
    );
  }

  render() {
    const tickers = this.state.data.map(currency => (
      <CryptoCurrency data={currency} key={currency.id} />
    ));
    return (
      <div>
        <StyledTickers>{tickers}</StyledTickers>
      </div>
    );
  }
}

export default Tickers;
