import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class DonutChart extends Component {
  state = {};
  render() {
    const { width, height, series } = this.props;
    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        height: height,
        width: width,
        events: {
          click: function(event) {
            console.log("Clicked", this);
          },
          load: function() {
            console.log("Loaded", this);
          }
        }
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
        series: {
          cursor: "pointer",
          point: {
            events: {
              click: function() {
                alert("Clicked");
              }
            }
          }
        },
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
          }
        }
      },
      series: series
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default DonutChart;
