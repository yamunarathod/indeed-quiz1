// <div className="max-w-2xl mx-auto">
//   <div className="mb-4 flex justify-between items-center">
//     <h3 className="text-xl font-bold">{question.question}</h3>
//     <span className={classNames(
//       "text-lg font-semibold px-4 py-1 rounded-full",
//       timeLeft <= 5 ? "text-red-600" : "text-gray-600"
//     )}>
//       Time: {timeLeft}s
//     </span>
//   </div>
//   <div className="space-y-3">
//     {question.options.map((option, index) => (
//       <button
//         key={index}
//         onClick={() => handleAnswerClick(option)}
//         disabled={selectedAnswer || timeLeft === 0}
//         className={getOptionClassName(option)}
//       >
//         <span className={classNames(
//           'inline-block w-6 h-6 rounded-full mr-3 text-sm flex items-center justify-center',
//           selectedAnswer || timeLeft === 0
//             ? option === question.correctAnswer
//               ? 'bg-green-600 text-white'
//               : selectedAnswer === option
//                 ? 'bg-red-600 text-white'
//                 : 'bg-gray-400 text-white'
//             : 'bg-gray-200 text-gray-700'
//         )}>
//           {String.fromCharCode(65 + index)}
//         </span>
//         {option}
//         {(selectedAnswer || timeLeft === 0) && option === question.correctAnswer && (
//           <span className="ml-2 text-green-600">✓</span>
//         )}
//         {selectedAnswer === option && option !== question.correctAnswer && (
//           <span className="ml-2 text-red-600">✗</span>
//         )}
//       </button>
//     ))}
//   </div>
//   {showStatement && (
//     <div className={classNames(
//       "mt-4 p-4 rounded-lg border-2",
//       selectedAnswer === question.correctAnswer
//         ? "bg-green-50 border-green-200"
//         : "bg-red-50 border-red-200"
//     )}>
//       <p className="text-gray-700 mb-4">{question.statement}</p>
//       {showNextButton && (
//         <button
//           onClick={handleNext}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//         >
//           Next Question
//         </button>
//       )}
//     </div>
//   )}
// </div>