import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Missions, Profile, Navbar, Rockets } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
