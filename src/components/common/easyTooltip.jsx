import React, { Component } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

class EasyTooltip extends Component {
  state = {};

  render() {
    return (
      <div>
        <Tooltip placement="left-start" {...this.props}>
          <i className="fa fa-info fa-sm fa-fw text-gray-400" />
        </Tooltip>
      </div>
    );
  }
}

export default EasyTooltip;
