import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home'; 
import Login from './pages/login'
import CreateRecipe from './pages/recipes/createRecipe';
import RecipeDetails from './pages/recipes/recipeDetails';
import Recipes from './pages/recipes/recipes';
import Signup from './pages/signup';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/users/signup' element={<Signup />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/createRecipes' element={<CreateRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
