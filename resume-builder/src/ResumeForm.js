import React, { useState } from 'react';
import './ResumeForm.css';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    summary: '',
    education: '',
    careerObjective: '',
    experience: '',
    internships: '',
    skills: '',
    achievements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Professional Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Education Qualifications</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Career Objective</label>
          <textarea
            name="careerObjective"
            value={formData.careerObjective}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Internships</label>
          <textarea
            name="internships"
            value={formData.internships}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Achievements</label>
          <textarea
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Generate Resume</button>
      </form>

      {submitted && (
        <div className="resume-preview">
          <h2>Resume Preview</h2>
          <p><strong>Professional Summary:</strong> {formData.summary}</p>
          <p><strong>Education Qualifications:</strong> {formData.education}</p>
          <p><strong>Career Objective:</strong> {formData.careerObjective}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <p><strong>Internships:</strong> {formData.internships}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
          <p><strong>Achievements:</strong> {formData.achievements}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
