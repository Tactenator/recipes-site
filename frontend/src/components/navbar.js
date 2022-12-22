import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
 
const Navbar = () => {

    const { logout } = useLogout()

    const handleLogout = () => {
        logout(); 
    }

    return ( 
        <div id='navbar'>
            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/users/login'><li>Login</li></Link>
                <Link to='/users/signup'><li>Signup</li></Link>
            </ul>
        </div>
     );
}
 
export default Navbar;