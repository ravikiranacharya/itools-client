import React, { Component } from "react";
import Box from "./box";

class StockOverview extends Component {
  render() {
    const {
      schemesCount,
      aum,
      aumDenomination,
      topInvestor,
      maximumDependant
    } = this.props.data;

    return (
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
    );
  }
}

export default StockOverview;
