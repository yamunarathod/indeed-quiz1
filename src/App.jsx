import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import RegistrationForm from './components/RegistrationForm';
import QuizQuestion from './components/QuizQuestion';
import Results from './components/Results';
import { getRandomQuestions } from './utils/quizUtils';
import { registerUser, saveUserAnswers } from './services/api';
import questionsData from './data/questions.json';

const TOTAL_QUESTIONS = 5;

function App() {
  const [gameState, setGameState] = useState('start');
  const [userData, setUserData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [error, setError] = useState(null);

  const handleStart = () => {
    setGameState('register');
    setError(null);
  };

  const handleRegistration = async (data) => {
    try {
      setError(null);
      const response = await registerUser(data);
      setUserData({ ...data, id: response.userId });
      setQuestions(getRandomQuestions(questionsData.questions, TOTAL_QUESTIONS));
      setGameState('quiz');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAnswer = async (isCorrect, selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (isCorrect !== null) {
      if (isCorrect) {
        setScore(score + 1);
      }

      const answerData = {
        questionId: currentQuestion.id,
        selectedAnswer: selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer
      };
      setUserAnswers(prev => [...prev, answerData]);
    }

    // Handle moving to next question or completing the quiz
    if (isCorrect === null) {
      if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        try {
          setError(null);
          await saveUserAnswers(userData.id, userAnswers);
          setGameState('results');
        } catch (error) {
          setError(error.message);
          // Still show results even if saving fails
          setGameState('results');
        }
      }
    }
  };

  const handleTimeUp = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const answerData = {
      questionId: currentQuestion.id,
      selectedAnswer: null,
      correctAnswer: currentQuestion.correctAnswer
    };
    setUserAnswers(prev => [...prev, answerData]);
  };

  return (
    <div>
      <div>
        {error && (
          <div>
            {error}
          </div>
        )}

        {gameState === 'start' && <StartScreen onStart={handleStart} />}

        {gameState === 'register' && (
          <RegistrationForm onSubmit={handleRegistration} />
        )}

        {gameState === 'quiz' && (
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            timeUp={handleTimeUp}
            questionNumber={currentQuestionIndex + 1} // Pass the current question number
            totalQuestions={TOTAL_QUESTIONS} // Pass the total number of questions
          />
        )}

        {gameState === 'results' && userData && (
          <Results
            score={score}
            totalQuestions={TOTAL_QUESTIONS}
            userName={score >= 4 ? userData.name : null} // Pass user name only if score is 4 or more
          />
        )}
      </div>
    </div>
  );
}

export default App;
