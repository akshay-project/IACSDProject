import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddNotifications = () => {

    const [noti, setNoti] = useState("");
    const submit = () => {
        // https://student-akshay.herokuapp.com/schedule/show
        let url = "https://student-akshay.herokuapp.com/notifications/add";
        let noti1 = { notifications: noti }
        let data = noti1;

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
        alert("Notification Added Successfully")
        setNoti("");
    }


    return (
        <div className='container'>
            <h1 className='text-center'>Add Notifications</h1>
            <br /><br />
            <div style={{ float: "right" }}>
                <Link to='/admindashboard/viewnotifications' >
                    <button type="button" className="btn btn-danger">View All Notifications</button>
                </Link>
            </div><br /><br />
            <br /><br />
            <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%", border: "2px solid #00517B", borderRadius:"10px" }}>
                <form style={{ marginLeft: "10%", marginRight: "12%", marginTop: "1%", marginBottom: "1%" }}>
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail1">Enter Notifications</label>
                        <input value={noti}
                            onChange={e => setNoti(e.target.value)}
                            type="text" className="form-control" id="exampleInputEmail1" aria-describedby="notificationHelp" placeholder="Enter Notifications" />

                    </div>


                </form>
                <div className='text-center' style={{  marginBottom: "3%" }}>
                    <button onClick={() => { submit() }} type="submit" className="btn btn-primary">Submit</button>
                </div>

            </div>

        </div>
    )
}

export default AddNotifications;
