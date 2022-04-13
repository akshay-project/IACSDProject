import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const ViewNotifications = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])
                                                                
    // React.useEffect(() => {
    //     const fetchLocation = async () => {
    //         await fetch("http://localhost:1111/notifications/show")
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setData(data);
    //                 console.log(data);
    //             });
    //     };
    //     fetchLocation();
    // }, []);


    //Get Data
    const loadUsers = async () => {
        
        const result = await axios.get("https://student-akshay.herokuapp.com/notifications/show");
        console.log(result);
        setData(result.data);
        console.log("This is Function");
        
    };


    //Delete User
    const deleteUser=async id =>{

        await axios.delete(`https://student-akshay.herokuapp.com/notifications/delete/${id}`);
        loadUsers();
       }
    return (
        <div className="container">
            <h1 className='text-center'>View Notifications</h1>
            <div style={{ float: "right" }}>
                <Link to='/admindashboard/addnotifications' >
                    <button type="button" className="btn btn-danger">Add Notifications</button>
                </Link>
            </div><br /><br />
            <table className="table" style={{border: "2px solid #00517B", borderRadius:"10px"}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Notifications</th>
                      
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                                data.map((user,index)=>(    
                                    <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.notifications}</td>
                                   
                                    <td onClick={()=>deleteUser(user._id)}>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                           
                       
                       
                    </tbody>
                </table>
               
        </div>
    )
}

export default ViewNotifications
