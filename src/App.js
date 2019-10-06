import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/common/navBar";
import StockAnalytics from "./components/stockanalysis/stockAnalytics";
import SectorAnalytics from "./components/sectoranalytics/sectorAnalytics";
import FundManagerAnalytics from "./components/fundmanageranalytics/fundManagerAnalytics";
import ReturnAnalytics from "./components/returnanalysis/returnAnalytics";

import NotFound from "./components/notFound";

import "./App.css";
import AMCAnalytics from "./components/amcanalytics/amcAnalytics";

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
            <Route path="/return-analytics" component={ReturnAnalytics} />
            <Route path="/amc-analytics" component={AMCAnalytics} />
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
