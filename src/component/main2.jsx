import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

import { connect } from "react-redux";
import * as types from '../constants/actionTypes';


class Main2 extends Component {
  render() {
    const { fetching, employeeName, onRequestEmployee, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {employeeName? employeeName : (
              <img src={logo} className="App-logo" alt="logo" />
          )}
          <h1 className="App-title">Welcome to Employee Saga</h1>
        </header>
        {employeeName ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestEmployee}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    employeeName: state.reducer2.employee_name,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestEmployee: () => dispatch({
      type: types.EMPLOYEE_REQUEST
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main2);
