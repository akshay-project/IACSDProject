import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import { XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { logout, selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';

const Marks = () => {
  const user = useSelector(selectUser);
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/marks/getmark/${user._id}`).then(resp => {

      console.log(resp.data);
      setData(resp.data);
    });
  },[]);
  return (
    <div className='container'>
      <h1 classsubject="chart-heading" className='text-center'>Marks</h1><br /><br />
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data.marks}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis dataKey="marks" />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="marks" fill="#00517B " maxBarSize={75} label />
          {/* <Bar dataKey="fees" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Marks