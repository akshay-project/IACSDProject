import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddQuiz = () => {

    const [q, setQ] = useState("");
    const [an1, setAn1] = useState("");
    const [an2, setAn2] = useState("");
    const [an3, setAn3] = useState("");
    const [an4, setAn4] = useState("");


    const [answer, setCorrectAnswer] = useState(null);

    
    

    const submit = () => {
        // let url = "https://student-akshay.herokuapp.com/schedule/add";
        let url ="https://student-akshay.herokuapp.com/quiz/add"
        // let noti1 = { notifications: noti }
        var obj={ question: q, answers: [an1,an2,an3,an4], correct: answer }
        let data = obj;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((res) => {
                console.warn('res', res)
            })
        })
    }

    return <div className='container'>
        <h1 className='text-center'>Add Quiz</h1>
        <div>
        <div style={{ float: "right" }}>
                <Link to='/admindashboard/viewquiz' >
                    <button type="button" className="btn btn-danger">View All Quiz</button>
                </Link>
            </div><br /><br />
        </div>


        <div className="container" style={{border:"3px solid #00517B", borderRadius:"10px"}}>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Question</label>
                    <input onChange={e => setQ(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div><br />
                <div style={{border:"2px solid #00517B"}}></div>
               <br />
                <div style={{ width: "70%", marginRight: "auto", marginLeft: "auto" }}>
                    <label htmlFor="exampleInputEmail1">Answer - 1</label>
                    <input onChange={e => setAn1(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Answer - 1" />

                    <label htmlFor="exampleInputEmail1">Answer - 2</label>
                    <input onChange={e => setAn2(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Answer - 2" />

                    <label htmlFor="exampleInputEmail1">Answer - 3</label>
                    <input onChange={e => setAn3(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Answer - 3" />

                    <label htmlFor="exampleInputEmail1">Answer - 4</label>
                    <input onChange={e => setAn4(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Answer - 4" />

                    <label htmlFor="exampleInputEmail1">Enter Correct Answer</label>
                    <input onChange={e => setCorrectAnswer(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Correct Answer" />
                </div>

            </form><br /><br />
            <div className="text-center">
                <button onClick={()=>{submit()}} type="submit" className="btn btn-primary">Add Question</button>
            </div><br />
        </div>


    </div>;
};

export default AddQuiz;
