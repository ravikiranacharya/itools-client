import React, { Component } from "react";
import SectorName from "./sectorName";
import SectorOverview from "./sectorOverview";
import MTMAllocation from "./../common/mtmAllocation";

import {
  fetchAMCWiseHoldings,
  fetchSectorOverview
} from "./../../services/sectorAnalytics";

class SectorAnalytics extends Component {
  state = {};

  componentDidMount() {
    const sectorId = this.props.match.params.id || 1;
    const data = fetchSectorOverview(sectorId);
    this.setState({ data }, () => {
      const amcHoldingData = { ...fetchAMCWiseHoldings(sectorId) };
      this.setState({ amcHoldingData });
    });
  }

  render() {
    if (!(this.state.data && this.state.amcHoldingData))
      return <h6>No data found</h6>;

    const { sectorDetails, sectorData } = this.state.data;
    const { amcHoldingData } = this.state;
    return (
      <div>
        <SectorName data={sectorDetails} />
        <SectorOverview data={sectorData} />
        <div className="row p-2">
          <MTMAllocation data={amcHoldingData} />
        </div>
      </div>
    );
  }
}

export default SectorAnalytics;
