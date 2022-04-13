import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';

const AdminAddMarks = () => {
    let { id } = useParams();
    const [data, setData] = useState({});
    const [subjectName, setSubjectName] = useState(null);
    const [subjectMarks, subjectMarksSet] = useState(null);
    const [getMarksByStudent, setMarksByStudent] = useState([]);
    const getAllMarks = () => {
        axios.get(`http://localhost:3000/marks/getmark/${id}`).then(resp => {
            console.log(resp.data.marks);
            setMarksByStudent(resp.data.marks);
        });
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/marks/getmark/${id}`).then(resp => {

            // console.log(resp.data);
            setData(resp.data);
        });
        getAllMarks();
    }, []);


    useEffect(() => {
    }, [getAllMarks]);

    const submit = () => {

        let { _id, marks } = data;
        // console.log(marks);
        marks.push({
            subject: subjectName,
            marks: subjectMarks
        })
        axios
            .patch(`http://localhost:3000/marks/updatemark/${_id}`, {
                _id: _id,
                marks: marks
            })
            .then((result) => {
                console.log(result.data.msg);
                // if(result.data.msg===true){
                //     alert("Marks Added Succesfully!")

                // }
            })
        //.then((result) => result.data)

        getAllMarks();
    }

    const deleteUser = (id) => {
        let { _id, marks } = data;
        // console.log(marks);
        marks.splice(id, 1);
        axios
            .patch(`http://localhost:3000/marks/updatemark/${_id}`, {
                _id: _id,
                marks: marks
            })
            .then((result) => {
                console.log(result.data.msg);
                // if(result.data.msg===true){
                //     alert("Data Updated Succesfully!")
                // }
            })
        getAllMarks();
    }



    return (
        <div><br /><br />
            <div style={{width: "50%", marginLeft: "auto", marginRight: "auto", border: "5px solid #00517B", borderRadius: "10px", padding: "20px"}}>
                <form style={{ }}>
                    <div className="form-group">
                        <div style={{ textAlign: "center" }}>
                            <h3>Student Id :- {data._id}</h3>
                            <div style={{border:"3px solid #00517B", borderRadius:"10px"}}></div>
                            {/* <h3>Student Name :- {data.name}</h3>
                    <h3>Student Email :- {data.email}</h3> */}
                        </div>
                        <label htmlFor="exampleInputEmail1">Subject</label>
                        <input onChange={e => setSubjectName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter subject" />

                        <label htmlFor="exampleInputEmail1">Marks</label>
                        <input onChange={e => subjectMarksSet(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mark" />
                    </div>
                </form><br />
                <div style={{border:"3px solid #00517B", borderRadius:"10px"}}></div><br />

                <div className="text-center">
                    <button type="submit" style={{backgroundColor:"#00517B",color:"white"}} onClick={() => { submit() }} className="btn" >Submit</button>
                </div><br />
            </div><br /><br />


            <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto",border:"5px solid #00517B",padding:"10px",borderRadius:"10px" }}>
                <h1 className='text-center' style={{backgroundColor:"#00517B",color:"white"}}>Added Marks</h1>
                <table className="table" style={{backgroundColor:""}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getMarksByStudent.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.subject}</td>
                                    <td>{user.marks}</td>
                                    <td><button onClick={() => { deleteUser(index) }} type="button" className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* {
                    getMarksByStudent.map((user, index) => (
                        <div key={index}>
                            <h1>Subject :- {user.subject} Marks:- {user.marks}</h1>
                        </div>
                    ))
                } */}
            </div>

        </div>
    )
}

export default AdminAddMarks