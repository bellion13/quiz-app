import { useParams, useNavigate } from 'react-router-dom';
import { quizData } from '../Data/quizData';
import QuizQuestion from '../Components/QuizQuestion';
import QuizResult from '../Components/QuizResult';
import { useState } from 'react';

const QuizPage = () => {
  const { topic } = useParams();
  const questions = quizData.filter(q => q.category === topic);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId, selectedOption) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleRetry = () => {
    setUserAnswers({});
    setShowResult(false);
  };

  const score = questions.reduce((total, q) => {
    return userAnswers[q.id] === q.answer ? total + 1 : total;
  }, 0);

  return (
    <div className='relative '>
      <button
        className='px-4 py-2 bg-pink-500 text-white rounded-md hover:scale-102 transition-transform duration-200 cursor-pointer ease-in-out absolute right-4 top-4 '
        onClick={() => navigate('/')}
      >
        Về trang chủ
      </button>
      <div className='max-w-[800px] mx-auto p-4 bg-white rounded-lg shadow-md mt-8 '>
        <h1 className='text-3xl font-bold mb-4 capitalize text-center'>{topic} Quiz</h1>

        {questions.map((q, index) => (
          <QuizQuestion

            key={q.id}
            question={q}
            index={index}
            selected={userAnswers[q.id]}
            showResult={showResult}
            onSelect={handleAnswer}
          />
        ))}

        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length !== questions.length}
            className='mt-6 px-6 py-2  bg-green-500 text-white rounded-md disabled:opacity-50 text-center'
          >
            Xem kết quả
          </button>
        ) : (
          <QuizResult
            score={score}
            total={questions.length}
            onRetry={handleRetry}
          />
        )}

      </div>
    </div>

  );
};

export default QuizPage;
