import React, { useState } from 'react';

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Your submit logic here, e.g., validation + API call
    alert('Submit logic not implemented yet!');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card} role="form" aria-label="Change Password Form">
        <h2 style={styles.heading}>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="currentPassword" style={styles.label}>Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Enter current password"
            value={form.currentPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label htmlFor="newPassword" style={styles.label}>New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            value={form.newPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label htmlFor="confirmPassword" style={styles.label}>Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Update Password</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #e0f7fa, #f6fafc)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontFamily: "'Poppins', sans-serif",
    userSelect: 'none'
  },
  card: {
    background: 'rgba(255 255 255 / 0.75)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: 24,
    padding: 36,
    width: 360,
    boxShadow:
      '0 15px 40px rgba(100,150,255,0.2), inset 0 0 30px rgba(150,195,255,0.3)',
    color: '#1e3e6e',
  },
  heading: {
    marginBottom: 28,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: '#1a337e',
    userSelect: 'text'
  },
  label: {
    color: '#2c4a7c',
    fontWeight: 600,
    fontSize: 14,
    display: 'block',
    marginBottom: 6,
    userSelect: 'text'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    marginBottom: 20,
    borderRadius: 16,
    border: '2.5px solid #a3bee9',
    fontSize: 16,
    color: '#1f3e70',
    backgroundColor: 'rgba(255 255 255 / 0.9)',
    boxShadow: 'inset 2px 2px 8px rgba(255 255 255 / 0.85), inset -2px -2px 10px rgba(160 190 255 / 0.8)',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 26,
    fontSize: 18,
    fontWeight: '700',
    background: 'linear-gradient(135deg, #6196ff, #316efb)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(48, 110, 235, 0.75)',
    userSelect: 'none',
    transition: 'background 0.3s ease, transform 0.2s ease',
  }
};

export default ChangePassword;

