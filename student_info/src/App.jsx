import React from 'react'
import StudentForm from './components/studentform'
import StudentList from './components/student_list'
import Home from './components/home'

const App = () => {
  return (
    <div>
      <StudentForm/>
      <StudentList/>
      <Home/>
    </div>
  )
}

export default App
