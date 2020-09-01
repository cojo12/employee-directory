import React from 'react';
import HeaderUsers from "./components/header/index";
import EmployeeData from "./components/table/employeeData"
import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Container, Divider } from "semantic-ui-react"

function App() {
  return (
    <div className="app">
      <HeaderUsers />
      <Divider hidden />
      <Container>
        <EmployeeData/>
      </Container>
    </div>
  );
  
}

export default App;
