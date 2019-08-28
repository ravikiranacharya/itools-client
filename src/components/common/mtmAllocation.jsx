import React, { Component } from "react";
import AMCHolding from "./../stockanalysis/amcHolding";
import SchemeHolding from "./schemeHolding";

class MTMAllocation extends Component {
  state = {
    originalSchemes: []
  };

  componentDidMount() {
    const { data: amcHoldingData } = this.props;
    this.setState({ amcHoldingData, originalSchemes: amcHoldingData.Schemes });
  }

  filterSchemes = amcId => {
    const { originalSchemes } = this.state;
    const amcHoldingData = { ...this.state.amcHoldingData };

    if (!amcId) {
      amcHoldingData.Schemes = originalSchemes;
    } else {
      const schemes = originalSchemes.filter(item => {
        return item.amcId === amcId;
      });

      amcHoldingData.Schemes = schemes;
    }

    this.setState({ amcHoldingData });
  };

  render() {
    if (!this.state.amcHoldingData) return <h6>No data found</h6>;
    const { amcHoldingData } = this.state;
    return (
      <React.Fragment>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <AMCHolding
            title="AMCs holding the security"
            data={amcHoldingData.AMCs}
            onFiltered={this.filterSchemes}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <SchemeHolding
            title="Schemes holding the security"
            data={amcHoldingData.Schemes}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MTMAllocation;
