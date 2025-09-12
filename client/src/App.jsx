import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashbord from './pages/admin/Dashbord';
import Registration from './pages/Registration';
import Session from './pages/admin/Session';
import Subject from './pages/admin/Subject';
import Examinee from './pages/admin/Examinee';
import AdminLogin from './pages/admin/AdminLogin';
import Dashborduser from './pages/user/Dashborduser';
import QuestionBank from './pages/admin/QuestionBank';
import ExaminationForm from './pages/admin/Examination';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
     <Route path="/home" element={<Home/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path='/adlogin' element={<AdminLogin/>}></Route>
        <Route path="/admin/" element={<Dashbord />} >
         <Route path="session" element={<Session/>}></Route>
         <Route path="questions" element={<QuestionBank/>}></Route>
<Route path="exams" element={<ExaminationForm/>}></Route>
         <Route path="subject" element={<Subject/>}></Route>
         <Route path="examinee" element={<Examinee/>}></Route>
         </Route>
         <Route path="/dashborduser" element={<Dashborduser/>}></Route>
        {/* Add more routes as needed */}
      </Routes>
      </Router>  
    </>
  )
}

export default App
