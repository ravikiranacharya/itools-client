import React, { Component } from "react";
import AMCOverview from "./amcOverview";
import {
  fetchAMCUniversalOverview,
  fetchAssetWiseAMCPerformance
} from "../../services/amcAnalytics";
import AMCCard from "./amcCard";
import Spinner from "../common/spinner";
import SortBar from "./sortBar";

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
    const sortItems = [
      { id: 1, label: "Name", value: "amcName" },
      { id: 2, label: "1y Return", value: "return1y" },
      { id: 3, label: "3y Return", value: "return3y" },
      { id: 4, label: "Sharpe Ratio", value: "sharpeRatio" }
    ];

    return (
      <div>
        <SortBar title="Sort" items={sortItems}></SortBar>
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
