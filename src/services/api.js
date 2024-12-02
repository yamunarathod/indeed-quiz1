import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Add timeout and withCredentials
  timeout: 5000,
  withCredentials: true
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', {
      name: userData.name
    });

    if (!response.data || !response.data.userId) {
      throw new Error('Invalid response from server');
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Registration failed. Please try again.');
    } else if (error.request) {
      throw new Error('Unable to connect to the server. Please check your connection.');
    } else {
      throw new Error('An error occurred while registering. Please try again.');
    }
  }
};

export const saveUserAnswers = async (userId, answers) => {
  try {
    if (!userId || !Array.isArray(answers)) {
      throw new Error('Invalid data format');
    }

    const formattedAnswers = answers.map(answer => ({
      questionId: answer.questionId,
      selectedAnswer: answer.selectedAnswer || '',
      correctAnswer: answer.correctAnswer
    }));

    const response = await api.post('/save-answers', {
      userId,
      answers: formattedAnswers
    });

    if (!response.data) {
      throw new Error('Invalid response from server');
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Failed to save answers. Please try again.');
    } else if (error.request) {
      throw new Error('Unable to connect to the server. Please check your connection.');
    } else {
      throw new Error('An error occurred while saving answers. Please try again.');
    }
  }
};