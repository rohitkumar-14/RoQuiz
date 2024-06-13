import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const Quiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="w-[60%] h-[70%] rounded border-2 border-white shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {!showResult ? (
        <div className='p-5'>
          <h2 className="text-3xl font-bold mb-4 text-white text-center">{quiz.title}</h2>
          <QuizQuestion
            question={quiz.questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestionIndex]}
          />
          <div className="mt-4">
            {currentQuestionIndex > 0 && (
              <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} className="bg-pink-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            )}
            {currentQuestionIndex < quiz.questions.length - 1 ? (
              <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className="bg-yellow-500 text-white px-4 py-2 rounded">Next</button>
            ) : (
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            )}
          </div>
        </div>
      ) : (
        <QuizResult quiz={quiz} answers={answers} />
      )}
    </div>
  );
};

export default Quiz;
