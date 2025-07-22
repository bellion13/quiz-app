import CategoryCard from '../Components/CategoryCard';
import { categories } from '../Data/quizData';

const Home = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='max-w-[1240px] mx-auto p-4 '>
                <div className='flex text-center justify-center items-center flex-col gap-20 '>
                    <h1 className='text-3xl font-bold text-white '>Chào mừng đến với Quiz App</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {categories.map((cat) => (
                            <CategoryCard key={cat.id} category={cat} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
