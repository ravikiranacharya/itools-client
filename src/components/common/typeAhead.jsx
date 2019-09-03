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
      // <div className="input-group mt-2 pr-2 search-box">
      //   <div className="input-group-append">
      //     <button
      //       className="btn btn-primary"
      //       type="button"
      //       onClick={this.props.onSubmit}
      //     >
      //       <i className="fa fa-search fa-sm" />
      //     </button>
      //   </div>
      // </div>
    );
  }
}

export default TypeAhead;
