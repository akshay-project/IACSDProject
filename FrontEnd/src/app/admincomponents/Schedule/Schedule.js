import React, { useState, useEffect } from 'react'
import axios from 'axios'
const arr = []
const Schedule = () => {
    const [allData, setAllData] = useState(arr);
    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])


    const loadUsers = async () => {

        const result = await axios.get("https://student-akshay.herokuapp.com/schedule/show");
        console.log(result);
        setAllData(result.data);
        console.log("This is Function");

    };
    const refresh = () => {
        loadUsers();
    }
    const deleteUser = async id => {

        await axios.delete(`https://student-akshay.herokuapp.com/schedule/delete/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <h1 className='text-center'>Schedule</h1>
            <div style={{ float: "right" }}>
                <i onClick={() => refresh()} className="bi bi-arrow-clockwise"></i>
            </div>
            <>{
                allData.map((user, index) => (
                    <div key={user._id} style={{ border: "2px solid #00517B", borderRadius: "10px", marginTop: "20px", marginBottom: "30px" }}>
                        <div className="row">
                            <div className="col-11">
                                <h3 className='text-center'>{user.date}</h3>

                            </div>
                            <div className="col-1">
                                <button onClick={() => { deleteUser(user._id) }} type="button" className="btn btn-outline-danger">Delete</button>

                            </div>
                        </div>
                        <div style={{ border: "2px solid #00517B" }}></div><br />
                        <table className="table table-bordered" style={{ backgroundColor: "#00517B", color: "white" }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Module</th>
                                    <th scope="col">Faculty</th>
                                    <th scope="col">Timing</th>
                                    <th scope="col">Links</th>
                                    <th scope="col">Pass</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.day.map((use, ind) => (
                                        <tr key={(ind + 100)}>
                                            <td >{ind + 1}</td>
                                            <td>{use.module}</td>
                                            <td>{use.faculty}</td>
                                            <td>{use.time}</td>
                                            <td>{use.zoom}</td>
                                            <td>{use.pass}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ))
            }
            </>
        </div>
    )
}

export default Schedule
