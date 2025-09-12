import React from 'react';

function Login() {
  return (
    <div className="login-wrapper">
      <style>
        {`
        /* Background wrapper */
        .login-wrapper {
          background: url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Gradient overlay */
        .login-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(3px);
          z-index: 1;
        }

        /* Glassmorphism card */
        .login-form {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          max-width: 400px;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease-in-out;
        }

        .login-form:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .login-form h3 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .form-label {
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-control {
          border-radius: 12px;
          padding: 12px;
          border: none;
          outline: none;
          width: 100%;
          margin-bottom: 20px;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          transition: all 0.3s ease;
        }

        .form-control::placeholder {
          color: #f0f0f0;
        }

        .form-control:focus {
          background-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .btn-primary {
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          border: none;
          border-radius: 12px;
          padding: 12px;
          width: 100%;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(174, 113, 255, 0.4);
        }

        @media (max-width: 768px) {
          .login-form {
            margin: 20px;
            padding: 30px;
          }
        }
      `}
      </style>

      {/* Form Container */}
      <form className="login-form">
        <h3>Login to Your World</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
}

export default Login;
