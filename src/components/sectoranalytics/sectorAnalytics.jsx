import React, { Component } from "react";
import SectorName from "./sectorName";
import SectorOverview from "./sectorOverview";
import MTMAllocation from "./../common/mtmAllocation";

import {
  fetchAMCWiseHoldings,
  fetchSectorOverview,
  fetchAllSectors
} from "./../../services/sectorAnalytics";

class SectorAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const sectorId = this.props.match.params.id || 1;
    const data = await fetchSectorOverview(sectorId);
    const sectors = await fetchAllSectors();
    const amcHoldingData = await fetchAMCWiseHoldings(sectorId);
    console.log(amcHoldingData);
    this.setState({ data, sectors, amcHoldingData });
  }

  async componentWillReceiveProps(nextProps) {
    const sectorId = this.props.match.params.id || 1;
    const data = await fetchSectorOverview(sectorId);
    this.setState({ data }, async () => {
      const amcHoldingData = await fetchAMCWiseHoldings(sectorId);
      this.setState({ amcHoldingData });
    });
  }

  render() {
    if (!(this.state.data && this.state.amcHoldingData && this.state.sectors))
      return <div>Loading...</div>;

    const { amcHoldingData, sectors, data } = this.state;
    const { sectorDetails, sectorData } = data;

    return (
      <div>
        <SectorName data={sectorDetails} sectors={sectors} />
        <SectorOverview data={sectorData} />
        <div className="row p-2">
          <MTMAllocation data={amcHoldingData} />
        </div>
      </div>
    );
  }
}

export default SectorAnalytics;
