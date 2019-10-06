import React, { Component } from "react";
import Box from "./../common/box";

class AMCOverview extends Component {
  state = {};
  render() {
    return (
      <div className="row p-2">
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="primary"
            icon="fa-money"
            title={
              <React.Fragment>
                <div>Total Schemes</div>
                <div className="text-grey-50 small">across all AMCs</div>
              </React.Fragment>
            }
            // value={schemesCount}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="success"
            icon="fa-list"
            title={
              <React.Fragment>
                <div>Total AUM</div>
                <div className="text-grey-50 small">as on 06-Oct-2019</div>
              </React.Fragment>
            }
            // value={aum + aumDenomination}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="info"
            icon="fa-line-chart"
            title={
              <React.Fragment>
                <div>Return (1y)</div>
                <div className="text-grey-50 small">as on 06-Oct-2019</div>
              </React.Fragment>
            }
            // value={topInvestor.investedAmount + topInvestor.denomination}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="warning"
            icon="fa-area-chart"
            title={
              <React.Fragment>
                <div>Return (3y)</div>
                <div className="text-grey-50 small">as on 06-Oct-2019</div>
              </React.Fragment>
            }
            // value={maximumDependant.weightage + "%"}
          />
        </div>
      </div>
    );
  }
}

export default AMCOverview;
