import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

// import { EmployeeService } from '../../services/EmployeeService'

// import { EmployeeList } from '../EmployeeList/EmployeeList'
// import employeesMock from '../../services/employees-mock.json'
// const employeesMock = require('../../services/employees-mock.json')
import { EmployeeContainer } from '../EmployeeContainer/EmployeeContainer';
import { Header } from '../Header/Header'

// EmployeeService.getEmployees()
//   .then(console.log)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>IT Corpo System!</Header>
        <EmployeeContainer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
