import React, { useState } from "react";
import Button from "../commonComp/Button";
import Input from "../commonComp/Input";
import { updateEmpById } from "../Api";

function UpdateEmp() {
  const [updatedEmp, setUpdatedEmp] = useState(null);
  const [empID, setEmpID] = useState({ id: "" });
  const [userInput, setUserInput] = useState({
    name: "",
    role: "",
  });

  function handleInsertDetails(e) {
    setUserInput((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }
  function handleInsertID(e) {
    setEmpID((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  }

  const handleClick = async () => {
    const employee = await updateEmpById(userInput, empID.id);
    setUpdatedEmp(employee);
  };

  return (
    <div>
      <Input
        name="name"
        placeholder="Name"
        value={userInput.name}
        onChange={handleInsertDetails}
      />
      <Input
        name="role"
        placeholder="Role"
        value={userInput.role}
        onChange={handleInsertDetails}
      />
      <Input
        name="id"
        placeholder="ID"
        value={empID.id}
        onChange={handleInsertID}
      />

      <Button title="Update Employee" onClick={handleClick} />


      {updatedEmp && 
      <>
      <h3 className="msg">Updated Employee:</h3>
      <div className="res alert alert-secondary mt-2" role="alert">
        <p className="resId">{`ID: ${updatedEmp.id}`}</p>
        <p className="resName">{`Name: ${updatedEmp.name}`}</p>
        <p className="resRole">{`Role: ${updatedEmp.role}`}</p>
      </div>
      </>
       }

    </div>
  );
}

export default UpdateEmp;
