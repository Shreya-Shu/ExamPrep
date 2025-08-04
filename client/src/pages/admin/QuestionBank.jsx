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
  });

  const [questions, setQuestions] = useState([]);

  // Load existing questions from backend
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/question');
      setQuestions(res.data.data || []);
    } catch (err) {
      console.error('Error fetching questions:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // use name instead of id
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/question', formData);
      if (res) {
        console.log('Question added successfully');
        fetchQuestions(); // Refresh table with backend data
      }
    } catch (err) {
      console.error(err);
      alert('Sorry, try again.');
    }

    setFormData({
      questionText: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: '',
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">React Question Bank Creator</h1>

      {/* Question Form */}
      <div className="card p-4 mb-4 shadow">
        <h4 className="mb-3">Add a New Question</h4>
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

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Add Question</button>
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
              </tr>
            </thead>
            <tbody>
              {questions.length > 0 ? (
                questions.map((q, index) => (
                  <tr key={q._id}>
                    <td>{questions.length - index}</td>
                    <td>{q.questionText}</td>
                    <td>{q.optionA}</td>
                    <td>{q.optionB}</td>
                    <td>{q.optionC}</td>
                    <td>{q.optionD}</td>
                    <td>{q.correctAnswer}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted">No questions added yet.</td>
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
