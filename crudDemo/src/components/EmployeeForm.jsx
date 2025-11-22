import React, { useState, useEffect } from "react";

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  });

  useEffect(() => {
    if (initialData) {
      setEmployee(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="firstName" value={employee.firstName} onChange={handleChange} placeholder="First Name" required />

      <input name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Last Name" required />

      <input name="email" value={employee.email} onChange={handleChange} type="email" placeholder="Email" required />

      <input name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />

      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
