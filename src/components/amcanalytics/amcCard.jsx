import React, { Component } from "react";
import Spinner from "../common/spinner";

class AMCCard extends Component {
  state = {};

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  textColorClass = value => {
    return parseFloat(value) > 0 ? "text-success" : "text-danger";
  };

  render() {
    if (!this.state.data) return <Spinner></Spinner>;
    const { data } = this.state;

    return (
      <div className="col-md-3 col-lg-3 col-sm-6 col-12 pb-2">
        <div className="card shadow flash-card animated--fade-in">
          <div className="card-header shadow text-left">
            <div className="row">{data.amcShortName}</div>
            <div className="row amc-full-name">{data.amcFullName}</div>
          </div>
          <div className="card-body pb-1">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                <div className="row">
                  <div className="pull-right pl-3">
                    <span className="pull-left card-icon">
                      <i className="fa text-info fa-money" />
                      <div className="card-label">'000 Cr</div>
                    </span>
                    <span className="font-weight-bold">{`${
                      parseFloat(data.aum)
                        ? parseFloat(data.aum).toFixed(1)
                        : "-"
                    }`}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="pull-right pl-3">
                    <span className="pull-left card-icon">
                      <i className="fa text-info fa-list" />
                      <div className="card-label">#Schemes</div>
                    </span>
                    <span className="font-weight-bold">{`${data.schemesCount}`}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <div className="pb-1">
                      <div
                        className={`card-value ${this.textColorClass(
                          data.return1y
                        )}`}
                      >{`${
                        parseFloat(data.return1y)
                          ? `${parseFloat(data.return1y).toFixed(2)}%`
                          : "-"
                      }`}</div>
                      <div className="card-label">1y Return</div>
                    </div>
                    <div className="pb-1">
                      <div
                        className={`card-value ${this.textColorClass(
                          data.return3y
                        )}`}
                      >{`${
                        parseFloat(data.return3y)
                          ? `${parseFloat(data.return3y).toFixed(2)}%`
                          : "-"
                      }`}</div>
                      <div className="card-label">3y Return</div>
                    </div>
                    <div className="pb-1">
                      <div
                        className={`card-value ${this.textColorClass(
                          data.sharpeRatio
                        )}`}
                      >{`${
                        parseFloat(data.sharpeRatio)
                          ? `${parseFloat(data.sharpeRatio).toFixed(2)}`
                          : "-"
                      }`}</div>
                      <div className="card-label">2y Sharpe</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <div className="pb-1">
                      <div
                        className={`card-value ${this.textColorClass(
                          data.return2y
                        )}`}
                      >{`${
                        parseFloat(data.return2y)
                          ? `${parseFloat(data.return2y).toFixed(2)}%`
                          : "-"
                      }`}</div>
                      <div className="card-label">2y Return</div>
                    </div>
                    <div className="pb-1">
                      <div
                        className={`card-value ${this.textColorClass(
                          data.return5y
                        )}`}
                      >{`${
                        parseFloat(data.return5y)
                          ? `${parseFloat(data.return5y).toFixed(2)}%`
                          : "-"
                      }`}</div>
                      <div className="card-label">5y Return</div>
                    </div>
                    <div className="pb-1">
                      <div
                        className={`card-value ${this.textColorClass(
                          data.return1m
                        )}`}
                      >{`${
                        parseFloat(data.return1m)
                          ? `${parseFloat(data.return1m).toFixed(2)}%`
                          : "-"
                      }`}</div>
                      <div className="card-label">1m Return</div>
                    </div>
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
