import React from 'react'
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';


const AdminHome = () => {
  const user = useSelector(selectUser);
  console.log("This is admin home");
  console.log(user);

  
  return (
    <div>

     <div className='text-center'>  
                <h1 style={{marginTop:"15%"}}>Welcome {user.name} To The Admin Dashboard</h1>
               
            </div></div>
  )
}

export default AdminHome