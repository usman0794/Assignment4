const API_URL = "http://localhost:5000/api/students/create";

document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const student = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    marks: document.getElementById("marks").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    cnicNumber: document.getElementById("cnicNumber").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
    scholarshipStatus: document.getElementById("scholarshipStatus").checked,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    const data = await response.json();

    if (response.ok) {
      alert("Student added successfully!");
      fetchStudents();
      document.getElementById("studentForm").reset();
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

// Fetch and display all students
async function fetchStudents() {
  try {
    const response = await fetch("http://localhost:5000/api/students/");
    const students = await response.json();

    const studentList = document.getElementById("studentList");
    studentList.innerHTML = students
      .map(
        (student) =>
          `<div class="student-card">
        <p><strong>Name:</strong> ${student.firstName} ${student.lastName}</p>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Phone:</strong> ${student.phoneNumber}</p>
        <p><strong>CNIC:</strong> ${student.cnicNumber}</p>
        <p><strong>City:</strong> ${student.city}</p>
        <p><strong>Country:</strong> ${student.country}</p>
        <p><strong>Scholarship:</strong> ${
          student.scholarshipStatus ? "Yes" : "No"
        }</p>
      </div>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching students:", error);
  }
}

// Initial fetch of all students
fetchStudents();
