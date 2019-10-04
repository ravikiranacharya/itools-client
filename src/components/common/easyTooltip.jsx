import React, { Component } from "react";
import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/core/Icon";

class EasyTooltip extends Component {
  state = {};

  render() {
    return (
      <Tooltip {...this.props}>
        <InfoIcon></InfoIcon>
      </Tooltip>
    );
  }
}

export default EasyTooltip;
