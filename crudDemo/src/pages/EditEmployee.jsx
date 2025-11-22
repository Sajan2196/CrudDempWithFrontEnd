import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../api/employeeService";
import EmployeeForm from "../components/EmployeeForm";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getEmployeeById(id).then((res) => setData(res.data));
  }, [id]);

  const submit = async (updated) => {
    await updateEmployee(id, updated);
    toast.success("Employee Updated");
    window.location = "/";
  };

  return (
    <>
      <h2>Edit Employee</h2>
      {data && <EmployeeForm onSubmit={submit} initialData={data} />}
    </>
  );
};

export default EditEmployee;
