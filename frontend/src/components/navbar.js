import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import  Logo  from '../images/logo.jpg'
import { useNavigate } from 'react-router-dom'
 
const Navbar = () => {

    const { user } = useAuthContext(); 
    const { logout } = useLogout()
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logout(); 
        navigate('/')
    }

    return ( 
        <div id='navbar'>
             <img src={Logo} alt='Respeese Logo'></img>
            <ul>
                <form>
                    <input type='text' placeholder="Search..." name="search"></input>
                </form>
                <Link to='/'><li>Home</li></Link>
                <Link to='/recipes'><li>Recipes</li></Link>
                {!user && (
                    <ul>
                        <Link to='/users/login'><li>Login</li></Link>
                        <Link to='/users/signup'><li>Signup</li></Link>
                    </ul>
                )}
                {user && (
                <div>
                    <Link to='/createRecipes'>New Recipe</Link>
                    <h4>{user.email}</h4>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            )}
            </ul>
        </div>
     );
}
 
export default Navbar;