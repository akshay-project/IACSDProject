import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom"

const AddSchedule = () => {
  let navigate = useNavigate();

    // const [em, setEm] = useState('');
    // const [no, setNo] = useState(0);
    // const [check, setCheck] = useState(true);
    const [dataSend, setDataSend] = useState({});
    // const [date, setDate] = useState("01-01-2022");

    //Day_1 Variables
    const [day1_module, setDay1_module] = useState(null);
    const [day1_faculty, setDay1_faculty] = useState(null);
    const [day1_link, setDay1_link] = useState(null);
    const [day1_pass, setDay1_pass] = useState(null);
    const [day1_time, setDay1_time] = useState(null);

    //Day_2 Variable
    const [day2_module, setDay2_module] = useState(null);
    const [day2_faculty, setDay2_faculty] = useState(null);
    const [day2_link, setDay2_link] = useState(null);
    const [day2_pass, setDay2_pass] = useState(null);
    const [day2_time, setDay2_time] = useState(null);

    //Day_3
    const [day3_module, setDay3_module] = useState(null);
    const [day3_faculty, setDay3_faculty] = useState(null);
    const [day3_link, setDay3_link] = useState(null);
    const [day3_pass, setDay3_pass] = useState(null);
    const [day3_time, setDay3_time] = useState(null);

    const [datea, setDate] = useState("01-01-2022");



    const onClickTitle = () => {

        var obj = {};
        if ((day1_module || day1_faculty || day1_time || day1_link || day1_pass) && (day2_module || day2_faculty || day2_time || day2_link || day2_pass) && (day3_module || day3_faculty || day3_time || day3_link || day3_pass)) {
            obj = {
                date: datea,
                day: [{
                    module: day1_module,
                    faculty: day1_faculty,
                    zoom: day1_link,
                    pass: day1_pass,
                    time: day1_time
                },
                {
                    module: day2_module,
                    faculty: day2_faculty,
                    zoom: day2_link,
                    pass: day2_pass,
                    time: day2_time
                },
                {
                    module: day3_module,
                    faculty: day3_faculty,
                    zoom: day3_link,
                    pass: day3_pass,
                    time: day3_time
                }
                ]
            }
            console.log("This is setting the data");
            setDataSend(obj);
            console.log(dataSend);
            submit(obj);
            alert("Shedule Added Succesfully!")
        }
        //Two
        else if ((day1_module || day1_faculty || day1_time || day1_link || day1_pass) && (day2_module || day2_faculty || day2_time || day2_link || day2_pass)) {
            obj = {
                date: datea,
                day: [{
                    module: day1_module,
                    faculty: day1_faculty,
                    zoom: day1_link,
                    pass: day1_pass,
                    time: day1_time
                },
                {
                    module: day2_module,
                    faculty: day2_faculty,
                    zoom: day2_link,
                    pass: day2_pass,
                    time: day2_time
                }
                ]
            }
            console.log("This is setting the data");
            setDataSend(obj);
            console.log(dataSend);
            submit(obj);
            alert("Shedule Added Succesfully!")
        }
        //One
        else if ((day1_module || day1_faculty || day1_time || day1_link || day1_pass)) {
            obj = {
                date: datea,
                day: [{
                    module: day1_module,
                    faculty: day1_faculty,
                    zoom: day1_link,
                    pass: day1_pass,
                    time: day1_time
                }
                ]
            }
            console.log("This is setting the data");
            setDataSend(obj);
            console.log(dataSend);
            submit(obj);
            alert("Shedule Added Succesfully!")
        }

       
    }

    const submit = (obj) => {
        let url = "https://student-akshay.herokuapp.com/schedule/add";
        // let noti1 = { notifications: noti }
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



    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        // onClickTitle();
    }, [])

    const viewAll = () => {
        navigate(`/admindashboard/viewschedule`);
    }
    return (
        <div className="container"><br /><b></b>
            <h1 className="text-center">Add Schedule</h1>
            <br /><br />
            <div style={{ float: "right" }}>
                {/* <Link to='/admindashboard/viewschedule' > */}
                    <button onClick={() => { viewAll() }} type="button" className="btn btn-danger">View All Schedule</button>
                {/* </Link> */}
            </div><br /><br />
            <table className="table " style={{ backgroundColor: "#00517B", color: "white" }}>
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
                    <tr>
                        <th colSpan="6"> < input value={datea}
                            onChange={e => setDate(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Date" /></th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td> <input onChange={e => setDay1_module(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Module" /></td>
                        <td><input onChange={e => setDay1_faculty(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Faculty" /></td>
                        <td><input onChange={e => setDay1_time(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Timing" /></td>
                        <td><input onChange={e => setDay1_link(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Link" /></td>
                        <td><input onChange={e => setDay1_pass(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Pass" /></td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td> <input onChange={e => setDay2_module(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Module" /></td>
                        <td><input onChange={e => setDay2_faculty(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Faculty" /></td>
                        <td><input onChange={e => setDay2_time(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Timing" /></td>
                        <td><input onChange={e => setDay2_link(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Link" /></td>
                        <td><input onChange={e => setDay2_pass(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Pass" /></td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td> <input onChange={e => setDay3_module(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Module" /></td>
                        <td><input onChange={e => setDay3_faculty(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Faculty" /></td>
                        <td><input onChange={e => setDay3_time(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Timing" /></td>
                        <td><input onChange={e => setDay3_link(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Link" /></td>
                        <td><input onChange={e => setDay3_pass(e.target.value)} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Pass" /></td>
                    </tr>

                </tbody>
            </table>
            <div className='text-center'>

                <button onClick={() => { onClickTitle() }} type="submit" className="btn btn-primary">Submit Schedule</button>
            </div>

            <br /><br />

        </div>
    )
}

export default AddSchedule
