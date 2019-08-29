import React, { Component } from "react";
import StockName from "./stockName";
import StockOverview from "./stockOverview";
import {
  fetchStockOverview,
  fetchAllStocks,
  fetchAMCWiseHoldings
} from "./../../services/stockAnalytics";
import MTMAllocation from "./../common/mtmAllocation";

class StockAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const instrumentId = this.props.match.params.id || 1;
    const data = await fetchStockOverview(instrumentId);
    const amcHoldingData = await fetchAMCWiseHoldings(instrumentId);
    const instruments = await fetchAllStocks();
    this.setState({ data, amcHoldingData, instruments });
  }

  async componentWillReceiveProps(nextProps) {
    const instrumentId = nextProps.match.params.id;
    const data = await fetchStockOverview(instrumentId);
    const amcHoldingData = await fetchAMCWiseHoldings(instrumentId);
    this.setState({ data, amcHoldingData });
  }

  render() {
    if (
      !(this.state.data && this.state.amcHoldingData && this.state.instruments)
    )
      return <div>Loading...</div>;

    const { instrumentData, instrumentDetails } = this.state.data;
    const { amcHoldingData, instruments } = this.state;

    return (
      <div>
        <StockName data={instrumentDetails} instruments={instruments} />
        <StockOverview data={instrumentData} />
        <div className="row p-2">
          <MTMAllocation data={amcHoldingData} />
        </div>
      </div>
    );
  }
}

export default StockAnalytics;
