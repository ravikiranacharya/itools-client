import React, { Component } from "react";
import ScatterChart from "./scatterChart";
import EasyTooltip from "../common/easyTooltip";

class PeerComparision extends Component {
  state = {};

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }
  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const { data } = this.state;

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Schemes Managed vs. Universe
          </h6>
          <div className="dropdown no-arrow">
            <EasyTooltip
              title={`Risk Return comparision for current fund manager's schemes against all the schemes. 
              Hide/select schemes by clicking on the asset type.`}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area scatter-chart">
            <ScatterChart data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default PeerComparision;
