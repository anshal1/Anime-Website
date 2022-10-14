import './App.css';
import State from './Context/State';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchResult from './pages/SearchResult';
import AnimeDetails from './pages/AnimeDetails';

function App() {
  return (
    <>
      <State>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/anime/search' element={<SearchResult />} />
            <Route path='/anime/:id' element={<AnimeDetails />} />
          </Routes>
        </Router>
      </State>
    </>
  );
}

export default App;
