import React, { Component } from "react";
import SectorOverview from "./sectorOverview";
import MTMAllocation from "./../common/mtmAllocation";
import Spinner from "./../common/spinner";

import {
  fetchAMCWiseHoldings,
  fetchSectorOverview,
  fetchAllSectors
} from "./../../services/sectorAnalytics";

class SectorAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const sectorId = this.props.match.params.id || 1;

    const { data, sectors, amcHoldingData } = await this.fetchData(sectorId);
    this.setState({ data, sectors, amcHoldingData });
  }

  async componentWillReceiveProps(nextProps) {
    const sectorId = this.props.match.params.id || 1;

    const { data, amcHoldingData } = await this.fetchData(sectorId);
    this.setState({ data, amcHoldingData });
  }

  fetchData = async sectorId => {
    try {
      const data = await fetchSectorOverview(sectorId);
      const sectors = await fetchAllSectors();
      const amcHoldingData = await fetchAMCWiseHoldings(sectorId);

      return { data, sectors, amcHoldingData };
    } catch (e) {}
    return null;
  };

  render() {
    if (!(this.state.data && this.state.amcHoldingData && this.state.sectors))
      return <Spinner></Spinner>;

    const { amcHoldingData, sectors, data } = this.state;
    const { sectorDetails, sectorData } = data;

    return (
      <div>
        <SectorOverview
          data={sectorData}
          details={sectorDetails}
          sectors={sectors}
        />
        <div className="row p-2">
          <MTMAllocation data={amcHoldingData} />
        </div>
      </div>
    );
  }
}

export default SectorAnalytics;
