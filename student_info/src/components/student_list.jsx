import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Student List</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Age</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Course</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map((student, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.age}</td>
                <td className="py-2 px-4">{student.email}</td>
                <td className="py-2 px-4">{student.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;