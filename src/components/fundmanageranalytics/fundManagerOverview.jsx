import React, { Component } from "react";
import Box from "./../stockanalysis/box";

class FundManagerOverview extends Component {
  state = {};

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const { schemesCount, totalAUM, return1y, volatility } = this.state.data;
    return (
      <div className="row p-2">
        <div className="col-md-3">
          <Box
            highlight="primary"
            icon="fa-th"
            title="Schemes managed"
            value={schemesCount}
          />
        </div>
        <div className="col-md-3">
          <Box
            highlight="success"
            icon="fa-signal"
            title="AUM in all schemes"
            value={totalAUM.amount + totalAUM.denomination}
          />
        </div>
        <div className="col-md-3">
          <Box
            highlight="info"
            icon="fa-download"
            title="Return in 1 year"
            value={return1y + "%"}
          />
        </div>
        <div className="col-md-3">
          <Box
            highlight="warning"
            icon="fa-road"
            title="Volatility"
            value={volatility + "%"}
          />
        </div>
      </div>
    );
  }
}

export default FundManagerOverview;
