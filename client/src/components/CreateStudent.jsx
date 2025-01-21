import React, { useState } from "react";
import { createStudent } from "../services/api";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    marks: "",
    phoneNumber: "",
    cnicNumber: "",
    city: "",
    country: "",
    scholarshipStatus: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(formData);
      alert("Student created successfully!");
    } catch (error) {
      alert("Error creating student");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Create Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => {
          if (key === "scholarshipStatus") {
            return (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={formData[key]}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>Scholarship</span>
              </label>
            );
          }
          return (
            <input
              key={key}
              type={key === "marks" ? "number" : "text"}
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1")}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          );
        })}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateStudent;
