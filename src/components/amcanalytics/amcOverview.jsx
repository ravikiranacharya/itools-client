import React, { Component } from "react";
import Box from "./../common/box";
import Spinner from "./../common/spinner";

import _ from "lodash";

class AMCOverview extends Component {
  state = {};

  async componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  async componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <Spinner></Spinner>;
    const { data } = this.state;

    let return1y = _.find(data.returns, r => r.returnInterval === 12);
    let return3y = _.find(data.returns, r => r.returnInterval === 36);
    return (
      <div className="row p-2">
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="primary"
            icon="fa-list"
            title={
              <React.Fragment>
                <div>Total Schemes</div>
                <div className="text-grey-50 small">across all AMCs</div>
              </React.Fragment>
            }
            value={data.schemesCount}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="success"
            icon="fa-money"
            title={
              <React.Fragment>
                <div>Total AUM {data.aum.denomination}</div>
                <div className="text-grey-50 small">
                  as on {data.aum.declarationDate}
                </div>
              </React.Fragment>
            }
            value={data.aum.amount}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="info"
            icon="fa-line-chart"
            title={
              <React.Fragment>
                <div>Return (1y)</div>
                <div className="text-grey-50 small">
                  as on {return1y.returnDate}
                </div>
              </React.Fragment>
            }
            value={return1y.return + "%"}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-12 pb-sm-2 py-2">
          <Box
            highlight="warning"
            icon="fa-area-chart"
            title={
              <React.Fragment>
                <div>Return (3y)</div>
                <div className="text-grey-50 small">
                  as on {return3y.returnDate}
                </div>
              </React.Fragment>
            }
            value={return3y.return + "%"}
          />
        </div>
      </div>
    );
  }
}

export default AMCOverview;
