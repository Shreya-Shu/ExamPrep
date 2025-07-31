import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Login from './pages/Login';
import Dashbord from './pages/admin/Dashbord';
import Registration from './pages/Registration';
import Session from './pages/admin/Session';
import Subject from './pages/admin/Subject';
import Examinee from './pages/admin/Examinee';
import AdminLogin from './pages/admin/AdminLogin';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
     
        <Route path="/register" element={<Registration/>}></Route>
        <Route path='/adlogin' element={<AdminLogin/>}></Route>
        <Route path="/admin/" element={<Dashbord />} >
         <Route path="session" element={<Session/>}></Route>

         <Route path="subject" element={<Subject/>}></Route>
         <Route path="examinee" element={<Examinee/>}></Route>
         </Route>
        {/* Add more routes as needed */}
      </Routes>
      </Router>  
    </>
  )
}

export default App
