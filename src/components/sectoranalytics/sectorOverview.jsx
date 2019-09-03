import React, { Component } from "react";
import { Link } from "react-router-dom";
import SectorName from "./sectorName";
import Box from "../common/box";
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
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="primary"
              icon="fa-th"
              title={
                <React.Fragment>
                  <div>Schemes invested</div>
                  <div className="text-grey-50 small">in this sector</div>
                </React.Fragment>
              }
              value={schemesCount}
            />
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="success"
              icon="fa-signal"
              title={
                <React.Fragment>
                  <div>Amount invested</div>
                  <div className="text-grey-50 small">by all funds</div>
                </React.Fragment>
              }
              value={aum + aumDenomination}
            />
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="info"
              icon="fa-download"
              title={
                <React.Fragment>
                  <div>Max. amount invested</div>
                  <div className="text-grey-50 small">
                    <Link to={`/schemes/${topInvestor.id}`}>
                      {topInvestor.name}
                    </Link>
                  </div>
                </React.Fragment>
              }
              value={topInvestor.investedAmount + topInvestor.denomination}
            />
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="warning"
              icon="fa-road"
              title={
                <React.Fragment>
                  <div>Max. weightage allocated</div>
                  <div className="text-grey-50 small">
                    <Link to={`/schemes/${maximumDependant.id}`}>
                      {maximumDependant.name}
                    </Link>
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
