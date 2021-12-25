import React, { useState } from "react";
import { getEmployeesById } from "../Api";
import Button from "../commonComp/Button";
import Input from "../commonComp/Input";

function GetById() {
  const [userInput, setUserInput] = useState({ id: "" });
  const [employee, setEmployee] = useState(null);

  const handleChange = (e) => {
    setUserInput((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async () => {
    const empById = await getEmployeesById(userInput.id);
    setEmployee(empById);
  };

  return (
    <div>
      <Input
        value={userInput.id}
        onChange={handleChange}
        name="id"
        placeholder="ID"
      />
      <Button title="Get by ID" onClick={handleClick} />
      {employee && 
      <div className="res alert alert-secondary mt-2" role="alert">
        <p className="resId">{`ID: ${employee.id}`}</p>
        <p className="resName">{`Name: ${employee.name}`}</p>
        <p className="resRole">{`Role: ${employee.role}`}</p>
      </div> }
    </div>
  );
}

export default GetById;
