import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    toggled: false
  };

  toggleMenu = () => {
    const toggled = !this.state.toggled;
    this.setState({ toggled });
  };

  render() {
    const show = this.state.toggled ? "show" : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-4 shadow static-top">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            iTools
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/stock-analytics"
              >
                Stock Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/sector-analytics"
              >
                Sector Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/fund-manager-analytics"
              >
                Fund Manager Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/fund-picker"
              >
                Fund Picker
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
