import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom"
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';

const NavabarTeacher = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    console.log("Hi");
    navigate(`/teacherlogin`);
    dispatch(logout());
  }

  const home = () => {
    navigate(`/teacherdashboard/home`);
  }

  const profile = () => {
    navigate(`/teacherdashboard/profile`);
  }


  const chat = () => {
    navigate(`/teacherdashboard/chat`);
  }

  const syllabus = () => {
    navigate(`/teacherdashboard/syllabus`);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-2">
              <li className="nav-item ml-3">
                <a onClick={() => { home() }} className="nav-link active" aria-current="page" >Home</a>
              </li>

              <li className="nav-item">
                <a onClick={() => { chat() }} className="nav-link active" aria-current="page" >Chat</a>
              </li>

              <li className="nav-item">
                <a onClick={() => { profile() }} className="nav-link active" aria-current="page" >Profile</a>
              </li>

              {/* <li className="nav-item">
                <a onClick={() => { syllabus() }} className="nav-link active" aria-current="page" >Syllabus</a>
              </li> */}

              
             

             
              


            </ul>
            <form className="d-flex">
              {/* <input className="form-control me-1" style={{width:"80%"}}   value={`Roll no :- ${user._id}`} /> */}
              <h5 className='mr-4 mt-2'>{user.name}</h5>
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

export default NavabarTeacher