import "./App.css";
import React, { useState } from "react";
import AddNewEmployee from "./components/AddNewEmployee";
import GetAllEmp from "./components/GetAllEmp";
import GetById from "./components/GetById";
import UpdateEmp from "./components/UpdateEmp";
import DeleteEmp from "./components/DeleteEmp";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function App() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="GetAllEmp" label="Get All Employees" />
          <Tab value="GetById" label="Get Employee By ID" />
          <Tab value="AddNewEmployee" label="Add New Employee"></Tab>
          <Tab value="UpdateEmp" label="Update Employee" />
          <Tab value="DeleteEmp" label="Delete Employee" />
        </Tabs>
      </Box>

      {value === "GetAllEmp" && <GetAllEmp />}
      {value === "GetById" && <GetById />}
      {value === "AddNewEmployee" && <AddNewEmployee />}
      {value === "UpdateEmp" && <UpdateEmp />}
      {value === "DeleteEmp" && <DeleteEmp />}

    </>
  );
}

export default App;
