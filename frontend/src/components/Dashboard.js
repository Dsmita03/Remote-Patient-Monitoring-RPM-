import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/healthdata');
        setHealthData(response.data);
      } catch (error) {
        console.error('Error fetching health data', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: healthData.map(entry => entry.date),
    datasets: [
      {
        label: 'Heart Rate',
        data: healthData.map(entry => entry.heartRate),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Blood Pressure',
        data: healthData.map(entry => entry.bloodPressure),
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Health Data Dashboard</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
