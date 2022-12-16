import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home'; 
import Login from './pages/login'
import Signup from './pages/signup';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
