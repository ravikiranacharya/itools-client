import React, { Component } from "react";
import Spinner from "../common/spinner";

class AMCCard extends Component {
  state = {};

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <Spinner></Spinner>;
    const { data } = this.state;
    console.log(data);
    return (
      <div className="col-md-3 col-lg-3 col-sm-6 col-12 pb-2">
        <div className="card shadow flash-card animated--fade-in">
          <div className="card-header shadow text-left">
            <div className="row">{data.amcShortName}</div>
            <div className="row amc-full-name">{data.amcFullName}</div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <div className="card-value">{`${
                  data.return1y
                    ? `${parseFloat(data.return1y).toFixed(2)}%`
                    : "-"
                }`}</div>
                <div className="card-label">1y Return</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <div className="card-value">{`${
                  data.return3y
                    ? `${parseFloat(data.return3y).toFixed(2)}%`
                    : "-"
                }`}</div>
                <div className="card-label">3y Return</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <div className="card-value">6.54%</div>
                <div className="card-label">2y Sharpe</div>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <i className="fa text-info fa-money" />
                    <div className="card-label">'000 Cr</div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <div>1000</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <i className="fa text-info fa-list" />
                    <div className="card-label">#Schemes</div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <div>53</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AMCCard;
