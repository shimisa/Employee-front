import React, {useState} from 'react'
import Button from '../commonComp/Button'

function UpdateEmp() {
    const [employee, setEmployee] = useState(null);

    const handleClick = async () => {
        const emp = updateEmpById(id);
        setEmployee(emp);
    }

    return (
        <div>
            <Button title="Update Employee" onClick={handleClick}/>
            {employee && <p>{`Updated: ${employee.name} ${employee.role}`}</p>}
        </div>
    )
}

export default UpdateEmp
