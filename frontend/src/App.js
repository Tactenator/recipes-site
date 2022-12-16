import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from './pages/home'; 
import Login from './pages/login'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
