import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/quiz/${category.slug}`}>
      <div className='bg-white shadow-lg rounded-xl hover:shadow-xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105'>
        <div className="w-full h-40 rounded-md mb-4">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className='text-xl font-bold my-1'>{category.name}</h2>
        <p className="text-gray-600 text-sm mb-2">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
