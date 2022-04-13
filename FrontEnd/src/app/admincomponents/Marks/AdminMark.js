import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useNavigate } from 'react-router-dom';


const AdminMark = () => {
    let navigate = useNavigate();
    const [data, setData] = useState([{ _id: 11 }]);
    const load = () => {
        axios.get(`http://localhost:3000/marks/show`).then(resp => {
            console.log(resp.data);
            setData(resp.data);
        });
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/marks/show`).then(resp => {
            console.log(resp.data);
            setData(resp.data);
        });
    }, []);

    useEffect(() => {

    }, [data]);

    const navigateStudent = (id) => {
        console.log(id);
        navigate(`/admindashboard/adminmarks/${id}`)
    }

    const deleteStudent = (id) => {
        // await axios.delete(`http://localhost:3000/marks/deletemark/${id}`);
        // await axios.delete(`http://localhost:3000/auth/deleteuser/${id}`);
        axios
            .delete(`http://localhost:3000/marks/deletemark/${id}`)
            .then((response) => {
                //   alert("Post deleted!");
                console.log("THis is from React!");
                console.log(response.data.msg);
                if (response.data.msg === "User Deleted") {

                    axios
                        .delete(`http://localhost:3000/auth/deleteuser/${id}`)
                        .then((response2) => {
                            //   alert("Post deleted!");
                            console.log("THis is from React!");
                            console.log(response2.data.msg);
                            if (response2.data.msg === "Marks Deleted") {
                                alert("User Deleted")
                                load()
                            }
                            //   
                        });
                }
            });



    }

    const printData = () => {
        if (data) {
            return (<div style={{ width: "60%", marginLeft: "auto", marginRight: "auto", backgroundColor: "", border: "3px solid #00517B", borderRadius: "10px", marginTop: "30px", padding: "20px" }}>
                <h1 className='text-center' style={{ color: "white", backgroundColor: "#00517B" }}>List of Students</h1><br />
                <table className="table table" >
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            {/* <th scope="col">Name</th>
                            <th scope="col">Email</th> */}
                            <th scope="col">Add Marks</th>
                            <th scope="col">Delete Student</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => (

                                <tr key={index}>
                                    <td scope="row">{user._id}</td>
                                    {/* <td>{user.name}</td>
                  <td>{user.email}</td> */}
                                    <td><button style={{ backgroundColor: "#00517B", color: "white" }} onClick={() => { navigateStudent(user._id) }} type="button" className="btn btn">Add Marks</button></td>
                                    <td><button style={{ backgroundColor: "red", color: "white" }} onClick={() => { deleteStudent(user._id) }} type="button" className="btn btn">Delete</button></td>

                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>)
        }
    }
    return (
        <div><br /><br />
            <div className='container' style={{textAlign:"right"}}>
                <button style={{ backgroundColor: "#00517B", color: "white" }} onClick={() => { load() }} type="button" className="btn btn">Refresh</button>
            </div>
            {printData()}
        </div>
    )
}

export default AdminMark