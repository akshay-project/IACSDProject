import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom"
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';


const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    // console.log("Hi");
    navigate(`/studentlogin`);
    dispatch(logout());
  }

  const home = () => {
    navigate(`/dashboard/home`);
  }
  const profile = () => {
    navigate(`/dashboard/profile`);
  }
  const notifications = () => {
    navigate(`/dashboard/notifications`);
  }
  const schedule = () => {
    navigate(`/dashboard/schedule`);
  }
  const mark = () => {
    navigate(`/dashboard/mark`);
  }

  const quiz = () => {
    navigate(`/dashboard/quiz`);
  }

  const upload = () => {
    navigate(`/dashboard/uploadassignment`);
  }

  const chat = () => {
    navigate(`/dashboard/chat`);
  }

  
  return (
    <div>



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Student</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-2">
              <li className="nav-item ml-3">
                <a onClick={() => { home() }} className="nav-link active" aria-current="page" >Home</a>
              </li>

              <li className="nav-item">
                <a onClick={() => { notifications() }} className="nav-link active" aria-current="page" >Notifications</a>
              </li>

              <li className="nav-item">
                <a onClick={() => { schedule() }} className="nav-link active" aria-current="page" >Schedule</a>
              </li>

              <li className="nav-item">
                <a onClick={() => { mark() }} className="nav-link active" aria-current="page" >Marks</a>
              </li>

              
              <li className="nav-item">
                <a onClick={() => { quiz() }} className="nav-link active" aria-current="page" >Quiz</a>
              </li>
              {/* <li className="nav-item">
                <a onClick={() => { upload() }} className="nav-link active" aria-current="page" >Assignments</a>
              </li> */}

              <li className="nav-item">
                <a onClick={() => { profile() }} className="nav-link active" aria-current="page" >Profile</a>
              </li>

              <li className="nav-item">
                <a onClick={() => { chat() }} className="nav-link active" aria-current="page" >Chat</a>
              </li>
              <li className="nav-item d-flex">
              </li>


            </ul>
            <form className="d-flex">
              {/* <input className="form-control me-1" style={{width:"80%"}}   value={`Roll no :- ${user._id}`} /> */}
              {/* <h4>{u}</h4> */}
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              <button onClick={() => handleLogout()} type="submit" className="btn btn-danger" >Logout</button>

            </form>


          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar