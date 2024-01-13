import React from 'react';
import './app.scss';
import "./output.css"; 
 
import Customers from './components/customersData';
import Employees from './components/employeesData';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

 
function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
       
          <Route path="/customersData/" element={<Customers />} />
          <Route path="/employeesData/" element={<Employees />} />
               </Routes>
      </div>
    </Router>
  );
}

 
export default App;
