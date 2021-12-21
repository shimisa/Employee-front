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
      {employee && <p>{`Found employee: ${employee.name}`}</p>}
    </div>
  );
}

export default GetById;
