
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { NavLink, useNavigate } from "react-router-dom"

const TeacherChat = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/chat/getchat/${id}`).then(resp => {
      setData(resp.data);
      console.log(resp.data);
    });
  },[]);

  const submitAnswer = () => {
    if(answer){
      let { _id, question, teacherReplys } = data;
    teacherReplys.push(answer);
    axios
      .patch(`http://localhost:3000/chat/updatemark/${id}`, {
        _id: _id,
        teacherReplys: teacherReplys,
        question: question
      })
      .then((result) => result.data)
      setAnswer(null);
    navigate(`/teacherdashboard/chat`);
    }
    else if(answer===null){
      alert("Answer should not be empty!")
    }
    

  }

  

  const printData = () => {
    if (data) {
      return (<div className='container' style={{ border: "3px solid #00517B", borderRadius: "12px", padding: "20px" }}>
        <h1>{data.question}</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Enter Answer</label>
            <input onChange={(e) => { setAnswer(e.target.value) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Question" />
          </div>
        </form><br />
        <div className="text-center">
          <button onClick={() => { submitAnswer() }} type="submit" class="btn" style={{backgroundColor:"#00517B",color:"white"}}>Submit</button>
        </div>
      </div>)
    }
  }

  return (
    <div><br />
      <h1 className='text-center'>Answer Question</h1><br />
      {printData()}
    </div>
  )
}

export default TeacherChat