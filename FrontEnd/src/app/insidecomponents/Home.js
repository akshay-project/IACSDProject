import React ,{ useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { BrowserRouter, Navigate, Route, Routes, NavLink } from "react-router-dom"
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';
const Home = () => {
  const user = useSelector(selectUser);

  // const [ data, setData ] = useState(0);
  // useEffect(() => {
  //   setData(JSON.parse(window.localStorage.getItem('data')));
  //   console.log("1st");
    
  // }, []);


  // useEffect(() => {
  //   window.localStorage.setItem('data', data);
  //   console.log("This is data");
  //   setData(user);
  //   console.log(data);
  // }, [data]);



    // console.log("AD");
    // console.log(user);
    // const dispatch = useDispatch();
  return (
    <div >
        {/* <div className='text-center'>
                <h1>Name:-{user.name}</h1>
                <h1>Email:-{user.email}</h1>
                <h1>Mobile:-{user._id}</h1>
            </div> */}
           
            <h1 className='text-center' style={{marginTop:"15%"}}>Welcome {user.name}</h1>
    </div>
  )
}

export default Home