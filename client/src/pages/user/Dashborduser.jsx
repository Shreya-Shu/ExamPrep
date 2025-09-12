import React from "react";
import image1 from '../assets/Images/image1.jpg'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <style>
        {`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dashboard-container {
  display: flex;
  height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 30px;
  font-size: 20px;
  color: #ecf0f1;
  text-align: center;
}

.sidebar ul {
  list-style: none;
}

.sidebar ul li {
  padding: 12px 0;
  cursor: pointer;
  transition: 0.3s;
}

.sidebar ul li:hover {
  background: #34495e;
  padding-left: 10px;
}

/* Main Content */
.main {
  flex: 1;
  background: #f5f7fa;
  padding: 20px;
  overflow-y: auto;
}

/* Topbar */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

.profile-circle {
  width: 40px;
  height: 40px;
  background: #3498db;
  border-radius: 50%;
}

/* Cards */
.cards {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  font-weight: bold;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* Table */
.exam-table {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.exam-table table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.exam-table th, .exam-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.exam-table th {
  background: #ecf0f1;
}

.exam-table tr:hover {
  background: #f1f1f1;
}
        `}
      </style>

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Welcome</h2>
        <ul>
          <li>Profile</li>
          <li>My Exams</li>
          <li>Scheduled Exams</li>
          <li>Result</li>
          <li>Change Password</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="topbar">
          <h3>Good Morning, User 👋</h3>
          <div className="profile-circle"></div>
        </div>

        {/* Cards with Images */}
        <div className="cards">
          <div className="card">
            <img src={image1} alt="Upcoming Exam"  height="50px"/>
            <p>Upcoming Exams</p>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-photo/young-woman-taking-test_23-2149340865.jpg" alt="Practice Test" />
            <p>Practice Tests</p>
          </div>
        </div>

        {/* Table */}
        <div className="exam-table">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Exams</th>
                <th>Marks</th>
                <th>Total M</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Maths</td>
                <td>85</td>
                <td>100</td>
                <td>Pass</td>
              </tr>
              {/* Add more rows if needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
