import React, { Component } from "react";
import Box from "../common/box";
import Spinner from "../common/spinner";
import FundManagerName from "./fundManagerName";

class FundManagerOverview extends Component {
  state = {};

  componentWillMount() {
    const { data, fundManagers } = this.props;
    this.setState({ data, fundManagers });
  }

  render() {
    if (!(this.state.data && this.state.fundManagers))
      return <Spinner></Spinner>;

    const { data, fundManagers } = this.state;
    const { schemesCount, totalAUM, return1y, volatility } = data;
    return (
      <div>
        <div>
          <FundManagerName
            data={data}
            fundManagers={fundManagers}
          ></FundManagerName>
        </div>
        <div className="row p-2">
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="primary"
              icon="fa-th"
              title="Schemes managed"
              value={schemesCount}
            />
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="success"
              icon="fa-signal"
              title="AUM in all schemes"
              value={totalAUM.amount + totalAUM.denomination}
            />
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="info"
              icon="fa-line-chart"
              title="Return in 1 year"
              value={return1y + "%"}
            />
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
            <Box
              highlight="warning"
              icon="fa-flask"
              title="Volatility"
              value={volatility + "%"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FundManagerOverview;
