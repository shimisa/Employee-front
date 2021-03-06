import React, { useState } from "react";
import { deleteEmpById } from "../Api";
import Button from "../commonComp/Button";
import Input from "../commonComp/Input";

function GetById() {
  const [userInput, setUserInput] = useState({ id: "" });
  const [message, setMsg] = useState(null);

  const handleChange = (e) => {
    setUserInput((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async () => {  
      var isDeleted = false;
      isDeleted = await deleteEmpById(userInput.id);
      if(isDeleted === true){
        setMsg(<h3 className="msg"> Employee ID {userInput.id} was deleted </h3>)        
      }else{
          setMsg(<h3 className="msg"> Could not find Employee ID {userInput.id} </h3>)   
      }
      
  };

  return (
    <div>
      <Input
        value={userInput.id}
        onChange={handleChange}
        name="id"
        placeholder="ID"
      />
      <Button title="Delete employee by ID" onClick={handleClick} />
      {message}
    </div>
  );
}

export default GetById;
