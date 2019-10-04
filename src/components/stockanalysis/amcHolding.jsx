import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EasyTooltip from "./../common/easyTooltip";

class AMCHolding extends Component {
  state = {
    options: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        height: 320
      },
      tooltip: {
        formatter: function() {
          return (
            this.point.name +
            " : <b>" +
            Math.round(this.percentage * 100) / 100 +
            "</b> %"
          );
        },
        style: {
          font: "11px Montserrat, OpenSans, Helvetica, Arial, sans-serif",
          color: "#5a5a5a",
          verticalalign: "top"
        }
      },
      title: false,
      credits: false,
      plotOptions: {
        pie: {
          allowPointSelect: true,
          innerSize: "60%",
          cursor: "pointer",
          showInLegend: false,
          dataLabels: {
            enabled: true,
            color: "#5a5a5a",
            connectorColor: "#5a5a5a",
            format: "{point.name}",
            style: {
              font: "11px Montserrat, OpenSans, Helvetica, Arial, sans-serif",
              color: "#5a5a5a",
              verticalalign: "top"
            }
          },
          point: {
            events: {
              select: e => {
                this.props.onFiltered(e.target.amcId);
              },
              unselect: e => {
                this.props.onFiltered(null);
              }
            }
          }
        }
      },
      series: [
        {
          type: "pie",
          data: []
        }
      ]
    }
  };

  componentWillMount() {
    const data = [...this.props.data];
    const mappedData = this.mapDataToModel(data);
    const { options } = this.state;
    options.series[0].data = mappedData;
    this.setState({ options });
  }

  mapDataToModel(data) {
    const mappedData = data.map(item => {
      return {
        name: item.amcName,
        y: parseFloat(item.weightage),
        amcId: item.amcId
      };
    });
    return mappedData;
  }

  render() {
    const { options } = this.state;
    if (!options.series[0].data.length) return <h6>No data found</h6>;

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            {this.props.title}
          </h6>
          <div className="dropdown no-arrow">
            <EasyTooltip
              title={`Click on the slice to filter the schemes list according to AMC.
                      Click on the slice again to remove filter.`}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area amc-holding-chart" id="amc-holding-chart">
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

export default AMCHolding;
