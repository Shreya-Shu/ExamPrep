import React from 'react';


const AdminLogin = () => {
  return (
    <div className="container-fluid bg-light-pink min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-primary">Admin Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className='text-center mt-2'>Don't  have any account?<a href='/register'>Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
   