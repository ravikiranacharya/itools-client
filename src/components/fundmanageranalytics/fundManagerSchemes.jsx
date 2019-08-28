import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import ReactTooltip from "react-tooltip";

class FundManagerSchemes extends Component {
  state = {};

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  formatCell = (cell, row) => {
    const hyperLink = `/schemes/${row.schemeId}`;
    return (
      <div className="short-string">
        <a href={hyperLink}>{row.schemeName}</a>
      </div>
    );
  };
  render() {
    const options = {
      sizePerPage: 5,
      prePage: "Prev", // Previous page button text
      nextPage: "Next", // Next page button text
      firstPage: "First", // First page button text
      lastPage: "Last", // Last page button text
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      hideSizePerPage: true
    };

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            {this.props.title}
          </h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle pointer"
              role="button"
              id="fund-manager-schemes-tooltip"
              data-tip="This table displays the schemes managed by selected fund manager, the category to which the scheme belongs and the total MTM of the scheme."
            >
              <i className="fa fa-list fa-sm fa-fw text-gray-400">
                <ReactTooltip place="bottom" type="dark" effect="float" />
              </i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area scheme-holdings">
            <BootstrapTable
              data={this.state.data}
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
                dataField="categoryName"
                dataSort={true}
                className="datatable-header"
              >
                Category
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="schemeAUM"
                dataSort={true}
                className="datatable-header"
              >
                Scheme MTM (Cr.)
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}

export default FundManagerSchemes;
