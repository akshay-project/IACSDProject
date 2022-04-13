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
    navigate(`/adminlogin`);
    dispatch(logout());
  }

  const home = () => {
    navigate(`/admindashboard/home`);
  }

  const addnotifications = () => {
    navigate(`/admindashboard/addnotifications`);
  }

  const addschedule = () => {
    navigate(`/admindashboard/addschedule`);
  }

  

  const addquiz = () => {
    navigate(`/admindashboard/addquiz`);
  }

  const viewquiz = () => {
    navigate(`/admindashboard/viewquiz`);
  }

   const adminmark = () => {
    navigate(`/admindashboard/adminmark`);
  }

  const adduser = () => {
    navigate(`/admindashboard/adminadduser`);
  }


  
  

  
  return (
    <div>



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-2">
              <li className="nav-item ml-3">
                <a onClick={() => { home() }} className="nav-link active" aria-current="page" >Home</a>
              </li>
              <li className="nav-item ml-3">
                <a onClick={() => { addnotifications() }} className="nav-link active" aria-current="page" >Add Notifications</a>
              </li>

              <li className="nav-item ml-3">
                <a onClick={() => { addschedule() }} className="nav-link active" aria-current="page" >Add Schedule</a>
              </li>

  

              <li className="nav-item ml-3">
                <a onClick={() => { addquiz() }} className="nav-link active" aria-current="page" >Add Quiz</a>
              </li>

              <li className="nav-item ml-3">
                <a onClick={() => { adminmark() }} className="nav-link active" aria-current="page" >Add Mark</a>
              </li>

              <li className="nav-item ml-3">
                <a onClick={() => { adduser() }} className="nav-link active" aria-current="page" >Add Student</a>
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