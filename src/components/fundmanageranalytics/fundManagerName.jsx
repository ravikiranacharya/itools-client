import React, { Component } from "react";
import TypeAhead from "./../common/typeAhead";
import { fetchAllFundManagers } from "./../../services/fundManagerAnalytics";
import history from "../../services/modules/history";

class FundManagerName extends Component {
  state = {
    fundManagers: [],
    selectedFundManagerId: ""
  };

  componentDidMount() {
    const { data, fundManagers } = this.props;
    this.setState({ fundManagers, data });
  }

  handleChange = async selectedOptions => {
    const selectedFundManagerId = selectedOptions[0]["fundManagerId"];
    this.setState({ selectedFundManagerId }, () => {
      history.push(`/fund-manager-analytics/${selectedFundManagerId}`);
    });
  };

  render() {
    if (!(this.state.data && this.state.fundManagers))
      return <h6>No data found</h6>;

    const { data, fundManagers } = this.state;
    return (
      <div className="row">
        <div className="col-md-8 col-lg-9 col-sm-12 col-12">
          <h3 className="text-left ml-2 mb-0 text-dark">
            {data.fundManagerName}
          </h3>
          <h6>&nbsp;</h6>
        </div>

        <div className="col-md-4 col-lg-3 col-sm-12 col-12">
          <TypeAhead
            data={fundManagers}
            labelKey="fundManagerName"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            placeholder="Search fund manager..."
            id="search-sector"
          />
        </div>
      </div>
    );
  }
}

export default FundManagerName;
