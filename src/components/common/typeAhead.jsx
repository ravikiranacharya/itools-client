import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

class TypeAhead extends Component {
  state = {
    selected: []
  };
  render() {
    return (
      <Typeahead
        {...this.state}
        onChange={selected => this.setState({ selected })}
        options={this.props.data}
        className="p-2"
        {...this.props}
      />
    );
  }
}

export default TypeAhead;
