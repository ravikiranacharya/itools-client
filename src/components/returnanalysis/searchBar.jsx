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
    return (
      <TypeAhead
        data={data}
        labelKey="schemeName"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        placeholder="Search scheme..."
        id="search-scheme"
      ></TypeAhead>
    );
  }
}

export default SearchBar;
