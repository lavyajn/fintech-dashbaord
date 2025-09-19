import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'; 
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>AereusPay</h1>
        <Routes>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route element = {<ProtectedRoute/>}>
          <Route path = "/" element = {<DashboardPage/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;