// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      {/* Show Sidebar and Routes only if authenticated */}
      {isAuthenticated && (
        <div className="sidebar">
          <div className="logo">VitalScope</div>
          <ul className="sidebar-links">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/health-data">Health Data</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </div>
      )}
      
      <Routes>
        {/* Define routes */}
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
        
        {/* Define the route for login */}
        <Route path="/login" element={<Login />} />
        
        {/* Define the route for register */}
        <Route path="/register" element={<Register />} />

        {/* Define the route for profile */}
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
        
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
