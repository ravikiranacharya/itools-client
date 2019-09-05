import React, { Component } from "react";
import TypeAhead from "../common/typeAhead";

class SearchBar extends Component {
  state = {};

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const { data } = this.state;
    const { onChange } = this.props;

    return (
      <TypeAhead
        data={data}
        labelKey="instrumentName"
        onChange={onChange}
        onSubmit={this.handleSubmit}
        selected={this.state.selected}
        placeholder="Search scheme..."
        id="search-instrument"
      ></TypeAhead>
    );
  }
}

export default SearchBar;
