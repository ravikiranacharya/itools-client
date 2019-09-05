import React, { Component } from "react";

class FlashCard extends Component {
  state = {};

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  render() {
    return (
      <div className="card shadow flash-card animated--fade-in">
        <div className="card-header shadow text-left">
          <button
            type="button"
            className="close btn btn-dark btn-circle"
            aria-label="Close"
          >
            <span aria-hidden="true">-</span>
          </button>
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-8 col-8">
              <div>HDFC Hybrid Debt - G</div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-8 col-8">
              <div className="scheme-returns text-left">
                <div className="small scheme-category">
                  Category: <strong>Hybrid</strong>
                </div>
                <p className="small returns-date">
                  21st Jan-2018 to 21st Jan-2019
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-4">
              <h6 className="font-weight-bold">-6.35%</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
