import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class SchemeHolding extends Component {
  state = {};

  componentWillMount() {
    const { data: schemes } = this.props;
    this.setState({ schemes });
  }

  componentWillReceiveProps(nextProps) {
    const { data: schemes } = nextProps;
    if (this.state.schemes !== schemes) {
      this.setState({ schemes });
    }
  }

  formatCell = (cell, row) => {
    const hyperLink = `/schemes/${row.schemeId}`;
    return (
      <div className="short-string">
        <a href={hyperLink}>{row.schemeName}</a>
      </div>
    );
  };

  renderShowsTotal(start, to, total) {
    return (
      <div className="row">
        <div className="col-md-12">
          <p className="float-left pt-2 total">
            Showing <b>{start}</b>-<b>{to}</b> of <b>{total}</b> records
          </p>
        </div>
      </div>
    );
  }

  render() {
    const options = {
      sizePerPage: 5,
      prePage: "Prev", // Previous page button text
      nextPage: "Next", // Next page button text
      firstPage: "First", // First page button text
      lastPage: "Last", // Last page button text
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      alwaysShowAllBtns: false,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true
    };
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            {this.props.title}
          </h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-list fa-sm fa-fw text-gray-400" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area scheme-holdings">
            <BootstrapTable
              data={this.state.schemes}
              striped
              hover
              version="4"
              pagination
              options={options}
              search={true}
              searchPlaceholder="Search Scheme..."
              trClassName="datatable-body"
              headerContainerClass="datatable-header"
            >
              <TableHeaderColumn
                isKey
                dataField="schemeName"
                dataSort={true}
                dataFormat={this.formatCell}
                className="datatable-header width-14"
              >
                Scheme
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="schemeMTM"
                dataSort={true}
                className="datatable-header"
              >
                Scheme MTM
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="percentageInScheme"
                dataSort={true}
                className="datatable-header"
              >
                % in Scheme
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="percentageOfStock"
                dataSort={true}
                className="datatable-header"
              >
                % of Stock
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}

export default SchemeHolding;
