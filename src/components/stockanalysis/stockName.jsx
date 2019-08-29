import React, { Component } from "react";
import TypeAhead from "./../common/typeAhead";
import history from "../../services/modules/history";

class StockName extends Component {
  state = {
    instruments: [],
    selectedInstrumentId: ""
  };

  async componentDidMount() {
    const { data, instruments } = this.props;
    this.setState({ data, instruments });
  }

  handleChange = async selectedOptions => {
    const selectedInstrumentId = selectedOptions[0]["instrumentId"];
    this.setState({ selectedInstrumentId }, () => {
      history.push(`/stock-analytics/${selectedInstrumentId}`);
    });
  };

  handleSubmit = e => {};

  render() {
    if (!this.state.data) return <div></div>;
    const { data, instruments } = this.state;
    return (
      <div className="row">
        <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <h3 className="text-left ml-2 mb-0 text-dark">
            {data.instrumentName}
          </h3>
          <h6 className="text-left pl-2 mt-0">
            Sector: {data.sector.sectorName}
          </h6>
        </div>

        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <TypeAhead
            data={instruments}
            labelKey="instrumentName"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            placeholder="Search security..."
            id="search-securities"
          />
        </div>
      </div>
    );
  }
}

export default StockName;
