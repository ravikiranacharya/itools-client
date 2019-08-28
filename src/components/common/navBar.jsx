import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              iTools
            </Link>
          </div>
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
