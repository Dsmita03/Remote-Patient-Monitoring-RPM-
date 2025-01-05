// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext.js';

// Get the root element where the app will be rendered
const rootElement = document.getElementById('root');

// Create the root using the new createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the app with the context provider
root.render(
  <AuthContextProvider> 
    <App />
  </AuthContextProvider>
);
