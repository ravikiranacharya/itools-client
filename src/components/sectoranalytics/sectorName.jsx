import React, { Component } from "react";
import { fetchAllSectors } from "./../../services/sectorAnalytics";
import history from "../../services/modules/history";
import TypeAhead from "./../common/typeAhead";

class SectorName extends Component {
  state = {
    selectedSectorId: ""
  };

  componentDidMount() {
    const { data, sectors } = this.props;
    this.setState({ data, sectors });
  }

  handleChange = async selectedOptions => {
    const selectedSectorId = selectedOptions[0]["sectorId"];
    this.setState({ selectedSectorId }, () => {
      history.push(`/sector-analytics/${selectedSectorId}`);
    });
  };

  handleSubmit = e => {};

  render() {
    if (!(this.state.data && this.state.sectors)) return <h6>No data found</h6>;
    const { sectors, data } = this.state;
    return (
      <div className="row">
        <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <h3 className="text-left ml-2 mb-0 text-dark">{data.sectorName}</h3>
          <h6>&nbsp;</h6>
        </div>

        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <TypeAhead
            data={sectors}
            labelKey="sectorName"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            placeholder="Search sector..."
            id="search-sector"
          />
        </div>
      </div>
    );
  }
}

export default SectorName;
