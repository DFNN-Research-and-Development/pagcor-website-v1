import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppNavBar />}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
