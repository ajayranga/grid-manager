import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import NotFoundPage from './Pages/NotFoundPage/loadable';
import Login from './Pages/Login/loadable';
import SignUp from './Pages/SignUp/loadable';
import DashBoard from './Pages/DashBoard/loadable';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<DashBoard />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
