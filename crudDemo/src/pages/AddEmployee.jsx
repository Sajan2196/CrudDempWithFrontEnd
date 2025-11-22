import React from "react";
import {createEmployee } from "../api/employeeService";
import EmployeeForm from "../components/EmployeeForm";
import { toast } from "react-toastify";

const AddEmployee = () => {
  const submit = async (data) => {
    await createEmployee(data);
    toast.success("Employee Added");
    window.location = "/";
  };

  return (
    <>
      <h2>Add Employee</h2>
      <EmployeeForm onSubmit={submit} />
    </>
  );
};

export default AddEmployee;
