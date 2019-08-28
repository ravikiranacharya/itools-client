import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/common/navBar";
import StockAnalytics from "./components/stockanalysis/stockAnalytics";
import SectorAnalytics from "./components/sectoranalytics/sectorAnalytics";
import FundManagerAnalytics from "./components/fundmanageranalytics/fundManagerAnalytics";
import NotFound from "./components/notFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/stock-analytics/:id" component={StockAnalytics} />
            <Route path="/stock-analytics" component={StockAnalytics} />
            <Route path="/sector-analytics" component={SectorAnalytics} />
            <Route
              path="/fund-manager-analytics"
              component={FundManagerAnalytics}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/stock-analytics" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
