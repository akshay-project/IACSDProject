import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom"

const Chat = () => {
    const user = useSelector(selectUser);
    const [data, setData] = useState(null);
    const [question, setQuestions] = useState(null);
    let navigate = useNavigate();

    const load = () => {
        axios.get('http://localhost:3000/chat/show').then(resp => {
            setData(resp.data);
            console.log(resp.data);
        });
    }

    useEffect(() => {
        axios.get('http://localhost:3000/chat/show').then(resp => {
            setData(resp.data);
            console.log(resp.data);
        });
    }, []);


    const submitQuestion = () => {
        axios.post('http://localhost:3000/chat/add', {
            studentId: user._id,
            question: question,
            teacherReplys: []
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        alert("Question submitted")
        navigate(`/dashboard/chat`);
    }

    const printData = () => {
        if (data) {
            return (<>

                {/* teacherReplys studentId */}
                {
                    data.map((user, index) => (
                        <div>
                            <div key={index} style={{ border: "3px solid #00517B", borderRadius: "10px" }}>
                                <h1>{index + 1}) {user.question}</h1>
                                <div style={{ border: "1px solid #00517B" }}></div>
                                <div>
                                    {
                                        user.teacherReplys.map((use, ind) => (
                                            <div style={{ marginLeft: "10%" }}>
                                                <h3>{ind + 1}) {use}</h3>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div><br />
                        </div>
                    ))
                }

            </>)
        }
    }
    return (
        <div className='container'><br />
            <div style={{textAlign:"right"}}>
                <button onClick={() => { load() }} type="submit" class="btn" style={{ backgroundColor: "#00517B", color: "white" }}>Refresh</button>

            </div>
            <br /><br />
            <div style={{ width: "80%", marginLeft: "auto", marginRight: 'auto', border: "3px solid #00517B", padding: "20px", borderRadius: "10px" }}>
                <h1 className='text-center'>Enter Your Doubt</h1>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Enter Question</label>
                        <input onChange={(e) => { setQuestions(e.target.value) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Question" />
                    </div><br />
                </form>
                <div style={{ border: "2px solid #00517B" }}></div>
                <br />
                <div className='text-center'>
                    <button onClick={() => { submitQuestion() }} type="submit" class="btn" style={{ backgroundColor: "#00517B", color: "white" }}>Submit</button>
                </div>
            </div><br /><br /><br /><br />



            <h1 className='text-center'>Already asked question</h1>
            {printData()}
        </div>
    )
}

export default Chat