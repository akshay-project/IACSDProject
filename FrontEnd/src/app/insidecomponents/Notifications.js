import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Notifications = () => {
  const [data, setData] = useState([]);
  // const renderedData = data.map((d) => {
  //     return (
  //       <React.Fragment key={d._id}>


  //         <div className="container">
  //         <br />
  //             <div style={{ border: "2px solid grey",backgroundColor:"yellow"  }}>
  //                 <i className="bi bi-bell-fill" > {d.notifications}</i>
  //             </div>
  //             <br />
  //         </div>

  //       </React.Fragment>
  //     );
  //   });

  useEffect(() => {
    console.log("Hi!, kaisa hai bro!");
    loadUsers();
  }, [])

  const loadUsers = async () => {

    const result = await axios.get("https://student-akshay.herokuapp.com/notifications/show");
    console.log(result);
    setData(result.data);
    console.log("This is Function");

  };
  const refresh = () => {
    loadUsers();
  }


  // React.useEffect(() => {
  //   const fetchLocation = async () => {
  //     await fetch("http://localhost:1111/notifications/show")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   };
  //   fetchLocation();
  // }, []);

  return (
    <div>

      <h1 className='text-center'>Notifications</h1><br />
      <div className="container" style={{border: "2px solid #00517B", borderRadius:"10px"}}>
        <div style={{ float: "right" }}>
          <i onClick={() => refresh()} className="bi bi-arrow-clockwise"></i>
        </div>
        <table className="table">
          <thead>
            <tr>

              <th scope="col-1">#</th>
              <th scope="col-11">Notifications</th>

            </tr>
          </thead>
          <tbody>

            {
              data.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.notifications}</td>
                </tr>
              ))
            }



          </tbody>
        </table>
      </div>

      {/* {renderedData} */}
    </div>
  )
}

export default Notifications
