import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 pb-sm-2">
            <Box
              highlight="primary"
              icon="fa-th"
              title={
                <React.Fragment>
                  <div>Schemes invested</div>
                  <div className="text-grey-50 small">in this security</div>
                </React.Fragment>
              }
              value={schemesCount}
            />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 pb-sm-2">
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
          <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 pb-sm-2">
            <Box
              highlight="info"
              icon="fa-download"
              title={
                <React.Fragment>
                  <div>Max. amount invested</div>
                  <div className="text-grey-50 small">
                    <Link to={`/schemes/${topInvestor.id}`}>
                      [{topInvestor.name}]
                    </Link>
                  </div>
                </React.Fragment>
              }
              value={topInvestor.investedAmount + topInvestor.denomination}
            />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 pb-sm-2">
            <Box
              highlight="warning"
              icon="fa-road"
              title={
                <React.Fragment>
                  <div>Max. weightage allocated</div>
                  <div className="text-grey-50 small">
                    <Link to={`/schemes/${maximumDependant.id}`}>
                      [{maximumDependant.name}]
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

export default StockOverview;
