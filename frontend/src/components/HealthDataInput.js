import React, { useState } from 'react';
import axios from 'axios';

const HealthDataInput = () => {
  const [heartRate, setHeartRate] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/healthdata', { heartRate, bloodPressure });
      alert('Health data submitted successfully');
    } catch (error) {
      console.error('Error submitting health data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} placeholder="Heart Rate" required />
      <input type="text" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} placeholder="Blood Pressure" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HealthDataInput;
