import React from 'react';

const Registration = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>

      {/* Form Container */}
      <div className="container" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div
            className="col-md-6 col-lg-5 rounded shadow-lg p-4"
            style={{
              background: 'linear-gradient(to bottom right, #fefefe, #f0f0f0)',
              border: '1px solid #ddd',
            }}
          >
            <h2 className="text-center mb-4" style={{ color: '#333' }}>
               Register & Rise
            </h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="e.g. +91 98765xxxxx"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your current address"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">College</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="College name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="e.g. B.Tech, MBA..."
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: '#ff5722',
                  color: '#fff',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                }}
              >
                Register
              </button>
              <p className="mt-3 text-center">
                Already registered?{' '}
                <a
                  href="/login"
                  className="text-decoration-none fw-bold"
                  style={{ color: '#ff5722' }}
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

