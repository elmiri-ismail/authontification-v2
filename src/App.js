import React from 'react';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Form />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
