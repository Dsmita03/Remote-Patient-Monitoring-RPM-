import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Profile.css';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [healthData, setHealthData] = useState({});
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/auth/profile');
        setEmail(response.data.email);
        setName(response.data.name);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    const fetchHealthData = async () => {
      try {
        const response = await axios.get('/api/health/data');
        setHealthData(response.data);
      } catch (error) {
        console.error('Error fetching health data', error);
      }
    };

    fetchProfile();
    fetchHealthData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/auth/profile', { name });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="profile-container">
      {/* Side Navbar */}
      <div className="sidebar">
        <div className="logo">VitalScope</div>
        <ul className="sidebar-links">
          <li>Dashboard</li>
          <li>Health Data</li>
          <li>Reports</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Profile Content */}
      <div className="profile-content">
        <div className="profile-box">
          <h2>Profile</h2>
          <form onSubmit={handleUpdate}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                readOnly
                className="input-field"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-btn">Update Profile</button>
          </form>
        </div>

        <div className="health-status">
          <h3>Health Status</h3>
          <div className="health-info">
            <p><strong>Chronic Condition:</strong> {healthData.chronicCondition || 'Not Available'}</p>
            <p><strong>Last Blood Pressure:</strong> {healthData.lastBloodPressure || 'Not Available'}</p>
            <p><strong>Heart Rate:</strong> {healthData.heartRate || 'Not Available'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
