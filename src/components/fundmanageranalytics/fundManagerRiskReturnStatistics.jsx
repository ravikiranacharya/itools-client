import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more.src";
import EasyTooltip from "../common/easyTooltip";

HighchartsMore(Highcharts);

class FundManagerRiskReturnStatistics extends Component {
  state = {};

  componentWillMount() {
    const data = this.props.data;
    this.setState({ data });
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  formatDataToSeries = data => {
    const maxAUM = data.AUM.maxAUM;
    const maxRadius = 10;
    const series = data.schemes.map(element => {
      return {
        x: element.risk, // Risk involved
        y: element.return, // Return of scheme
        z: (element.schemeAUM / maxAUM) * maxRadius, // Radius of the sphere
        name: element.schemeName,
        color: element.color,
        schemeId: element.schemeId,
        schemeName: element.schemeName
      };
    });

    return series;
  };

  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const { data } = this.state;
    const formattedData = this.formatDataToSeries(data);
    const options = {
      chart: {
        type: "bubble",
        plotBorderWidth: 0,
        zoomType: "xy",
        height: 320
      },
      title: false,
      credits: false,
      xAxis: {
        gridLineWidth: 0,
        visible: false
      },
      yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
      },
      tooltip: {
        formatter: function() {
          return `${this.point.name}<br/>
                    <strong>Risk:</strong> ${this.point.x}%<br/>
                    <strong>Return:</strong> ${this.point.y}%`;
        }
      },
      legend: false,
      series: [
        {
          type: "bubble",
          data: formattedData,
          marker: {
            fillColor: {
              radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
              stops: [
                [0, "rgba(255,255,255,0.5)"],
                [
                  1,
                  Highcharts.Color(
                    this.color || Highcharts.getOptions().colors[1]
                  )
                    .setOpacity(0.5)
                    .get("rgba")
                ]
              ]
            }
          }
        }
      ]
    };

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Risk Return Statistics
          </h6>
          <div className="dropdown no-arrow">
            <EasyTooltip
              title={`Risk Return matrix for all the schemes that are managed by the current fund manager. Size of the bubble indicates the AUM of each fund with respect to other schemes.`}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area">
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

export default FundManagerRiskReturnStatistics;
