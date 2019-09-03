import React, { Component } from "react";

class Box extends Component {
  render() {
    const { highlight, title, value, icon } = this.props;

    let iconClass = this.getIconClass(icon);
    let highlightClass = this.getHighlightClass(highlight);
    let textClass = this.getTextClass(highlight);

    return (
      <div className={highlightClass}>
        <div className="card-body box">
          <div className="row no-gutters align-items-center">
            <div className="col-sm-8 col-md-8 col-lg-8 col-8">
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
              <div className={textClass}>{title}</div>
            </div>
            <div className="col icon">
              <i className={iconClass} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getTextClass(highlight) {
    return `text-xs font-weight-bold text-${highlight} mb-1`;
  }

  getHighlightClass(highlight) {
    return `card border-left-${highlight} shadow h-100`;
  }

  getIconClass(icon) {
    return `fa ${icon} fa-2x text-gray-300`;
  }
}

export default Box;
