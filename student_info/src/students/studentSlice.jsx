import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  status: 'idle', // loading, success, failed
  error: null
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
    resetStudents: (state) => {
      state.students = [];
    },
    setFilter : (state, action) => {
      state.filter = action.payload;
    },
    setCoursfilter : (state, action) => {
      state.coursefilter = action.payload;
    },
  }
});

export const { addStudent, removeStudent, resetStudents, setFilter } = studentSlice.actions;

export default studentSlice.reducer;