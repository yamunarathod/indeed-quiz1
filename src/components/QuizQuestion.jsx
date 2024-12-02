// import React, { useState, useEffect } from 'react';
// import './question.css'; // Import the custom CSS file

// const QuizQuestion = ({ question, onAnswer, timeUp }) => {
//   const [timeLeft, setTimeLeft] = useState(15);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showStatement, setShowStatement] = useState(false);
//   const [timerActive, setTimerActive] = useState(true);
//   const [showNextButton, setShowNextButton] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (timerActive) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             setTimerActive(false);
//             if (!selectedAnswer) {
//               handleTimeUp();
//             }
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [timerActive, selectedAnswer]);

//   const handleTimeUp = () => {
//     setShowStatement(true);
//     setShowNextButton(true);
//     onAnswer(false, null);
//     timeUp();
//   };

//   const handleAnswerClick = (option) => {
//     if (selectedAnswer || timeLeft === 0) return;

//     setSelectedAnswer(option);
//     setShowStatement(true);
//     setTimerActive(false);
//     setShowNextButton(true);
//     onAnswer(option === question.correctAnswer, option);
//   };

//   const handleNext = () => {
//     setTimeLeft(15);
//     setSelectedAnswer(null);
//     setShowStatement(false);
//     setTimerActive(true);
//     setShowNextButton(false);
//     onAnswer(null, null);
//   };





//   const getOptionClassName = (option) => {
//     const baseClasses = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200';

//     if (!selectedAnswer && !showStatement) {
//       return `${baseClasses} hover:bg-gray-100 border-gray-200`;
//     }

//     if (option === question.correctAnswer) {
//       return `${baseClasses} bg-green-200 border-green-500 text-green-800`;
//     }

//     if (selectedAnswer === option && option !== question.correctAnswer) {
//       return `${baseClasses} bg-red-200 border-red-500 text-red-800`;
//     }

//     return `${baseClasses} bg-gray-50 border-gray-200`;
//   };

//   return (


//     <div className="h-screen p-6 bg-white flex items-center justify-center">
//       <div className="w-full h-full  p-6">
//         <div className="mb-6 text-center">
//           <div>
//             <div className='quetionNumber'>
//               <h3 className=" text-5xl w-[846px] text-gray-800">{question.length}</h3>
//             </div>
//             <div className="relative inline-block mt-4">
//               <div className="w-10 h-10 rounded-full border-4 border-red-600 flex items-center justify-center mx-auto">
//                 <span className="text-red-600 font-semibold">{timeLeft}</span>
//               </div>
//               <div className="absolute inset-0 w-full h-full animate-spin-slow border-t-4 border-red-600 rounded-full opacity-50"></div>
//             </div>
//           </div>
//           <div>
//             <h3 className=" text-5xl w-[846px] text-gray-800">{question.question}</h3>
//           </div>
//         </div>

//         {/* Options */}
//         <div className="space-y-4 text-center">
//           {question.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswerClick(option)}
//               disabled={selectedAnswer || timeLeft === 0}
//               className={`flex items-center justify-center w-full py-3 px-4 border rounded-lg transition-colors
//             ${selectedAnswer || timeLeft === 0
//                   ? option === question.correctAnswer
//                     ? "bg-green-50 border-green-400 text-green-800"
//                     : selectedAnswer === option
//                       ? "bg-red-50 border-red-400 text-red-800"
//                       : "bg-gray-100 border-gray-300 text-gray-600"
//                   : "bg-blue-50 border-blue-400 text-blue-800 hover:bg-blue-100"
//                 }`}
//             >
//               <span
//                 className={`inline-block w-8 h-8 rounded-full mr-3 text-center font-bold 
//               ${selectedAnswer || timeLeft === 0
//                     ? option === question.correctAnswer
//                       ? "bg-green-400 text-white"
//                       : selectedAnswer === option
//                         ? "bg-red-400 text-white"
//                         : "bg-gray-300 text-gray-600"
//                     : "bg-blue-300 text-white"
//                   }`}
//               >
//                 {String.fromCharCode(65 + index)}
//               </span>
//               {option}
//             </button>
//           ))}
//         </div>

//         {/* Statement and Next Button */}
//         {showStatement && (
//           <div className="mt-6 p-6 bg-gray-50 border-l-4 rounded-lg border-blue-400 text-center">
//             <p className="text-gray-700 text-sm mb-6">{question.statement}</p>
//             {showNextButton && (
//               <div className="text-center">
//                 <button
//                   onClick={handleNext}
//                   className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-lg transition-colors"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>



//   );
// };

// export default QuizQuestion;



// import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// import './question.css'; // Import the custom CSS file

// const QuizQuestion = ({ question, onAnswer, timeUp, questionNumber, totalQuestions }) => {
//   const [timeLeft, setTimeLeft] = useState(15);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showStatement, setShowStatement] = useState(false);
//   const [timerActive, setTimerActive] = useState(true);
//   const [showNextButton, setShowNextButton] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (timerActive) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             setTimerActive(false);
//             if (!selectedAnswer) {
//               handleTimeUp();
//             }
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [timerActive, selectedAnswer]);

//   const handleTimeUp = () => {
//     setShowStatement(true);
//     setShowNextButton(true);
//     onAnswer(false, null);
//     timeUp();
//   };

//   const handleAnswerClick = (option) => {
//     if (selectedAnswer || timeLeft === 0) return;

//     setSelectedAnswer(option);
//     setShowStatement(true);
//     setTimerActive(false);
//     setShowNextButton(true);
//     onAnswer(option === question.correctAnswer, option);
//   };

//   const handleNext = () => {
//     setTimeLeft(15);
//     setSelectedAnswer(null);
//     setShowStatement(false);
//     setTimerActive(true);
//     setShowNextButton(false);
//     onAnswer(null, null);
//   };

//   const getOptionClassName = (option) => {
//     const baseClasses = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200';

//     if (!selectedAnswer && !showStatement) {
//       return `${baseClasses} hover:bg-gray-100 border-gray-200`;
//     }

//     if (option === question.correctAnswer) {
//       return `${baseClasses} bg-green-200 border-green-500 text-green-800`;
//     }

//     if (selectedAnswer === option && option !== question.correctAnswer) {
//       return `${baseClasses} bg-red-200 border-red-500 text-red-800`;
//     }

//     return `${baseClasses} bg-gray-50 border-gray-200`;
//   };

//   return (
//     <div className="h-screen p-6 bg-white flex items-center justify-center">
//       <div className="w-full h-full p-6">
//         <div className="mb-6 text-center">
//           {/* Display Question Number */}

//           <div className="flex items-center justify-between">
//             {/* Question Number */}
//             <div className="flex-grow text-center">
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Question {questionNumber}
//               </h3>
//             </div>
//             {/* Timer */}
//             <div className="relative inline-block ml-auto">
//               {/* Timer with background image and fade animation */}
//               <div className="w-10 h-10 rounded-full border-4 border-red-600 flex items-center justify-center bg-[url('./timer.png')] bg-cover animate-fade">
//                 <span className="text-red-600 font-semibold">{timeLeft}</span>
//               </div>
//               {/* Spinning border */}
//               <div className="absolute inset-0 w-full h-full animate-spin-slow border-t-4 border-red-600 rounded-full opacity-50"></div>
//             </div>

//           </div>


//           {/* Question */}
//           <h3 className="mt-4 text-2xl text-gray-800">{question.question}</h3>
//         </div>

//         {/* Options */}
//         <div className="space-y-4 text-center">
//           {question.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswerClick(option)}
//               disabled={selectedAnswer || timeLeft === 0}
//               className={`flex items-center justify-center w-full py-3 px-4 border rounded-lg transition-colors ${selectedAnswer || timeLeft === 0
//                 ? option === question.correctAnswer
//                   ? 'bg-green-50 border-green-400 text-green-800'
//                   : selectedAnswer === option
//                     ? 'bg-red-50 border-red-400 text-red-800'
//                     : 'bg-gray-100 border-gray-300 text-gray-600'
//                 : 'bg-blue-50 border-blue-400 text-blue-800 hover:bg-blue-100'
//                 }`}
//             >
//               <span
//                 className={`inline-block w-8 h-8 rounded-full mr-3 text-center font-bold ${selectedAnswer || timeLeft === 0
//                   ? option === question.correctAnswer
//                     ? 'bg-green-400 text-white'
//                     : selectedAnswer === option
//                       ? 'bg-red-400 text-white'
//                       : 'bg-gray-300 text-gray-600'
//                   : 'bg-blue-300 text-white'
//                   }`}
//               >
//                 {String.fromCharCode(65 + index)}
//               </span>
//               {option}
//             </button>
//           ))}
//         </div>

//         {/* Statement and Next Button */}
//         {showStatement && (
//           <div className="mt-6 p-6 bg-gray-50 border-l-4 rounded-lg border-blue-400 text-center">
//             <p className="text-gray-700 text-sm mb-6">{question.statement}</p>
//             {showNextButton && (
//               <div className="text-center">
//                 <button
//                   onClick={handleNext}
//                   className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-lg transition-colors"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuizQuestion;


import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './question.css'; // Import the custom CSS file

const QuizQuestion = ({ question, onAnswer, timeUp, questionNumber, totalQuestions }) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showStatement, setShowStatement] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setTimerActive(false);
            if (!selectedAnswer) {
              handleTimeUp();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerActive, selectedAnswer]);

  useEffect(() => {
    // Trigger animation every time timeLeft changes
    setIsAnimating(true);

    // Remove animation class after it completes (match animation duration in CSS)
    const timer = setTimeout(() => setIsAnimating(false), 500); // 500ms matches animation duration
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleTimeUp = () => {
    setShowStatement(true);
    setShowNextButton(true);
    onAnswer(false, null);
    timeUp();
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer || timeLeft === 0) return;

    setSelectedAnswer(option);
    setShowStatement(true);
    setTimerActive(false);
    setShowNextButton(true);
    onAnswer(option === question.correctAnswer, option);
  };

  const handleNext = () => {
    setTimeLeft(15);
    setSelectedAnswer(null);
    setShowStatement(false);
    setTimerActive(true);
    setShowNextButton(false);
    onAnswer(null, null);
  };

  return (
    // <div className="h-screen p-6 bg-white flex items-center justify-center">
    //   <div className="w-full h-full p-6">
    //     <div className="mb-6 text-center">

    //       <div className="relative inline-block w-[109px] h-[125px]">
    //         {/* Timer with popup animation for background image */}
    //         <div
    //           className={`absolute inset-0 w-full h-full rounded-full flex items-center justify-center text-3xl font-extrabold text-red-600 ${isAnimating ? 'animate-popup' : ''}`}
    //           style={{
    //             backgroundImage: "url('./timer.png')",
    //             backgroundSize: "cover", /* Make the background image fully cover the circle */
    //             backgroundPosition: "center",
    //           }}
    //         >
    //           <span className="mt-5">{timeLeft}</span>
    //         </div>
    //       </div>
    //       {/* Display Question Number */}
    //       <div className="flex items-center justify-between">

    //         {/* Question Number */}
    //         <div className="flex-grow text-center"> {/* Added mt-2 for margin-top */}
    //           <h3 className="text-8xl font-bold text-gray-800">
    //             Question {questionNumber}
    //           </h3>
    //         </div>

    //       </div>

    //       {/* Question */}
    //       <h3 className="mt-4 text-2xl text-gray-800">{question.question}</h3>
    //     </div>

    //     {/* Options */}
    //     <div className="space-y-4 text-center">
    //       {question.options.map((option, index) => (
    //         <button
    //           key={index}
    //           onClick={() => handleAnswerClick(option)}
    //           disabled={selectedAnswer || timeLeft === 0}
    //           className={`flex items-center justify-center w-full py-3 px-4 border rounded-lg transition-colors ${selectedAnswer || timeLeft === 0
    //             ? option === question.correctAnswer
    //               ? 'bg-green-50 border-green-400 text-green-800'
    //               : selectedAnswer === option
    //                 ? 'bg-red-50 border-red-400 text-red-800'
    //                 : 'bg-gray-100 border-gray-300 text-gray-600'
    //             : 'bg-blue-50 border-blue-400 text-blue-800 hover:bg-blue-100'
    //             }`}
    //         >
    //           <span
    //             className={`inline-block w-8 h-8 rounded-full mr-3 text-center font-bold ${selectedAnswer || timeLeft === 0
    //               ? option === question.correctAnswer
    //                 ? 'bg-green-400 text-white'
    //                 : selectedAnswer === option
    //                   ? 'bg-red-400 text-white'
    //                   : 'bg-gray-300 text-gray-600'
    //               : 'bg-blue-300 text-white'
    //               }`}
    //           >
    //             {String.fromCharCode(65 + index)}
    //           </span>
    //           {option}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Statement and Next Button */}
    //     {showStatement && (
    //       <div className="mt-6 p-6 bg-gray-50 border-l-4 rounded-lg border-blue-400 text-center">
    //         <p className="text-gray-700 text-sm mb-6">{question.statement}</p>
    //         {showNextButton && (
    //           <div className="text-center">
    //             <button
    //               onClick={handleNext}
    //               className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-lg transition-colors"
    //             >
    //               Next
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="h-screen p-6 bg-white flex items-center justify-center">
      <div className="w-full h-full p-6">
        {/* Timer at the top-right corner */}



        <div className="flex flex-col w-full h-[400px] gap-4 mt-[100px]">
          {/* Top Row: Question Number and Timer */}
          <div className="flex items-center justify-between w-full">
            {/* Question Number */}
            <div className="flex-grow text-center">
              <h3 className="text-[58px] font-bold text-gray-800">
                Question 0{questionNumber}
              </h3>
            </div>

            {/* Timer */}
            <div className="w-[109px] h-[125px]">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center text-3xl font-extrabold text-red-600 ${isAnimating ? 'animate-popup' : ''}`}
                style={{
                  backgroundImage: "url('./timer.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="mt-5  text-[#000] px-3 py-1 rounded-lg">{timeLeft}</span>
              </div>
            </div>

          </div>

          {/* Question Display */}
          <div className="flex flex-col items-center">
            <h3 className="mt-4 text-[48px] text-gray-800">{question.question}</h3>
          </div>
        </div>



        {/* Options */}
        <div className="space-y-4 text-center text-[48px] mt-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer || timeLeft === 0}
              className={`flex items-center justify-center w-full py-3 px-4 border-4 rounded-lg transition-colors bg-[#EEF5FF] text-[#081F3E] ${selectedAnswer || timeLeft === 0
                ? option === question.correctAnswer
                  ? 'border-[#2FE545]' // Correct Answer: Green Border
                  : selectedAnswer === option
                    ? 'border-[#CF3232]' // Incorrect Answer: Red Border
                    : 'border-gray-300' // Disabled options
                : 'border-[#204294] hover:border-blue-500' // Default and hover state
                }`}
            >
              <div
                className={`flex items-center justify-center gap-4 w-full ${selectedAnswer || timeLeft === 0
                  ? option === question.correctAnswer || selectedAnswer === option
                    ? 'font-bold' // Bold for correct or incorrect option
                    : ''
                  : ''
                  }`}
              >
                <span className="text-center">{String.fromCharCode(65 + index)}.</span>
                <span className="text-center">{option}</span>
              </div>
            </button>
          ))}
        </div>








        {/* Statement and Next Button */}
        {showStatement && (
          <div className="mt-6 p-6 flex flex-col justify-center items-center text-center">
            <p className="text-[#081F3E] text-[28px] mb-6">{question.statement}</p>
            {showNextButton && (
              <div className="flex justify-center nextButton">
                <button
                  onClick={handleNext}
                  id="submit-button"
                  className="px-6 py-3 bg-blue-500 text-white "
                >
                  Next
                </button>
              </div>
            )}
          </div>


        )}
      </div>
    </div>

  );
};

export default QuizQuestion;
