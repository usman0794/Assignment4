import React, { useEffect, useState } from "react";
import { getAllStudents } from "../services/api";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      {students.length > 0 ? (
        <ul className="space-y-2">
          {students.map((student) => (
            <li key={student._id} className="p-4 bg-gray-100 rounded shadow">
              <p>
                {student.firstName} {student.lastName}
              </p>
              <p>Marks: {student.marks}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students available</p>
      )}
    </div>
  );
};

export default StudentList;
