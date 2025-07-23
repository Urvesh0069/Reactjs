const StudentList = ({ students }) => {
  
  // const students = [{
  //   name: "John Doe",
  //   age: 20,
  // }]

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Student List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students && students.length > 0 ? (
          students.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
            >
              {/* Image */}
              {student.image ? (
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No Image</span>
                </div>
              )}

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{student.name}</h3>
              <p className="text-sm text-gray-600 mb-1">Age: {student.age}</p>
              <p className="text-sm text-gray-600 mb-1">Gender: {student.gender}</p>
              <p className="text-sm text-gray-600 mb-1">Mobile: {student.mobile}</p>
              <p className="text-sm text-gray-600 mb-1">Email: {student.email}</p>
              <p className="text-sm text-gray-600 mb-1">Course: {student.course}</p>
              <p className="text-sm text-gray-600">Admission Date: {student.admissiondate || 'N/A'}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
