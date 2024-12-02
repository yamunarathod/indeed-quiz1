import React from 'react';
import './start.css'; // Import the custom CSS file


const StartScreen = ({ onStart }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(./start.png)' }}
    >
      <div className='startButton'>
        <button
          onClick={onStart}
          id="start-button"    >
          Start
        </button>

      </div>

    </div>
  );
};

export default StartScreen;