import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import SearchBar from "./searchBar";
import {
  fetchAllInstruments,
  fetchInstrumentReturns
} from "../../services/returnAnalytics";
import Spinner from "../common/spinner";
import FlashCard from "./flashCard";

import "react-toastify/dist/ReactToastify.css";

class ReturnAnalytics extends Component {
  state = {
    selectedInstruments: []
  };

  async componentDidMount() {
    const instruments = await fetchAllInstruments();
    this.setState({ instruments });
  }

  handleAdd = async () => {
    const { selectedInstrumentId, selectedInstruments } = this.state;

    if (this.isInstrumentExists(selectedInstruments, selectedInstrumentId)) {
      toast("Instrument already selected.");
      return;
    }
    const instrumentReturns = await fetchInstrumentReturns(
      selectedInstrumentId
    );
    selectedInstruments.push(instrumentReturns);
    this.setState({ selectedInstruments, selected: null });
  };

  handleRemove = e => {
    const instrumentId = e.currentTarget.value;
    let { selectedInstruments } = this.state;

    selectedInstruments = selectedInstruments.filter(item => {
      return item.instrumentDetails.instrumentId.toString() !== instrumentId;
    });

    this.setState({ selectedInstruments });
  };

  isInstrumentExists = (items, itemId) => {
    const exists = items.some(item => {
      return item.instrumentDetails.instrumentId === itemId;
    });

    return exists;
  };

  handleChange = async selectedOptions => {
    if (selectedOptions.length > 0) {
      const selectedInstrumentId = selectedOptions[0]["instrumentId"];
      this.setState({ selectedInstrumentId, selected: selectedOptions });
    }
  };

  render() {
    if (!this.state.instruments) return <Spinner></Spinner>;

    const { instruments } = this.state;
    return (
      <div>
        <div className="row">
          <ToastContainer></ToastContainer>
          <div className="col-md-4 col-lg-4 col-sm-8 col-8">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-10 pr-0">
                <SearchBar
                  data={instruments}
                  onChange={this.handleChange}
                  selected={this.state.selected}
                ></SearchBar>
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
              <div
                key={instrument.instrumentDetails.instrumentId}
                className="col-md-3 col-lg-3 col-sm-6 col-12 p-2"
              >
                <FlashCard
                  key={instrument.instrumentDetails.instrumentId}
                  data={instrument.instrumentDetails}
                  onClose={this.handleRemove}
                ></FlashCard>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReturnAnalytics;
