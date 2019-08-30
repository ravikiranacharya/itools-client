import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="center-vertical">
        <div className="center-horizontal">
          <Loader
            type="CradleLoader"
            color="#00BFFF"
            height="100"
            width="100"
          ></Loader>
        </div>
      </div>
    );
  }
}

export default Spinner;
