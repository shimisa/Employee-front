import "./App.css";
import React from "react";
import AddNewEmployee from "./components/AddNewEmployee";
import GetAllEmp from "./components/GetAllEmp";
import GetById from "./components/GetById";

function App() {
  return (
    <div className="App">
        <AddNewEmployee />
        <GetAllEmp />
        <GetById />
        
      
    </div>
  );
}

export default App;
