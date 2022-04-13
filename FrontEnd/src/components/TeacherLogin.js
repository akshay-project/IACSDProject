import React, { useState, useEffect } from 'react'

   
import { BrowserRouter, Navigate, Route, Routes, useNavigate  } from "react-router-dom"
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux';
import axios from "axios";



const TeacherLogin = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  /////New Code
  const [id, setId] = useState(null);
  const [pass, setPass] = useState(null);
  const [data, setData] = useState(null);
  const [errMsg, setErrmsg] = useState(false);
  const back = () => {
    navigate(`/`);
  }


  useEffect(() => {
    if (data) {
      handleSubmit();
    }
  }, [data]);

  const handleSubmit = () => {
    dispatch(login(data));
    if(data){
      console.log("Data is there");
      navigate(`/teacherdashboard/home`);
    }
    console.log("Form Submitted");
  }










  const check = async () => {
    if (id === null || pass === null) {
      setErrmsg(true);
    }
  
    else if (id, pass) {
      axios
        .post(`http://localhost:3000/teacherauth/login`, {
          _id: id,
          pass: pass
        })
        .then((response) => {
          if (response.data === "") {
            setErrmsg(true);
          }
          const checkdata = response.data;
          console.log("Check dta");
          console.log(checkdata);
          setData(checkdata);
          console.log(checkdata);
          console.log(data);
          // console.log(response.data);
          // setCheck(response.data);
          // funtochagedata(response.data);
        });
    }

    // navigate('try');
    console.log("Check is Pressed!");
    // navigate('try');

    // setTimeout(()=>{handleSubmit()},2000);
    // if (data) {
    //   handleSubmit();
    // }


  }

  const printErr = () => {
    if (errMsg === true) {
      return (<>
        <h4 style={{color:"red", textAlign:"center"}}>Invalid Credentials</h4>
      </>)
    } else {
      return (<>
        <br />
      </>)
    }
  }


  return (
    <div className='container'><br /><br />
      <div>
      <button
            onClick={() => {back() }}
            type="submit" className="btn btn-primary" style={{ color: "white", backgroundColor: "#00517B" }}>Back</button>
      </div>
      <br /><br />

      <div className="container" style={{ width: "40%", border: "2px solid #00517B", borderRadius: "10px", padding: "20px" }}>
        <form  >
          <h1 className="text-center" style={{ color: "white", backgroundColor: "#00517B", borderRadius: "10px" }}>Teacher Login</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Teacher Id</label>
            <input
              onChange={e => setId(e.target.value)}
              type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter IACSD Id" />
          </div><br />

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={e => setPass(e.target.value)}
              type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          {/* <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          </div> */}

        </form>
        <br />
          <div style={{border:"3px solid #00517B"}}></div>
        <br />{printErr()}
        <div className="container text-center">
        <button
          onClick={() => { check() }}
          type="submit" style={{color:"white", backgroundColor:"#00517B"}} className="btn btn-primary">Submit</button>
        </div>
        

        {/* <NavLink to="/try" > <button
          onClick={() => { check() }}
          type="submit" className="btn btn-primary">Submit</button>
        </NavLink> */}
      </div>
    </div>
  )
}

export default TeacherLogin