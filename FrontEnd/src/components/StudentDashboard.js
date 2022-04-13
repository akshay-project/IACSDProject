import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, NavLink, useNavigate } from "react-router-dom"
import { logout, selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux';

import Navbar from '../app/insidecomponents/Navbar'
import Home from '../app/insidecomponents/Home';
import Profile from '../app/insidecomponents/Profile'
import Notifications from '../app/insidecomponents/Notifications';
import Schedule from '../app/insidecomponents/Schedule';
import Marks from '../app/insidecomponents/Marks';
import Quiz from '../app/insidecomponents/Quiz';
import UploadAssignment from '../app/insidecomponents/UploadAss';
import Chat from '../app/insidecomponents/Chat';

const StudentDashboard = () => {
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

                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/mark" element={<Marks />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/uploadassignment" element={<UploadAssignment />} />
                <Route path="/chat" element={<Chat />} />

            </Routes>
        </div>
    )
}

export default StudentDashboard