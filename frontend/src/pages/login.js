import { useState } from 'react'
import { useLogin } from '../hooks/useLogin' 
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { login, isLoading, error }  = useLogin();
    const navigate = useNavigate(); 
     

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(email, password)
        if(login) {
            navigate('/')
        }
    }

    return ( 
        <div className='login-container'>
            <form className='login create-form recipe-carousel' onSubmit={handleSubmit}>
                <h2>Welcome Back!</h2>
                <label>Email:</label>
                <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}>
                </input>

                <label>Password:</label>
                <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}>
                </input>
                <button>Login</button>
                {error && <div>{error}</div>}
            </form>
        </div>
     );
}
 
export default Login;