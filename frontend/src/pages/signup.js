import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {

    const [ username, setUsername ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { signup, isLoading, error }  = useSignup(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(username, firstName, lastName, email, password)
        
        console.log(error)
    }

    return ( 
        <div>
            <form className='signup create-form recipe-carousel' onSubmit={handleSubmit}>
                <h2>Let's Get Started!</h2>
                <label>Username:</label>
                <input type="string"
                onChange={(e) => setUsername(e.target.value)}
                value={username}>
                </input>

                <label>First Name:</label>
                <input type="string"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}>
                </input>

                <label>Last Name:</label>
                <input type="string"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}>
                </input>

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

                <button disabled={isLoading}>Sign Up</button>
            </form>
            {error && <div className='error'>{error}</div>}
        </div>
     );
}
 
export default Signup;