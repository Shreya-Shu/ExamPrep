import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Session = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: ""
  });

  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState(null);
  const [id, setId] = useState({ id: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev, [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editForm) {
        const res = await axios.put(`http://localhost:5000/api/session/${id.id}`, form);
        if (res) {
          alert("Session edited Successfully");
          resetForm();
          handlefetch();
        }
      } else {
        const res = await axios.post('http://localhost:5000/api/session', form);
        if (res) {
          alert("Session added Successfully");
          resetForm();
          handlefetch();
        }
      }
    } catch (err) {
      alert("Sorry, try again");
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      startDate: "",
      endDate: ""
    });
    setEditForm(false);
    setId({ id: "" });
  };

  const handlefetch = async () => {
    const res = await axios.get('http://localhost:5000/api/session');
    setData(res.data.data);
  };

  useEffect(() => {
    handlefetch();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/session/${id}`);
    if (res) {
      alert("Deleted successfully");
      handlefetch();
    } else {
      alert("Try again later");
    }
  };

  const handleEdit = async (item) => {
    setForm({
      name: item.name,
      description: item.description,
      startDate: item.startDate || "",
      endDate: item.endDate || ""
    });
    setEditForm(true);
    setId({ id: item._id });
  };

  return (
    <div className="session-container">
      <style>{`
        .session-container {
          background: linear-gradient(120deg, #e0f7fa, #f0f4ff);
          min-height: 100vh;
          padding: 2rem 1rem;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 30px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .form-control {
          background-color: rgba(255, 255, 255, 0.6);
          border: 1px solid #ccddee;
          border-radius: 10px;
          padding: 0.6rem;
        }

        .form-label {
          font-weight: 500;
          color: #333;
        }

        .glass-btn {
          background: #4d94ff;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 10px;
          font-weight: bold;
          transition: 0.3s;
        }

        .glass-btn:hover {
          background-color: #3366cc;
        }

        .table-wrapper {
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        table th,
        table td {
          vertical-align: middle;
          background-color: transparent !important;
        }

        .btn-info, .btn-danger {
          border-radius: 8px;
        }
      `}</style>

      <h1 className="text-center text-dark mb-4">
        <i className="fa-solid fa-plus me-2"></i> Add Session
      </h1>

      <div className="container">
        <div className="glass-card mb-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Session Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter session name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Session Description</label>
              <textarea
                className="form-control"
                name="description"
                placeholder="Enter session description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="glass-btn">
                <i className={`fa-solid ${editForm ? "fa-edit" : "fa-plus"} me-2`}></i>
                {editForm ? "Update Session" : "Add Session"}
              </button>
            </div>
          </form>
        </div>

        <div className="table-wrapper">
          <h4 className="text-center text-secondary mb-3">
            <i className="fa-solid fa-table-list me-2"></i>Session List
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>S.No.</th>
                  <th>Session Name</th>
                  <th>Description</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(item._id)}>
                        <i className="fa-solid fa-trash me-1"></i> Delete
                      </button>
                      <button className="btn btn-info btn-sm" onClick={() => handleEdit(item)}>
                        <i className="fa-solid fa-pen-to-square me-1"></i> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
