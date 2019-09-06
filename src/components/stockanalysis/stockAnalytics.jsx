import React, { Component } from "react";
import StockOverview from "./stockOverview";
import {
  fetchStockOverview,
  fetchAllStocks,
  fetchAMCWiseHoldings
} from "./../../services/stockAnalytics";
import MTMAllocation from "./../common/mtmAllocation";
import Spinner from "./../common/spinner";

class StockAnalytics extends Component {
  state = {};

  async componentWillMount() {
    const instrumentId = this.props.match.params.id || 1;

    try {
      const { data, amcHoldingData, instruments } = await this.fetchData(
        instrumentId
      );

      this.setState({
        data,
        amcHoldingData,
        instruments,
        currentInstrumentId: instrumentId
      });
    } catch (e) {}
  }

  async componentWillReceiveProps(nextProps) {
    const instrumentId = nextProps.match.params.id;

    try {
      const { data, amcHoldingData } = await this.fetchData(instrumentId);
      this.setState({ data, amcHoldingData });
    } catch (e) {}
  }

  fetchData = async instrumentId => {
    try {
      const data = await fetchStockOverview(instrumentId);
      const amcHoldingData = await fetchAMCWiseHoldings(instrumentId);
      const instruments = await fetchAllStocks();
      return { data, amcHoldingData, instruments };
    } catch (e) {
      return null;
    }
  };

  render() {
    if (
      !(this.state.data && this.state.amcHoldingData && this.state.instruments)
    )
      return <Spinner></Spinner>;

    const { amcHoldingData, instruments, data } = this.state;
    const { instrumentData, instrumentDetails } = data;

    return (
      <div>
        <StockOverview
          data={instrumentData}
          details={instrumentDetails}
          instruments={instruments}
        />
        <div className="row p-2">
          <MTMAllocation data={amcHoldingData} />
        </div>
      </div>
    );
  }
}

export default StockAnalytics;
