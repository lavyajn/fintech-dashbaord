import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>Aereus Gateway</h1>
        <Routes>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/" element = {<DashboardPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;