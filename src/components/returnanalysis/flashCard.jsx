import React, { Component } from "react";

class FlashCard extends Component {
  state = {};

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <h6>No data found</h6>;
    const { data } = this.state;
    return (
      <div className="card shadow flash-card animated--fade-in">
        <div className="card-header shadow text-left">
          <button
            type="button"
            className="close btn btn-dark btn-circle"
            aria-label="Close"
            value={data.instrumentId}
            onClick={this.props.onClose}
          >
            <span aria-hidden="true">-</span>
          </button>
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-8 col-8">
              <div>{data.instrumentName}</div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-8 col-8">
              <div className="scheme-returns text-left">
                <div className="small scheme-category">
                  Category: <strong>{data.categoryName}</strong>
                </div>
                <p className="small returns-date">
                  {data.fromDate || "-"} to {data.toDate || "-"}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-4">
              <h6 className="font-weight-bold">{data.return}%</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
