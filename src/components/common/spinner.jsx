import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Loader
          type="CradleLoader"
          color="#00BFFF"
          height="100"
          width="100"
        ></Loader>
      </div>
    );
  }
}

export default Spinner;
