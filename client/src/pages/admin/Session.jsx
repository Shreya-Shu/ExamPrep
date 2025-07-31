import React, { useState } from 'react';

const Session = () => {
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDetails, setSessionDetails] = useState('');
  const [sessions, setSessions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSession = {
      title: sessionTitle,
      description: sessionDetails,
    };

    setSessions([...sessions, newSession]);

    // Clear form fields
    setSessionTitle('');
    setSessionDetails('');
  };

  const handleDelete = (index) => {
    const updatedSessions = sessions.filter((_, i) => i !== index);
    setSessions(updatedSessions);
  };

  return (
    <div className="container mt-5">
      {/* Form Card */}
      <div className="card shadow mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Create New Session</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="sessionTitle" className="form-label">
                Session Title
              </label>
              <input
                type="text"
                id="sessionTitle"
                className="form-control"
                placeholder="Enter session title"
                value={sessionTitle}
                onChange={(e) => setSessionTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sessionDetails" className="form-label">
                Session Details
              </label>
              <textarea
                id="sessionDetails"
                className="form-control"
                rows="4"
                placeholder="Enter session description"
                value={sessionDetails}
                onChange={(e) => setSessionDetails(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Session
            </button>
          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <h5 className="mb-3">All Sessions</h5>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>SN</th>
              <th>Session Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No sessions added yet.
                </td>
              </tr>
            ) : (
              sessions.map((session, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{session.title}</td>
                  <td>{session.description}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Session;