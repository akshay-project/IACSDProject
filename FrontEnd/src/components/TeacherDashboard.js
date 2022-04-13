import React from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, NavLink, useNavigate } from "react-router-dom"
import { logout, selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux';

// import Navbar from '../app/insidecomponents/Navbar'
// import Home from '../app/insidecomponents/Home';
// import Profile from '../app/insidecomponents/Profile'
// import Notifications from '../app/insidecomponents/Notifications';
// import Schedule from '../app/insidecomponents/Schedule';
// import Marks from '../app/insidecomponents/Marks';
// import Quiz from '../app/insidecomponents/Quiz';
// import UploadAssignment from '../app/insidecomponents/UploadAss';

import TeacherHome from "../app/teachercomponents/TeacherHome"
import TeacherChat from "../app/teachercomponents/TeacherChat"
import TeacherProfile from "../app/teachercomponents/TeacherProfile"
import TeacherSyllabus from "../app/teachercomponents/TeacherSyllabus"
import NavabarTeacher from '../app/teachercomponents/NavabarTeacher';
import ChatTeacher from '../app/teachercomponents/ChatTeacher';

const StudentDashboard = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log("Teacher Module");
    // console.log(user);
    // const dispatch = useDispatch();
    const handleLogout = () => {
        console.log("Hi");
        navigate(`/teacherlogin`);
        dispatch(logout());
    }
    return (
        <div>
            {/* <button onClick={()=>{handleLogout()}}>Click Me</button> */}
            {/* <div className='text-center'>
                <h1>Name:-{user.name}</h1>
                <h1>Email:-{user.email}</h1>
                <h1>Mobile:-{user._id}</h1>
            </div> */}
            {/* <button onClick={() => handleLogout()} type="submit" className="btn btn-primary" >Logout</button> */}
            
            {/* <Navbar></Navbar> */}
            <NavabarTeacher></NavabarTeacher>
            <Routes>

                <Route path="/home" element={<TeacherHome />} />
                <Route path="/profile" element={<TeacherProfile />} />
                <Route path="/chatadd/:id" element={<TeacherChat />} />
                <Route path="/syllabus" element={<TeacherSyllabus />} />
                <Route path="/chat" element={<ChatTeacher />} />

                {/* <Route path="/mark" element={<Marks />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/uploadassignment" element={<UploadAssignment />} /> */}

            </Routes>
        </div>
    )
}

export default StudentDashboard