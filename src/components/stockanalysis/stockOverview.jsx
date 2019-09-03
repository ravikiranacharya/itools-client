import React, { Component } from "react";
import StockName from "./stockName";
import Box from "../common/box";
import Spinner from "../common/spinner";

class StockOverview extends Component {
  state = {};

  componentDidMount() {
    const { data, instruments, details } = this.props;
    this.setState({ data, instruments, details });
  }

  render() {
    if (!(this.state.data && this.state.instruments && this.state.details))
      return <Spinner></Spinner>;

    const { data, instruments, details } = this.state;
    const {
      schemesCount,
      aum,
      aumDenomination,
      topInvestor,
      maximumDependant
    } = data;

    return (
      <div>
        <div>
          <StockName data={details} instruments={instruments} />
        </div>
        <div className="row p-2">
          <div className="col-md-3">
            <Box
              highlight="primary"
              icon="fa-th"
              title="Schemes invested in this security"
              value={schemesCount}
            />
          </div>
          <div className="col-md-3">
            <Box
              highlight="success"
              icon="fa-signal"
              title="Amount invested by all funds"
              value={aum + aumDenomination}
            />
          </div>
          <div className="col-md-3">
            <Box
              highlight="info"
              icon="fa-download"
              title={
                <React.Fragment>
                  <div>Maximum amount invested</div>
                  <div className="text-grey-50 small">{topInvestor.name}</div>
                </React.Fragment>
              }
              value={topInvestor.investedAmount + topInvestor.denomination}
            />
          </div>
          <div className="col-md-3">
            <Box
              highlight="warning"
              icon="fa-road"
              title={
                <React.Fragment>
                  <div>Maximum weightage allocated</div>
                  <div className="text-grey-50 small">
                    {maximumDependant.name}
                  </div>
                </React.Fragment>
              }
              value={maximumDependant.weightage + "%"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StockOverview;
