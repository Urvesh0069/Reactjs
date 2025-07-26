import { useSelector, useDispatch } from "react-redux";
import { Studentsurch_filter, selectFilter } from "./Student_filter";
import { removeStudent, setFilter } from "../students/studentSlice";

const StudentList = () => {
  const students = useSelector(Studentsurch_filter);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-[#443C68] p-6 text-gray-100 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#18122B]">Student List</h2>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        className="mb-6 p-2 rounded border-2 border-[#635985] w-full max-w-xs block mx-auto text-black"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {students && students.length > 0 ? (
          students.map((student, idx) => (
            <div
              key={student.id || idx}
              className="rounded-xl shadow-lg p-5 text-gray-200 bg-gradient-to-br from-[#18122B] to-[#393053] border border-[#635985] flex flex-col items-center text-center"
            >
              {student.image ? (
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-[#A084DC]"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-[#443C68] mb-4 flex items-center justify-center text-sm text-gray-300 border border-[#635985]">
                  No Image
                </div>
              )}
              <h3 className="text-lg font-semibold text-[#A084DC] mb-1">{student.name}</h3>
              <p className="text-sm text-gray-300 mb-1">Age: {student.age}</p>
              <p className="text-sm text-gray-300 mb-1">Gender: {student.gender}</p>
              <p className="text-sm text-gray-300 mb-1">Mobile: {student.mobile}</p>
              <p className="text-sm text-gray-300 mb-1">Email: {student.email}</p>
              <p className="text-sm text-gray-300 mb-1">Course: {student.course}</p>
              <p className="text-sm text-gray-400">Admission Date: {student.admissiondate || 'N/A'}</p>
              <div>
                <button
                  className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(removeStudent(student.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;