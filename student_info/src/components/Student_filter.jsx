export const selectStudents = state => state.students.students;
export const selectFilter = state => state.students.filter;



export const Studentsurch_filter = state => {
  const filter = state.students.filter?.toLowerCase() || "";
  return state.students.students.filter(
    s => s.name.toLowerCase().includes(filter)
  );
};

export const Studentcourse_filter = state => {
  const filter = state.students.filter?.toLowerCase() || "";
  return state.students.students.filter(
    s => s.course.toLowerCase().includes(filter)
  );
}
