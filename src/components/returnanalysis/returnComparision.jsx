import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more.src";

HighchartsMore(Highcharts);

class ReturnComparision extends Component {
  state = {
    options: {
      title: {
        text: "Solar Employment Growth by Sector, 2010-2016"
      },

      subtitle: {
        text: "Source: thesolarfoundation.com"
      },

      yAxis: {
        title: {
          text: "Number of Employees"
        }
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }
        ]
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const options = { ...this.state.options };

    const series = this.mapDataToSeries(data);
    options.series = series;
    this.setState({ options });
  }

  mapDataToSeries = data => {
    return [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      },
      {
        name: "Sales & Distribution",
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      },
      {
        name: "Project Development",
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      },
      {
        name: "Other",
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }
    ];
  };

  render() {
    const { options } = this.state;

    if (!(options.series && options.series.length > 0)) return null;

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Return Comparision
          </h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-list fa-sm fa-fw text-gray-400" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area scatter-chart">
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

export default ReturnComparision;
