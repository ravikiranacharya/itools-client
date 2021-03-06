import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EasyTooltip from "../common/easyTooltip";

class FundManagerPerformanceOverTime extends Component {
  state = {};

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const { data } = this.state;
    const options = {
      chart: {
        type: "column",
        height: 480
      },
      title: false,
      credits: false,
      legend: false,
      xAxis: {
        title: false,
        type: "datetime"
      },
      yAxis: {
        title: {
          text: "Return"
        },
        labels: {
          formatter: function() {
            return this.value + "%";
          }
        },
        gridLineWidth: 0
      },

      tooltip: {
        pointFormat: "Return: <b>{point.y:.2f}</b>%"
      },

      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        }
      },
      series: [
        {
          data: data.map(e => {
            return {
              x: Date.parse(e.date),
              y: e.return,
              color: e.color
            };
          })
        }
      ]
    };

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Fund Manager Performance Over Time
          </h6>
          <div className="dropdown no-arrow">
            <EasyTooltip title={`Current fund manager's returns over time.`} />
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area performance-chart">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              ref={this.chartComponent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FundManagerPerformanceOverTime;
