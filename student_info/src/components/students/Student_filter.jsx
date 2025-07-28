import { createSelector } from "@reduxjs/toolkit";

export const selectStudents = state => state.students.students;
export const selectFilter = state => state.students.filter;

export const Studentsurch_filter = createSelector(
  [selectStudents, selectFilter],
  (students, filter) => {
    if (!filter) return students;
    const lower = filter.toLowerCase();
    return students.filter(s => s.name.toLowerCase().includes(lower));
  }
);
