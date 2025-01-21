import React from "react";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">UMT Admissions</h1>
      <CreateStudent />
      <div className="mt-8">
        <StudentList />
      </div>
    </div>
  );
};

export default App;
