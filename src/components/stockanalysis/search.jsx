import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import { fetchStocks, filterStocks } from "../../services/stockAnalytics";

class SearchBox extends Component {
  state = {
    data: [],
    value: "",
    label: ""
  };

  componentDidMount() {
    const data = this.props.data;
    this.setState({ data });
  }

  render() {
    return (
      <div className="input-group mt-2 pr-2">
        <Autocomplete
          value={this.state.value}
          inputProps={{
            id: "states-autocomplete",
            type: "text",
            className: "form-control bg-light border-0 small search-input",
            ...this.props
          }}
          wrapperStyle={{ position: "relative", display: "inline-block" }}
          items={fetchStocks()}
          getItemValue={item => item.instrumentName}
          shouldItemRender={filterStocks}
          onChange={(event, value) => {
            console.log(this.props);
            this.setState({ value });
          }}
          onSelect={value => {
            this.setState({ value });
          }}
          renderMenu={children => (
            <div className="menu scrollbar scrollbar-primary">{children}</div>
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? "item-highlighted" : ""}`}
              key={item.instrumentId}
            >
              {item.instrumentName}
            </div>
          )}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.props.onSubmit}
          >
            <i className="fa fa-search fa-sm" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
