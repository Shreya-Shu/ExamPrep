import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = localStorage.getItem('role');
  if (role !== 'admin') window.location.href = '/adlogin';
  const email = localStorage.getItem('email');

  return (
    <div className={`dashboard-container ${collapsed ? 'collapsed' : ''}`}>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #f0f2f5;
        }
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(to right, #e6f0ff, #fdfbff);
        }
        .sidebar {
          width: 260px;
          background: linear-gradient(135deg, #4b6cb7, #182848);
          color: white;
          padding: 25px;
          transition: width 0.3s ease;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }
        .collapsed .sidebar { width: 80px; }
        .sidebar-header {
          font-size: 1.7rem; font-weight: 700;
          text-align: center; margin-bottom: 35px;
        }
        .nav-links { list-style: none; padding: 0; }
        .nav-links li { margin-bottom: 16px; }
        .nav-links a {
          display: block; padding: 12px 18px;
          color: white; border-radius: 12px;
          background-color: rgba(255,255,255,0.1);
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .nav-links a:hover { background-color: rgba(255,255,255,0.25); }
        .main {
          flex: 1; display: flex; flex-direction: column;
          background: url('https://source.unsplash.com/800x600/?exam,education') no-repeat right center;
          background-size: contain;
        }
        .topbar {
          background: white; padding: 16px 30px;
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid #ddd;
        }
        .toggle-btn {
          padding: 8px 16px; border: none;
          background: linear-gradient(to right, #e0c3fc, #8ec5fc);
          color: #4b006e; border-radius: 20px;
          font-weight: 600; cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .toggle-btn:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          transform: scale(1.03);
        }
        .content {
          padding: 40px;
          background-color: rgba(255,255,255,0.85);
        }
        .collapsed .nav-links a { text-align: center; font-size: 0; }
        .collapsed .sidebar-header { font-size: 0; }
        @media (max-width: 768px) {
          .dashboard-container { flex-direction: column; }
          .sidebar { width: 100%; justify-content: space-around; padding: 10px; }
          .main { background: none; }
          .topbar h2 { font-size: 1rem; }
        }
      `}</style>

      <div className="sidebar">
        <div className="sidebar-header">{collapsed ? 'A' : 'Admin'}</div>
        <ul className="nav-links">
          <li><Link to="/admin/session">Session</Link></li>
          <li><Link to="/admin/subject">Subject</Link></li>
          <li><Link to="/admin/examinee">Examinee</Link></li>
          <li><Link to="/admin/questions">Question Bank</Link></li>
          <li><Link to="/admin/exams">Examination</Link></li>
          <li><Link to="/admin/results">Result</Link></li>
          <li><Link to="/admin/change-password">Change Password</Link></li>
          <li><Link onClick={() => {
              localStorage.clear();
              window.location.href = '/adlogin';
            }}>Logout</Link></li>
        </ul>
      </div>

      <div className="main">
        <div className="topbar">
          <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
            {collapsed ? 'Show Menu' : 'Hide Menu'}
          </button>
          <h2>Welcome, {email}</h2>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
