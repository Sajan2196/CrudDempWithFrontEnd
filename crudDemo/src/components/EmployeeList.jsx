import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/employeeService";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    toast.success("Employee Deleted");
    loadEmployees();
  };

  const filtered = employees.filter((e) =>
    e.firstName.toLowerCase().includes(search.toLowerCase()) ||
    e.lastName.toLowerCase().includes(search.toLowerCase()) ||
    e.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Employee List</h2>

      <button
        onClick={() => (window.location = "/add")}
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          background: "grey",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Employee
      </button>


      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>

              <td>
                <button onClick={() => (window.location = `/edit/${emp.id}`)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
