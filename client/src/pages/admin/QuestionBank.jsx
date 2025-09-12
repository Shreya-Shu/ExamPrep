import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionBank = () => {
  const [formData, setFormData] = useState({
    questionText: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: '',
    subject: '',
  });

  const [questions, setQuestions] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [id, setId] = useState('');

  // Fetch all questions and subjects on mount
  useEffect(() => {
    fetchQuestions();
    fetchSubjects();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/question');
      setQuestions(res.data.data || []);
    } catch (err) {
      console.error('Error fetching questions:', err);
    }
  };

  const fetchSubjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/subject');
      setSubjects(res.data.data || []);
    } catch (err) {
      console.error('Error fetching subjects', err);
      setSubjects([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editForm) {
        await axios.put(`http://localhost:5000/api/question/${id}`, formData);
        setEditForm(false);
        setId('');
      } else {
        await axios.post('http://localhost:5000/api/question', formData);
      }
      fetchQuestions();
      setFormData({
        questionText: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '',
        subject: '',
      });
    } catch (err) {
      console.error(err);
      alert('Sorry, try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/question/${id}`);
      alert('Deleted successfully');
      fetchQuestions();
    } catch (err) {
      alert('Try again later.');
    }
  };

  const handleEdit = (item) => {
    setFormData({
      questionText: item.questionText,
      optionA: item.optionA,
      optionB: item.optionB,
      optionC: item.optionC,
      optionD: item.optionD,
      correctAnswer: item.correctAnswer,
      subject: item.subject, // Make sure to set subject
    });
    setEditForm(true);
    setId(item._id);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Question Bank</h1>

      {/* Question Form */}
      <div className="card p-4 mb-4 shadow">
        <h4 className="mb-3">{editForm ? 'Edit Question' : 'Add a New Question'}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="questionText" className="form-label">Question</label>
            <input
              type="text"
              className="form-control"
              name="questionText"
              value={formData.questionText}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            {['A', 'B', 'C', 'D'].map((opt) => (
              <div className="col-md-6 mb-3" key={opt}>
                <label htmlFor={`option${opt}`} className="form-label">{`Option ${opt}`}</label>
                <input
                  type="text"
                  className="form-control"
                  name={`option${opt}`}
                  value={formData[`option${opt}`]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>

          <div className="mb-3">
            <label htmlFor="correctAnswer" className="form-label">Correct Answer</label>
            <input
              type="text"
              className="form-control"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
              required
            />
            <small className="form-text text-muted">Please type the full text of the correct option.</small>
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select subject</option>
              {subjects.map((sub) => (
                <option key={sub._id} value={sub._id}>{sub.name}</option>
              ))}
            </select>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              {editForm ? 'Update Question' : 'Add Question'}
            </button>
          </div>
        </form>
      </div>

      {/* Question Table */}
      <div className="card p-4 shadow">
        <h4 className="mb-3">Question Bank</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Option A</th>
                <th>Option B</th>
                <th>Option C</th>
                <th>Option D</th>
                <th>Correct Answer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.length > 0 ? (
                questions.map((q, index) => (
                  <tr key={q._id}>
                    <td>{index+1}</td>
                    <td>{q.questionText}</td>
                    <td>{q.optionA}</td>
                    <td>{q.optionB}</td>
                    <td>{q.optionC}</td>
                    <td>{q.optionD}</td>
                    <td>{q.correctAnswer}</td>
                    <td>
                      <button onClick={() => handleDelete(q._id)} className="me-2 rounded bg-danger text-white px-2">Delete</button>
                      <button onClick={() => handleEdit(q)} className="me-2 rounded bg-primary text-white px-2">Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted">No questions added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;