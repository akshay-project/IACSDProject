import React, { useState, useEffect } from 'react'
import axios from 'axios';
const AddNewUser = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [copass, setCoPass] = useState(null);


  useEffect(() => {
    // axios.get(`http://localhost:3000/marks/show`).then(resp => {
    //     console.log(resp.data);
    //     setData(resp.data);
    // });
  });

  const createStudent = () => {
    if (id && name && email && copass && pass) {
      //For generating new user with password
      console.log("Student is creating!");

      axios
        .post(`http://localhost:3000/auth/register`, {
          _id: id,
          name: name,
          email: email,
          pass: pass,
          copass: copass
        })
        .then((response) => {
          console.log("This is " + response.data.msg);
          alert(response.data.msg);
          if(response.data.msg==="Successfully Student Added"){
            
            axios
            .post(`http://localhost:3000/marks/add`, {
              _id: id,
             
            })
            .then((response) => {
              console.log("This is Marks");
              console.log(response.data);
              // console.log(response);
              // setPost(response.data);
            });
          }
          // console.log(response);
          // setPost(response.data);
        });

      //For generating new marks
      


    }

    


  }



  const deleteUser = (id) => {
    
  }
  return (
    <div className='container' style={{border:"3px solid #00517B", width:"60%", borderRadius:"10px",marginTop:"20px"  }}>
      <br />
      <h1 style={{color:"white",backgroundColor:"#00517B" }} className='text-center'>Student Add</h1><br />
      <div className="container" style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Id</label>
            <input onChange={(e) => setId(e.target.value)} type="text" className="form-control" id="id" aria-describedby="emailHelp" placeholder="Enter IACSD Id" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Name</label>
            <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Student Name" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Student Name" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Password</label>
            <input onChange={(e) => setPass(e.target.value)} type="password" className="form-control" id="copass" aria-describedby="emailHelp" placeholder="Enter Password" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Confirm Password</label>
            <input onChange={(e) => setCoPass(e.target.value)} type="password" className="form-control" id="pass" aria-describedby="emailHelp" placeholder="Enter Password" />
          </div>
        </form><br />
      
        <div className='text-center'>
          <button onClick={() => { createStudent() }} type="submit" className="btn btn-primary" style={{backgroundColor:"#00517B"}}>Submit</button>
        </div>
      </div><br />
    
    </div>
  )
}

export default AddNewUser