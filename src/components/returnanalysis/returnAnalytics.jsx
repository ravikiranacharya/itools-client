import React, { Component } from "react";
import SearchBar from "./searchBar";
import { fetchAllSchemes } from "../../services/returnAnalytics";
import Spinner from "../common/spinner";

class ReturnAnalytics extends Component {
  state = {};

  async componentDidMount() {
    const schemes = await fetchAllSchemes();
    this.setState({ schemes });
  }

  render() {
    if (!this.state.schemes) return <Spinner></Spinner>;

    const { schemes } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-8 col-8">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-10 pr-0">
              <SearchBar data={schemes}></SearchBar>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 col-2 p-2">
              <button className="btn btn-success add-schemes-btn">+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReturnAnalytics;
