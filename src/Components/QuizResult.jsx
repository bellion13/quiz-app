import { useNavigate } from 'react-router-dom';

const QuizResult = ({ score, total, onRetry }) => {
  const navigate = useNavigate();

  return (
    <div className='text-center my-8 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-3xl font-bold mb-4'>Kết quả</h2>
      <p className='text-2xl mb-6'>Bạn đúng {score} / {total} câu.</p>
      <button
        className='px-4 py-2 bg-green-500 text-white rounded-md mr-2 hover:scale-102 transition-transform duration-200 cursor-pointer ease-in-out'
        onClick={onRetry}
      >
        Làm lại
      </button>
      <button
        className='px-4 py-2 bg-pink-500 text-white rounded-md hover:scale-102 transition-transform duration-200 cursor-pointer ease-in-out'
        onClick={() => navigate('/')}
      >
        Về trang chủ
      </button>
    </div>
  );
};

export default QuizResult;
