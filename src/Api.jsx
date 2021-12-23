const baseURL = "http://127.0.0.1:8082/employees";

export async function getAllEmployees() {
  try {
    const res = await fetch(baseURL);

    if (!res.ok) {
      const message = `An error has occred: ${res.status} - ${res.statusText}`
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
}

export async function getEmployeesById(id = 0) {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      const message = `An error has occred: ${res.status} - ${res.statusText}`
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
}

export async function addNewEmployee(resData = {}) {
  try {
    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resData)
    });

    if (!res.ok) {
      const message = `An error has occred: ${res.status} - ${res.statusText}`
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }

}

export async function updateEmpById(resData = {}, id = 0) {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resData)
    });

    if (!res.ok) {
      const message = `An error has occred: ${res.status} - ${res.statusText}`
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
}

export async function deleteEmpById(id = 0) {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const message = `An error has occred: ${res.status} - ${res.statusText}`
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }

}
