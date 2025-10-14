import { useState } from "react";
import employeeRepository from "../repositories/employeeRepository";
import roleRepository from "../repositories/roleRepository";

function EntryForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    if (name.length < 3) {
      setError("Name must be at least 3 letters");
      return;
    }
    if (roleRepository.isRoleFilled(role)) {
      setError("This role is already filled");
      return;
    }
    
    employeeRepository.add({ name, role });

    alert("Employee added!");
    setName("");
    setRole("");
    setError("");
  }

  return (
    <div>
      <h2>Add Employee</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter employee name"
      />
      <br />
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Enter role"
      />
      <br />
      <button onClick={handleSubmit}>Add Employee</button>
    </div>
  );
}

export default EntryForm;
