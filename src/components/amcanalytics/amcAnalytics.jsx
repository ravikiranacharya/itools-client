import React, { Component } from "react";
import AMCOverview from "./amcOverview";
import {
  fetchAMCUniversalOverview,
  fetchAssetWiseAMCPerformance
} from "../../services/amcAnalytics";

class AMCAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const amcOverview = await fetchAMCUniversalOverview();
    const assetWisePerformance = await fetchAssetWiseAMCPerformance(null);
    this.setState({ amcOverview, assetWisePerformance });
  }

  render() {
    const { amcOverview } = this.state;
    return <AMCOverview data={amcOverview}></AMCOverview>;
  }
}

export default AMCAnalytics;
