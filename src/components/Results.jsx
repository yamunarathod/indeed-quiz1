import React, { useState, useEffect } from 'react';

const Results = ({ score, totalQuestions, userName }) => {
  const isHighScore = score >= 4;
  const [videoEnded, setVideoEnded] = useState(false);

  // Function to handle video end event
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  // Reload the page after 5 seconds if it's a low score
  useEffect(() => {
    if (!isHighScore) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timeout
    }
  }, [isHighScore]);


  useEffect(() => {
    if (videoEnded && isHighScore) {
      const timer = setTimeout(() => {
        window.location.reload(); // Reload the page
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
    }
  }, [videoEnded, isHighScore]);

  return (
    <div className="relative h-screen">
      {/* Background video for high scores */}
      {isHighScore && !videoEnded && (
        <video
          autoPlay
          loop={false}
          muted
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={handleVideoEnd}
        >
          <source src="./congrats.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay content before video ends */}
      {!videoEnded && isHighScore && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <div className="text-center w-full flex flex-col justify-center items-center">
            {userName && (
              <span
                className="font-bold w-[90%] h-[200px] text-center"
                style={{
                  color: '#EE5C9F',
                  fontSize: 'clamp(36px, 10vw, 156px)', // Dynamically adjust font size based on viewport width
                  display: 'flex', // Ensures the span is treated as a block element and respects the width/height
                  justifyContent: 'center',
                  alignItems: 'center',
                  textOverflow: 'ellipsis', // Adds ellipsis if the text overflows
                  whiteSpace: 'nowrap', // Prevents text from wrapping
                  overflow: 'hidden', // Hides any overflowed text
                  marginTop: '150px', // Adjust margin as needed
                }}
              >
                {userName}
              </span>
            )}
            <p className="text-[60px] text-black mt-4">
              You got <span style={{ color: '#EE5C9F' }}>{score}</span> of <span style={{ color: '#EE5C9F' }}>{totalQuestions}</span> questions right.
            </p>
          </div>
        </div>


      )}

      {/* New div with background image after the video ends (only for high scores) */}
      {videoEnded && isHighScore && (
        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'url(./prize.png)', // Path to your background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
      )}

      {/* For low scores, display a consolation image */}
      {!isHighScore && (
        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'url(./less.png)', // Path to your consolation image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <p className="text-[59px] mt-[20rem]">
              You got
              <span
                style={{
                  color: '#081F3E',
                  fontWeight: 'bold',
                  fontSize: '60px',
                  marginLeft: '10px', // Adds space between "got" and the score
                  marginRight: '10px',
                }}
              >
                {score}
              </span>
              of
              <span
                style={{
                  color: '#081F3E',
                  fontWeight: 'bold',
                  fontSize: '60px',
                  marginRight: '10px', // Adds space between "of" and totalQuestions
                  marginLeft: '10px',
                }}
              >
                {totalQuestions}
              </span>
              questions right.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
