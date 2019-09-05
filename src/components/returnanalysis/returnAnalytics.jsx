import React, { Component } from "react";
import SearchBar from "./searchBar";
import { fetchAllInstruments } from "../../services/returnAnalytics";
import Spinner from "../common/spinner";
import FlashCard from "./flashCard";

class ReturnAnalytics extends Component {
  state = {
    selectedInstruments: []
  };

  async componentDidMount() {
    const instruments = await fetchAllInstruments();
    this.setState({ instruments });
  }

  handleAdd = () => {
    const { selectedInstruments } = this.state;
    selectedInstruments.push(1);
    this.setState({ selectedInstruments });
  };

  handleChange = selected => {
    console.log(selected);
  };

  render() {
    if (!this.state.instruments) return <Spinner></Spinner>;

    const { instruments } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-8 col-8">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-10 pr-0">
                <SearchBar data={instruments}></SearchBar>
              </div>
              <div className="col-md-2 col-lg-2 col-sm-2 col-2 p-2">
                <button
                  className="btn btn-success add-schemes-btn"
                  onClick={this.handleAdd}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2">
          {this.state.selectedInstruments.map(instrument => {
            return (
              <div className="col-md-3 col-lg-3 col-sm-6 col-12 p-2">
                <FlashCard></FlashCard>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReturnAnalytics;
