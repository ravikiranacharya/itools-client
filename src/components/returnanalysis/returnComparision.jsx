import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more.src";

HighchartsMore(Highcharts);

class ReturnComparision extends Component {
  state = {
    options: {
      title: false,
      subtitle: false,
      xAxis: {
        title: false,
        type: "datetime"
      },
      yAxis: {
        title: {
          text: "Return (%)"
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
          }
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
    if (!data || data.length < 1) return [];

    const series = data.map(item => {
      return {
        name: item.instrumentDetails.instrumentName,
        color: item.color,
        instrumentId: item.instrumentDetails.instrumentId,
        data: item.instrumentReturns.map(element => {
          return {
            x: Date.parse(element.priceDate),
            y: element.percentageChange,
            price: element.instrumentPrice
          };
        })
      };
    });
    return series;
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
