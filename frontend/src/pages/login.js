import { useState } from 'react'
import { useLogin } from '../hooks/useLogin' 

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { login, isLoading, error }  = useLogin(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(email, password)

        console.log(error)
    }

    return ( 
        <div>
            <form className='login' onSubmit={handleSubmit}>
                <h3>Login</h3>
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