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

  componentDidMount() {
    const { data } = this.props;
    const options = { ...this.state.options };

    const series = this.mapDataToSeries(data);
    options.series = series;
    this.setState({ options });
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const options = { ...this.state.options };

    const series = this.mapDataToSeries(data);
    options.series = series;
    this.setState({ options });
  }

  mapDataToSeries = data => {
    console.log(data);
    if (
      !data ||
      data.length < 1 ||
      data[0].instrumentDetails.instrumentId !== 474
    ) {
      return [];
    }
    return [
      {
        name: "Installation",
        color: "#BBB",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
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
