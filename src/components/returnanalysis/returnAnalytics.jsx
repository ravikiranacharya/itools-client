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
    return <SearchBar data={schemes}></SearchBar>;
  }
}

export default ReturnAnalytics;
