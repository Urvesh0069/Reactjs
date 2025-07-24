const StudentList = () => {

    const students = [{
    name: "John Doe",
    age: 20,
    gender : "Male",
    mobile: "1234567890",
    email: "urvesh@gmail.com",
    course: "Computer Science",
    admissiondate: "2023-01-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },
  {
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },
  {
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },{
    name: "Jane Smith",
    age: 22,
    gender: "Fmale",
    mobile: "0987654321",
    email: "dfghj@gmail.com",
    course: "Mathematics",
    admissiondate: "2023-02-01",
    image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
  },
]


  return (
    <div className="min-h-screen bg-[#443C68] p-6 text-gray-100 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#18122B]">Student List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {students && students.length > 0 ? (
          students.map((student, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-lg p-5 text-gray-200 bg-gradient-to-br from-[#18122B] to-[#393053] border border-[#635985] flex flex-col items-center text-center"
            >
              {/* Image */}
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

              {/* Info */}
              <h3 className="text-lg font-semibold text-[#A084DC] mb-1">{student.name}</h3>
              <p className="text-sm text-gray-300 mb-1">Age: {student.age}</p>
              <p className="text-sm text-gray-300 mb-1">Gender: {student.gender}</p>
              <p className="text-sm text-gray-300 mb-1">Mobile: {student.mobile}</p>
              <p className="text-sm text-gray-300 mb-1">Email: {student.email}</p>
              <p className="text-sm text-gray-300 mb-1">Course: {student.course}</p>
              <p className="text-sm text-gray-400">Admission Date: {student.admissiondate || 'N/A'}</p>
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
