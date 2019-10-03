import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import _ from "lodash";

import SearchBar from "./searchBar";
import {
  fetchAllInstruments,
  fetchInstrumentReturns
} from "../../services/returnAnalytics";
import Spinner from "../common/spinner";
import FlashCard from "./flashCard";

import "react-toastify/dist/ReactToastify.css";
import ReturnComparision from "./returnComparision";

class ReturnAnalytics extends Component {
  state = {
    instruments: [],
    selectedInstruments: [],
    colors: [
      "#2f7ed8",
      "#0d233a",
      "#8bbc21",
      "#910000",
      "#1aadce",
      "#492970",
      "#f28f43",
      "#77a1e5",
      "#c42525",
      "#a6c96a"
    ],
    selectedColors: []
  };

  async componentDidMount() {
    const instruments = await fetchAllInstruments();
    this.setState({ instruments });
  }

  handleAdd = async () => {
    const { selectedInstrumentId, selectedInstruments } = this.state;

    if (!selectedInstrumentId) {
      toast("Select an instrument");
      return;
    }

    if (this.isInstrumentExists(selectedInstruments, selectedInstrumentId)) {
      toast("Instrument already selected.");
      return;
    }

    const instrumentData = await fetchInstrumentReturns(selectedInstrumentId);
    if (!instrumentData) {
      toast("Data unavailable for this fund");
      return;
    }

    instrumentData.instrumentReturns = _.sortBy(
      instrumentData.instrumentReturns,
      "priceDate"
    );

    let { selectedColors, colors } = this.state;
    const nextColor = colors.pop();
    selectedColors.push(nextColor);

    instrumentData.color = nextColor;
    selectedInstruments.push(instrumentData);

    this.setState({ selectedInstruments, selectedColors, colors });
  };

  fetchInstrumentReturns = async id => {
    const instrumentReturns = await fetchInstrumentReturns(id);
    return instrumentReturns;
  };

  handleRemove = e => {
    const instrumentId = e.currentTarget.value;
    let { selectedInstruments } = this.state;

    selectedInstruments = selectedInstruments.filter(item => {
      return item.instrumentDetails.instrumentId.toString() !== instrumentId;
    });

    let { colors, selectedColors } = this.state;
    const currentColor = selectedInstruments.color;
    selectedColors = _.without(selectedColors, currentColor);
    colors.push(currentColor);

    this.setState({ selectedInstruments, colors, selectedColors });
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
    const { instruments, selectedInstruments } = this.state;
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
          {selectedInstruments.map(instrument => {
            return (
              <div
                key={instrument.instrumentDetails.instrumentId}
                className="col-md-3 col-lg-3 col-sm-6 col-12 p-2"
              >
                <FlashCard
                  key={instrument.instrumentDetails.instrumentId}
                  data={instrument.instrumentDetails}
                  onClose={this.handleRemove}
                  color={instrument.color}
                ></FlashCard>
              </div>
            );
          })}
        </div>
        <ReturnComparision data={selectedInstruments}></ReturnComparision>
      </div>
    );
  }
}

export default ReturnAnalytics;
