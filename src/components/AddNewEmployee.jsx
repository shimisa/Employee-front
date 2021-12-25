import React, { useState } from "react";
import { addNewEmployee } from "../Api";
import Button from "../commonComp/Button";
import Input from "../commonComp/Input";

function AddNewEmployee() {
  const [post, setPost] = useState(null);
  const [userInput, setUserInput] = useState({
    name: "",
    role: "",
  });

  async function addNew() {
    if (!userInput) {
      return;
    }
    const result = await addNewEmployee(userInput);
    setPost(result);
  }

  function handleChange(e) {
    setUserInput((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));   
  }

  return (
    <div>
      <Input
        name="name"
        placeholder="Name"
        value={userInput.name}
        onChange={handleChange}
      />
      <Input
        name="role"
        placeholder="Role"
        value={userInput.role}
        onChange={handleChange}
      />

      <Button title="Add New Employee" onClick={addNew} />
      {post && 
      <> <h3 className="msg">Added New Employee:</h3>
      <div className="res alert alert-secondary mt-2" role="alert">
        <p className="resId">{`ID: ${post.id}`}</p>
        <p className="resName">{`Name: ${post.name}`}</p>
        <p className="resRole">{`Role: ${post.role}`}</p>
      </div> 
      </>}
    </div>
  );
}

export default AddNewEmployee;
