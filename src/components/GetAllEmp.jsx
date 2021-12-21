import React, { useState } from "react";
import { getAllEmployees } from "../Api";
import Button from "../commonComp/Button";


const GetAllEmp = () => {

    const [get, setGet] = useState(null);

    async function gettAll() {
      const result = await getAllEmployees();
      setGet(result);
    }

    return (
        <div>
          <Button title="Get All Employees" onClick={gettAll}/>
            {get &&
          get.map((res) => (
            <div key={res.id} className="res alert alert-secondary mt-2" role="alert">
              <p className="resId">{`id: ${res.id}`}</p>
              <p className="resName">{`name: ${res.name}`}</p>
              <p className="resRole">{`role: ${res.role}`}</p>
            </div>
          ))}
        </div>
    )
}

export default GetAllEmp
