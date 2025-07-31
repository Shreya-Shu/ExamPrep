import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Login from './pages/Login';
import Dashbord from './pages/Dashbord';
import Registration from './pages/Registration';
import Session from './pages/admin/Session';
import Subject from './pages/admin/Subject';
import Examinee from './pages/admin/Examinee';
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/register" element={<Registration/>} />
         <Route path="/session" element={<Session/>} />
         <Route path="/subject" element={<Subject/>}/>
         <Route path="/examinee" element={<Examinee/>} />
        {/* Add more routes as needed */}
      </Routes>
      </Router>  
    </div>
  )
}

export default App
