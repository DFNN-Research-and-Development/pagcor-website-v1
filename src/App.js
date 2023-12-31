import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>  
          <Route path="/register" element={<Register />}/>  
          <Route path="/login" element={<Login />}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
