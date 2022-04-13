// import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

import FirstPage from "./components/FirstPage"

import StudentLogin from "./components/StudentLogin"
import StudentDashboard from './components/StudentDashboard'

import TeacherLogin from "./components/TeacherLogin"
import TeacherDashboard from "./components/TeacherDashboard"

import AdminDashboard from "./components/AdminDashboard"
import AdminLogin from "./components/AdminLogin"
function App() {
  const user = useSelector(selectUser);
  // console.log("User Data Getting");
  // console.log(user);
  return (
    <BrowserRouter>
      <div style={{backgroundColor: "#00517B", height:"80px" }}>
        <h1 className='text-center' style={{ color: "white",verticalAlign:"middle"}}>IACSD Management System</h1>
      </div>
      {/* {user ? <TeacherDashboard /> : <TeacherLogin />} */}
      <Routes>
        <Route path="*" element={<FirstPage />} />


        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/dashboard/*" element={user ? <StudentDashboard /> : <Navigate to="/studentlogin" />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard/*" element={user ? <AdminDashboard /> : <Navigate to="/adminlogin" />} />


        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/teacherdashboard/*" element={user ? <TeacherDashboard /> : <Navigate to="/teacherlogin" />} />


      </Routes>


    </BrowserRouter>
  );
}

export default App;
