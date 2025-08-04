import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Examinee() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    qualification: '',
    address: '',
    number: '',
  });

  const [data, setData] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/examinee');
      setData(res.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/examinee', formData);
      setFormData({
        name: '',
        email: '',
        number: '',
        college: '',
        qualification: '',
        address: '',
        number: '',
      });
      handleFetch();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Student Registration</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>College</th>
              <th style={styles.th}>Qualification</th>
              <th style={styles.th}>Address</th>
              <th style={styles.th}>Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id}>
                <td style={styles.td}>{i + 1}</td>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.email}</td>
                <td style={styles.td}>{item.college}</td>
                <td style={styles.td}>{item.qualification}</td>
                <td style={styles.td}>{item.address}</td>
                <td style={styles.td}>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    background: '#f3f4f6',
    padding: '40px 20px',
  },
  card: {
    width: '100%',
    maxWidth: '1100px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#1f2937',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '30px',
    justifyContent: 'space-between',
  },
  input: {
    flex: '1 1 30%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    flex: '1 1 100%',
    padding: '12px',
    backgroundColor: '#1f2937',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 12px',
    textAlign: 'left',
  },
  th: {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '12px',
    borderRadius: '10px 10px 0 0',
  },
  td: {
    backgroundColor: '#f9fafb',
    padding: '12px',
    borderRadius: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  },
};

export default Examinee;
