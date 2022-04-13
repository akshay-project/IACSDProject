import React from 'react'
import { useNavigate } from "react-router-dom"

const FirstPage = () => {

  let navigate = useNavigate();

  const next = (data) => {
    // alert.show('Oh look, an alert!')
    // alert("I am an alert box!");
    // window.confirm("sometext");
    // let person = prompt("Please enter your name", "Harry Potter");
    // let text;
    // if (person == null || person == "") {
    //   text = "User cancelled the prompt.";
    // } else {
    //   text = "Hello " + person + "! How are you today?";
    // }

    console.log("Data " + data);
    navigate(`/${data}`);
    <h1 className="text-center" style={{ color: "white", backgroundColor: "#00517B", borderRadius: "10px" }}>Admin Login</h1>
  }
  return (
    <div className='container text-center'>
      <div className="row" style={{ height: "200px", marginTop: "15%",marginLeft:"100px" }} >
        {/* 1st Div */}
        <div className="col-3" onClick={() => { next("studentlogin") }} style={{ backgroundColor: "#00517B" }}>
          <br /><br /><br />
          <h1 className='text-center' style={{ color: "white" }}>Student</h1>
        </div>
        <div className="col-1"></div>

        {/* 2nd Div */}
        <div className="col-3" onClick={() => { next("teacherlogin") }} style={{ backgroundColor: "#00517B" }}>
          <br /><br /><br />
          <h1 className='align-middle' style={{ color: "white" }}>Teacher</h1>
        </div>
        <div className="col-1"></div>

        {/* 3rd Div */}
        <div className="col-3" onClick={() => { next("adminlogin") }} style={{ backgroundColor: "#00517B" }}>
          <br /><br /><br />
          <h1 style={{ color: "white" }}>Admin</h1>
        </div>
        <div className="col-1"></div>

      </div>
    </div>
  )
}

export default FirstPage