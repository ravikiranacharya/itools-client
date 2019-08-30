import React, { Component } from "react";
import FundManagerName from "./fundManagerName";
import {
  fetchFundManagerOverview,
  fetchSchemesManaged,
  fetchRiskReturnStatistics,
  fetchAllFundManagers,
  fetchPeerSchemePerformance,
  fetchFundManagerPerformanceOverTime
} from "./../../services/fundManagerAnalytics";
import FundManagerOverview from "./fundManagerOverview";
import FundManagerSchemes from "./fundManagerSchemes";
import FundManagerRiskReturnStatistics from "./fundManagerRiskReturnStatistics";
import PeerComparision from "./peerComparision";
import FundManagerPerformanceOverTime from "./fundManagerPerformanceOverTime";
import Spinner from "./../common/spinner";

class FundManagerAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const fundManagerId = this.props.match.params.id || 1;
    const data = await fetchFundManagerOverview(fundManagerId);
    const fundManagers = await fetchAllFundManagers();
    const schemes = await fetchSchemesManaged(fundManagerId);
    const riskReturnStatistics = await fetchRiskReturnStatistics(fundManagerId);
    const peerSchemePerformance = await fetchPeerSchemePerformance(
      fundManagerId
    );
    const fundManagerPerformanceOverTime = await fetchFundManagerPerformanceOverTime(
      fundManagerId
    );
    this.setState({
      data,
      schemes,
      fundManagers,
      riskReturnStatistics,
      peerSchemePerformance,
      fundManagerPerformanceOverTime
    });
  }

  async componentWillReceiveProps(nextProps) {
    const fundManagerId = nextProps.match.params.id || 1;
    const data = await fetchFundManagerOverview(fundManagerId);
    const schemes = await fetchSchemesManaged(fundManagerId);
    const riskReturnStatistics = await fetchRiskReturnStatistics(fundManagerId);
    const peerSchemePerformance = await fetchPeerSchemePerformance(
      fundManagerId
    );
    const fundManagerPerformanceOverTime = await fetchFundManagerPerformanceOverTime(
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
    if (!this.state.data) return <Spinner></Spinner>;

    const {
      data,
      schemes,
      fundManagers,
      riskReturnStatistics,
      peerSchemePerformance,
      fundManagerPerformanceOverTime
    } = this.state;

    return (
      <React.Fragment>
        <FundManagerName data={data} fundManagers={fundManagers} />
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
