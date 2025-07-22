import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import QuizPage from './Pages/QuizPage';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:topic" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
