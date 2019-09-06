import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more.src";

HighchartsMore(Highcharts);

class ScatterChart extends Component {
  state = {
    options: {
      chart: {
        type: "scatter",
        plotBorderWidth: 0,
        zoomType: "xy",
        height: 480
      },
      title: false,
      credits: false,
      xAxis: {
        title: {
          text: "Risk"
        },
        gridLineWidth: 0,
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: "Return"
        },
        gridLineWidth: 0
      },
      legend: {
        layout: "horizontal",
        verticalAlign: "bottom",
        align: "right",
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor
      },
      tooltip: {
        formatter: function() {
          return `${this.point.name}<br/>
                      <strong>Risk:</strong> ${this.point.x}%<br/>
                      <strong>Return:</strong> ${this.point.y}%`;
        }
      },
      plotOptions: {
        series: {
          fillOpacity: 0.1
        },
        scatter: {
          showInLegend: true,
          turboThreshold: 500000,
          marker: {
            symbol: "circle"
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {}
        }
      },
      series: []
    }
  };

  componentWillMount() {
    const data = this.props.data;
    const formattedData = this.formatDataToSeries(data);
    const options = { ...this.state.options };
    options.series = formattedData;
    this.setState({ data, options });
  }

  formatDataToSeries = data => {
    const maxRadius = 10;
    const series = data.assetWiseBreakDown.map(asset => {
      return {
        name: asset.assetName,
        data: this.formatSchemesToData(
          asset.schemes,
          asset.AUM.maxAUM,
          maxRadius,
          asset.assetId === 0
        )
      };
    });
    return series;
  };

  formatSchemesToData = (schemes, maxAUM, maxRadius, isManaged = false) => {
    const series = schemes.map(element => {
      return {
        x: element.risk, // Risk involved
        y: element.return, // Return of scheme
        marker: {
          lineWidth: isManaged ? 1 : 0,
          lineColor: isManaged ? "#EFEFEF" : null,
          radius: isManaged
            ? maxRadius
            : (element.schemeAUM / maxAUM) * maxRadius * 100 // Radius
        },
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
    const { options } = this.state;

    return (
      <div className="chart-area scatter-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={this.chartComponent}
        />
      </div>
    );
  }
}

export default ScatterChart;
