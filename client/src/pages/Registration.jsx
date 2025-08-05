import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Registration = () => {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  number: '',      
  address: '',
  college: '',
  qualification: '',
  session: '',
  password: '',
});

  const [session, setSession] = useState([]);
  const handlefetch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/session/');
      setSession(res.data.data)
    }
    catch (er) {
      console.log(er);
    }
  }
  useEffect(() => {
    handlefetch();
  }, [])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/examinee', formData);
      alert('Examinee Registered!');
      setFormData({
        name: '',
        email: '',
        number: '',
        address: '',
        college: '',
        qualification: '',
        session: '',
        password: '',
      });
    } catch (error) {
      console.error('Submission error', error);
      alert('Failed to register');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 bg-light rounded shadow-lg p-4 border">
          <h2 className="text-center mb-4 text-primary fw-bold">
            Student Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control border-primary"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control border-primary"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="phone"
                    className="form-control border-primary"
                    placeholder="e.g. +91 98765xxxxx"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="address" className="form-label fw-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control border-primary"
                    placeholder="Your current address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="college" className="form-label fw-semibold">
                    College
                  </label>
                  <input
                    type="text"
                    name="college"
                    id="college"
                    className="form-control border-primary"
                    placeholder="College name"
                    value={formData.college}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="qualification" className="form-label fw-semibold">
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    className="form-control border-primary"
                    placeholder="e.g. B.Tech, MBA..."
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="session" className="form-label fw-semibold">
                    Session
                  </label>
                  <select
                    name="session"
                    id="session"
                    className="form-select border-primary"
                    value={formData.session}
                    onChange={handleChange}
                    
                  >
                    <option value="" disabled>
                      Select Session
                    </option>
                    {session.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control border-primary"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary fw-semibold">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="mt-4 text-center">
            Already registered?{' '}
            <a href="/login" className="text-decoration-none fw-semibold text-primary">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
