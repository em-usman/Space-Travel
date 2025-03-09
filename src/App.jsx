import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Missions, Profile, Navbar, Rockets } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
