import React from 'react';


function Login() {
  return (
    <div className="container-fluid login-wrapper">
      <style>
        {`.login-wrapper {
  background-color: #e6f2ff; /* Light blue background */
}

.book-image {
  background-image: url('https://images.unsplash.com/photo-1512820790803-83ca734da794');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s ease-in-out;
}

/* Optional Fade-In Effect */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}

.login-form {
  background-color: #ffffff;
}

`}
      </style>
      <div className="row vh-100">
        {/* Left Half – Animated Image */}
        <div className="col-md-6 book-image d-none d-md-block">
           
        </div>

        {/* Right Half – Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <form className="login-form bg-white p-4 shadow rounded" style={{ width: '100%', maxWidth: '400px' }}>
            <h3 className="text-center mb-4 text-primary">Login</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
