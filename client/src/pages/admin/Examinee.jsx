import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Examinee() {
  const [formData, setFormData] = useState({ name: '', college: '', qualification: '' });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.college && formData.qualification) {
      setStudents([...students, formData]);
      setFormData({ name: '', college: '', qualification: '' });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add Student Info</h2>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row g-2">
          <input
            type="text"
            name="name"
            className="form-control col"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="college"
            className="form-control col"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
          />
          <input
            type="text"
            name="qualification"
            className="form-control col"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary col">Add</button>
        </div>
      </form>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>College</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.college}</td>
              <td>{student.qualification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Examinee;
