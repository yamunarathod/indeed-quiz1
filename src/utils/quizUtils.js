// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomQuestions = (questions, count) => {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count).map(question => ({
    ...question,
    options: shuffleArray(question.options)
  }));
};