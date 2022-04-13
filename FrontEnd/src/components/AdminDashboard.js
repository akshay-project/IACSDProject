import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, NavLink, useNavigate } from "react-router-dom"
import { logout, selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux';

import Home from '../app/insidecomponents/Home';
import AdminHome from '../app/admincomponents/AdminHome'
import Navbar from '../app/admincomponents/Navbar';
import AddNotifications from "../app/admincomponents/Notifications/AddNotifications"
import ViewNotifications from '../app/admincomponents/Notifications/ViewNotifications';
import AddSchedule from "../app/admincomponents/Schedule/AddSchedule"
// import ViewSchedule from "../app/admincomponents/Schedule/AddSchedule"
import Schedule from "../app/admincomponents/Schedule/Schedule"
import AddQuiz from "../app/admincomponents/Quiz/AddQuiz"
import ViewQuiz from "../app/admincomponents/Quiz/ViewQuiz"
import AdminMark from '../app/admincomponents/Marks/AdminMark'
import AdminAddMarks from '../app/admincomponents/Marks/AdminAddMarks';
import AddNewUser from "../app/admincomponents/AddUser/AddNewUser"
const AdminDashboard = () => {
    let navigate = useNavigate();
    const user = useSelector(selectUser);
    // console.log("AD");
    // console.log(user);
    // const dispatch = useDispatch();
    // const handleLogout = () => {
    //     console.log("Hi");
    //     navigate(`/studentlogin`);
    //     dispatch(logout());
    // }
    
    

    return (
        <div>
           
            {/* <div className='text-center'>
                <h1>Name:-{user.name}</h1>
                <h1>Email:-{user.email}</h1>
                <h1>Mobile:-{user._id}</h1>
            </div> */}
            {/* <button onClick={() => handleLogout()} type="submit" className="btn btn-primary" >Logout</button> */}
            
            <Navbar></Navbar>
            <Routes>

                <Route path="/home" element={<AdminHome />} />
                <Route path="/addnotifications" element={<AddNotifications />} />
                <Route path="/viewnotifications" element={<ViewNotifications />} />

                <Route path="/addschedule" element={<AddSchedule />} />
                <Route path="/viewschedule" element={<Schedule />} />

                <Route path="/addquiz" element={<AddQuiz />} />
                <Route path="/viewquiz" element={<ViewQuiz />} />

                <Route path="/adminmark" element={<AdminMark />} />
                <Route path="/adminmarks/:id" element={<AdminAddMarks />} />

                <Route path="/adminadduser" element={<AddNewUser />} />


            </Routes>
        </div>
    )
}

export default AdminDashboard