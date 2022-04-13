import React from 'react'
import { useDispatch } from 'react-redux';
// import { BrowserRouter, Navigate, Route, Routes, NavLink } from "react-router-dom"
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';
// import { NavLink, useNavigate } from "react-router-dom"


const TeacherHome = () => {
  const user = useSelector(selectUser);

  return (
    <div>
        {/* <h1>{user._id}</h1> */}
        <h1 className='text-center' style={{marginTop:"10%"}}>Welcome {user.name} To Teacher Dashboard</h1>
        
    </div>
  )
}

export default TeacherHome