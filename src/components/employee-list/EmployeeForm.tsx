function EmployeeForm() {
  function addEmployee() {
    alert("Employee added!");
  }

  return (
    <div>
      <h2>Add Employee</h2>
      <input placeholder="Enter employee name" /> <br />
      <input placeholder="Enter role" /> <br />
      <button onClick={addEmployee}>Add Employee</button>
    </div>
  );
}

export default EmployeeForm;
