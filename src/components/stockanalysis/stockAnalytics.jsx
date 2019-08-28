import React, { Component } from "react";
import StockName from "./stockName";
import StockOverview from "./stockOverview";
import {
  fetchStockOverview,
  fetchAMCWiseHoldings
} from "./../../services/stockAnalytics";
import MTMAllocation from "./../common/mtmAllocation";

class StockAnalytics extends Component {
  state = {};

  componentDidMount() {
    const instrumentId = this.props.match.params.id || 1;
    const data = { ...fetchStockOverview(instrumentId) };
    const amcHoldingData = { ...fetchAMCWiseHoldings(instrumentId) };
    this.setState({ data, amcHoldingData });
  }

  componentWillReceiveProps(nextProps) {
    const instrumentId = nextProps.match.params.id;
    const data = { ...fetchStockOverview(instrumentId) };
    const amcHoldingData = { ...fetchAMCWiseHoldings(instrumentId) };
    this.setState({ data, amcHoldingData });
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  render() {
    if (!(this.state.data && this.state.amcHoldingData))
      return <h6>No data found</h6>;

    const { instrumentData, instrumentDetails } = this.state.data;
    const { amcHoldingData } = this.state;

    return (
      <div>
        <StockName data={instrumentDetails} />
        <StockOverview data={instrumentData} />
        <div className="row p-2">
          <MTMAllocation data={amcHoldingData} />
        </div>
      </div>
    );
  }
}

export default StockAnalytics;
