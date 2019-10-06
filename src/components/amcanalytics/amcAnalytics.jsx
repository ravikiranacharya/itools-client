import React, { Component } from "react";
import AMCOverview from "./amcOverview";
import { fetchAMCUniversalOverview } from "../../services/amcAnalytics";

class AMCAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const amcOverview = await fetchAMCUniversalOverview();
    this.setState({ amcOverview });
  }
  render() {
    const { amcOverview } = this.state;
    return <AMCOverview data={amcOverview}></AMCOverview>;
  }
}

export default AMCAnalytics;
