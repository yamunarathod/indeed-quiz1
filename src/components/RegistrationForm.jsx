import React, { useState } from 'react';
import './start.css'; // Import the custom CSS file

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Please fill in your name');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      setFormError(error.message || 'Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(./bg.png)' }}>
      {formError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {formError}
        </div>
      )}
      <form onSubmit={handleSubmit} >
        <div className='mainDiv'>
          <div className="inputField">
            <input
              type="text"
              id="name"
              required
              placeholder="Full Name"
              className="inputFieldStyle"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div className="submitButton">
            <button
              type="submit"
              id="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Submit'}
            </button>
          </div>
        </div>

      </form>
    </div>


  );
};

export default RegistrationForm;
