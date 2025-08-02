import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Session = () => {
  const [form, setForm] = useState({
    name: "",
    description: ""
  })
  //fetch data hook
  const [data, setData] = useState([]);
  // handle change function
  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev, [name]: value
    }))
    console.log(form)
  }
  //handleSubmit
  const handleSubmit = async (e) => {
    //window.alert("Hello")
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/session', form)
      if (res) {
        alert("Session added Successfully")
      }
    }
    catch (er) {
      alert("Sorry Try Again later")
    }
  }
  //fetch data api
  const handlefetch = async () => {
    const res = await axios.get('http://localhost:5000/api/session')
    setData(res.data.data);
  }
  useEffect(() => {
    handlefetch();
  }, [])
  //console.log(data)
  return (
    <div className="session">
      <h1 className="text-primary mb-4">
        <i className="fa-solid fa-plus"></i>Add Session
      </h1>

      <div className="vh-80">
        <div className="container py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                <i className="fa-solid fa-heading me-2 text-primary"></i>Session Name
              </label>
              <input
                type="text"
                className="form-control"
                id="sessionName"
                placeholder="Enter session name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <i className="fa-solid fa-align-left me-2 text-primary"></i>Session Description
              </label>
              <textarea
                className="form-control"
                id="sessionDesc"
                rows="4"
                placeholder="Enter session description"
                name='description'
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="row">
              <div className="col-sm-6 mb-3">
                <label htmlFor="startDate" className="form-label">
                  <i className="fa-solid fa-play me-2 text-success"></i>Start Date
                </label>
                <input type="date" className="form-control" id="startDate" />
              </div>
              <div className="col-sm-6 mb-3">
                <label htmlFor="endDate" className="form-label">
                  <i className="fa-solid fa-stop me-2 text-danger"></i>End Date
                </label>
                <input type="date" className="form-control" id="endDate" />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                <i className="fa-solid fa-plus me-1"></i>Add Session
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h4 className="mt-5 mb-3 text-center text-secondary">
            <i className="fa-solid fa-table-list me-2"></i>Session List
          </h4>
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
              <th>s.no.</th>
                <th>Session Name</th>
                <th>Description</th>
                <th>Start</th>
                <th>End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/*Map through session data here */}
              {data.map((item, i) => (
                <tr key={item._id}>
                  <td>{i+1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    <button>Delete</button>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default Session;