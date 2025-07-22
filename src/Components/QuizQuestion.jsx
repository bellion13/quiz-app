

const QuizQuestion = ({ question, index, selected, onSelect, showResult }) => {
  const getClass = (option) => {
    if (!showResult && selected === option) {
      return 'bg-pink-300 border-2 border-pink-500 scale-102 transition-transform duration-200';
    }
    if (showResult) {
      if (option === question.answer) return 'bg-green-200  border-2 border-green-600';
      if (option === selected && option !== question.answer) return 'bg-red-200 border-2 border-red-600';
    }
    return 'border border-pink-300 hover:border-2 hover:bg-pink-100 hover:scale-102 transition-transform duration-200';
  };
  return (
    <div className='mb-6 p-4 rounded-lg hover:shadow-md border border-pink-400 transition-shadow duration-300'>
      <p className='font-semibold mb-4 text-xl '>{index + 1}. {question.question}</p>
      <ul className='space-y-2 '>
        {question.options.map((opt, i) => (
          <li
            key={i}
            className={` text-[17px] py-3 px-4 ml-5 rounded-xl cursor-pointer border ${getClass(opt)} `}
            onClick={() => !showResult && onSelect(question.id, opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
    
  );
  
};

export default QuizQuestion;
