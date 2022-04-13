import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';

import { NavLink, useNavigate } from "react-router-dom"

const ChatTeacher = () => {
    const user = useSelector(selectUser);
    let navigate = useNavigate();

    const [data, setData] = useState(null);
    const [question, setQuestions] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3000/chat/show').then(resp => {
            setData(resp.data);
            console.log(resp.data);
        });
    }, []);


    const changeComponent = (id) => {
        navigate(`/teacherdashboard/chatadd/${id}`);
    }

    const deleteUser = (id) =>{
        axios
        .delete(`http://localhost:3000/chat/deletechat/${id}`)
        .then((response2) => {
            //   alert("Post deleted!");
            console.log("THis is from React!");
            console.log(response2.data.msg);
            if (response2.data.msg === "deleted") {
                alert("Question Deleted")
                // load()
            }
            //   
        });
      }

      const load = () => {
        axios.get('http://localhost:3000/chat/show').then(resp => {
            setData(resp.data);
            console.log(resp.data);
        });
      }

    // const submitQuestion = () => {
    //     axios.post('http://localhost:3000/chat/add', {
    //         studentId: user._id,
    //         question: question,
    //         teacherReplys: []
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const printData = () => {
        if (data) {
            return (<>

                {/* teacherReplys studentId */}
                {
                    data.map((user, index) => (
                        <div key={index} >
                            <div className='container' style={{ border: "3px solid #00517B", borderRadius:"14px" }}>
                                <div className='row'>
                                    <div className="col-9">
                                        <h1>{index + 1}) {user.question}</h1>
                                    </div>
                                    <div className="col-3">
                                        <button onClick={()=>{changeComponent(user._id)}} type="button" className="btn btn-outline-primary mt-2">Answer This</button>
                                        <button onClick={()=>{deleteUser(user._id)}} type="button" className="btn btn-outline-danger mt-2 ml-2">Delete This</button>

                                    </div>
                                </div><hr />
                                <div><h4>Asked By :- {user.studentId}</h4></div>
                                <div style={{border:"1px solid #00517B"}}></div>
                                <div>
                                    {
                                        user.teacherReplys.map((use, ind) => (
                                            <div style={{ marginLeft: "8%" }}>
                                                <h3>{ind + 1}) {use}</h3>
                                                <div style={{ border: "1px solid #00517B" }}></div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <br /><br />
                        </div>
                    ))
                }

            </>)
        }
    }
    return (
        <div>
            <br />
            <div style={{textAlign:"right"}} className="container">
            <button onClick={()=>{load()}} type="button" className="btn" style={{backgroundColor:"#00517B", color:"white"}}>Refresh</button>
            </div>
            <h1 className='text-center'>Questions</h1>
            <br />
            {printData()}
        </div>
    )
}

export default ChatTeacher