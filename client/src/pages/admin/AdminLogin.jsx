import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    //console.log(e.target.value)
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    console.log(form);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await axios.post('http://localhost:5000/api/admin/login', form)

    //console.log(res.data.message);
    if (res.data.message=='Login successfully') {
      //window.location.href='/admin'
      localStorage.setItem("role", res.data.admin.role)
      localStorage.setItem("email", res.data.admin.email)
      window.location.href = '/admin';
    }
    else {
      window.alert(" your email or password are incorrect");
    }
  }
  return (
    <div className="container-fluid bg-light-pink min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-primary">Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required
              onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className='text-center mt-2'>Don't  have any account?<a href='/register'>Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
