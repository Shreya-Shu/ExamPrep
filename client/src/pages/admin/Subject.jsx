import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Subject() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("https://freerangestock.com/photos/168817/concentrated-young-man-working-on-laptop.html")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '2rem',
      }}
    >
      {/* Optional overlay for contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white shadow-lg rounded p-4">
            <h3 className="text-center text-primary fw-bold mb-4">
              Subject
            </h3>
            <form>
              <div className="mb-3">
                <label htmlFor="sessionName" className="form-label"> Add Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="sessionName"
                  required
                  placeholder="Type your session name here..."
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  required
                  placeholder="Type your description here..."
                  style={{ borderRadius: '8px' }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold"
                style={{ borderRadius: '6px' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;