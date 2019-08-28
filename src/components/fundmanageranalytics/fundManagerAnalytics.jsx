import React, { Component } from "react";
import FundManagerName from "./fundManagerName";
import {
  fetchFundManagerOverview,
  fetchSchemesManaged,
  fetchRiskReturnStatistics,
  fetchPeerSchemePerformance,
  fetchFundManagerPerformanceOverTime
} from "./../../services/fundManagerAnalytics";
import FundManagerOverview from "./fundManagerOverview";
import FundManagerSchemes from "./fundManagerSchemes";
import FundManagerRiskReturnStatistics from "./fundManagerRiskReturnStatistics";
import PeerComparision from "./peerComparision";
import FundManagerPerformanceOverTime from "./fundManagerPerformanceOverTime";

class FundManagerAnalytics extends Component {
  state = {};

  componentDidMount() {
    const fundManagerId = this.props.match.params.id || 1;
    const data = fetchFundManagerOverview(fundManagerId);
    const schemes = fetchSchemesManaged(fundManagerId);
    const riskReturnStatistics = fetchRiskReturnStatistics(fundManagerId);
    const peerSchemePerformance = fetchPeerSchemePerformance(fundManagerId);
    const fundManagerPerformanceOverTime = fetchFundManagerPerformanceOverTime(
      fundManagerId
    );
    this.setState({
      data,
      schemes,
      riskReturnStatistics,
      peerSchemePerformance,
      fundManagerPerformanceOverTime
    });
  }

  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const {
      data,
      schemes,
      riskReturnStatistics,
      peerSchemePerformance,
      fundManagerPerformanceOverTime
    } = this.state;

    return (
      <React.Fragment>
        <FundManagerName data={data} />
        <FundManagerOverview data={data} />
        <div className="row p-2">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs12">
            <FundManagerSchemes
              data={schemes}
              title="Schemes managed by Fund manager"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs12">
            <FundManagerRiskReturnStatistics data={riskReturnStatistics} />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <PeerComparision data={peerSchemePerformance} />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <FundManagerPerformanceOverTime
              data={fundManagerPerformanceOverTime}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FundManagerAnalytics;
