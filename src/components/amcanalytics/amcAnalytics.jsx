import React, { Component } from "react";
import AMCOverview from "./amcOverview";
import {
  fetchAMCUniversalOverview,
  fetchAssetWiseAMCPerformance
} from "../../services/amcAnalytics";
import AMCCard from "./amcCard";
import Spinner from "../common/spinner";

class AMCAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const amcOverview = await fetchAMCUniversalOverview();
    const assetWisePerformance = await fetchAssetWiseAMCPerformance(null);
    this.setState({ amcOverview, assetWisePerformance });
  }

  render() {
    if (!(this.state.amcOverview && this.state.assetWisePerformance))
      return <Spinner></Spinner>;

    const { amcOverview, assetWisePerformance } = this.state;
    console.log(assetWisePerformance);
    return (
      <div>
        <AMCOverview data={amcOverview}></AMCOverview>
        <div className="row p-2">
          {assetWisePerformance.map(item => {
            return <AMCCard data={item} key={item.amcId}></AMCCard>;
          })}
        </div>
      </div>
    );
  }
}

export default AMCAnalytics;
