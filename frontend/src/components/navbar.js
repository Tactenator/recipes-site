import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
 
const Navbar = () => {

    const { user } = useAuthContext(); 
    const { logout } = useLogout()

    const handleLogout = () => {
        logout(); 
    }

    return ( 
        <div id='navbar'>
            {user && (
                <div>
                    {user.email}
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            )}
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/recipes'><li>Recipes</li></Link>
                {!user && (
                    <ul>
                        <Link to='/users/login'><li>Login</li></Link>
                        <Link to='/users/signup'><li>Signup</li></Link>
                    </ul>
                )}
            </ul>
        </div>
     );
}
 
export default Navbar;