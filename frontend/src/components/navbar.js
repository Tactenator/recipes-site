import { Link } from 'react-router-dom';
 
const Navbar = () => {
    return ( 
        <div id='navbar'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/users/login'><li>Login</li></Link>
                <Link to='/users/signup'><li>Signup</li></Link>
            </ul>
        </div>
     );
}
 
export default Navbar;