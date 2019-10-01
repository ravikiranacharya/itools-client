import React, { Component } from "react";
import TypeAhead from "../common/typeAhead";

class SearchBar extends Component {
  state = {
    selected: []
  };

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  componentWillReceiveProps(nextProps) {
    const { selected } = nextProps;
    this.setState({ selected });
  }

  render() {
    if (!this.state.data) return <h6>No data found</h6>;

    const { data, selected } = this.state;
    return (
      <TypeAhead
        data={data}
        labelKey="instrumentName"
        selected={this.state.selected}
        placeholder="Search scheme..."
        id="search-instrument"
        {...this.props}
      ></TypeAhead>
    );
  }
}

export default SearchBar;
