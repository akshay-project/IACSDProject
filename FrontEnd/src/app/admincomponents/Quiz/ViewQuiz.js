import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const ViewQuiz = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])


    //Get Data
    const loadUsers = async () => {

        const result = await axios.get("https://student-akshay.herokuapp.com/quiz/show");
        console.log(result);
        setData(result.data);
        console.log("This is Function");

    };
    const deleteUser = async id => {

        await axios.delete(`https://student-akshay.herokuapp.com/quiz/delete/${id}`);
        loadUsers();
    }
    return <div className='container'>
        <h1 className='text-center'>View All Quiz</h1>
        <br />
        <div style={{ float: "right" }}>
            <Link to='/admindashboard/addquiz' >
                <button type="button" className="btn btn-danger">Add Quiz</button>
            </Link>
        </div><br /><br />




        <div className="container" style={{ border: "3px solid #00517B", borderRadius: "10px" }}>
            {
                data.map((user, index) => (
                    <div key={index} className="container">
                        <div className="row">
                            <div className="col-10">
                                <h1 >{index + 1}) {user.question}</h1>
                            </div>

                            <div className='col-2' style={{textAlign:"right"}} >
                                <button onClick={() => deleteUser(user._id)} type="button" className="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>

                        <br />
                        {
                            user.answers.map((us, ind) => (
                                <div key={ind + 1212} style={{ marginLeft: "100px" }}>
                                    <h3>{ind + 1}) {us}</h3>
                                </div>
                            ))
                        }
                        <hr />
                        <h3>Correct Answer {user.correct}</h3>
                        <div style={{ border: "2px solid #00517B" }}></div>

                    </div>
                ))
            } <br /><br />
        </div>

    </div>;
};

export default ViewQuiz;
