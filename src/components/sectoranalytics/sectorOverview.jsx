import React, { Component } from "react";
import SectorName from "./sectorName";
import Box from "../stockanalysis/box";
import Spinner from "../common/spinner";

class SectorOverview extends Component {
  state = {};

  componentDidMount() {
    const { data, details, sectors } = this.props;
    this.setState({ data, details, sectors });
  }

  render() {
    if (!(this.state.data && this.state.details && this.state.sectors))
      return <Spinner></Spinner>;

    const { data, details, sectors } = this.state;

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
          <SectorName data={details} sectors={sectors} />
        </div>
        <div className="row p-2">
          <div className="col-md-3">
            <Box
              highlight="primary"
              icon="fa-th"
              title="Schemes invested in this sector"
              value={schemesCount}
            />
          </div>
          <div className="col-md-3">
            <Box
              highlight="success"
              icon="fa-signal"
              title="Amount invested in this sector"
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

export default SectorOverview;
