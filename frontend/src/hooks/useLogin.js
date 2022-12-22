import { useAuthContext } from './useAuthContext'
import { useState } from 'react';

export const useLogin = () => {

    const { dispatch } = useAuthContext(); 
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const login = async (email, password ) => {

        const response = await fetch('/users/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({email, password})
        })

        const json = await response.json(); 

        if(!response.ok)
        {
            setIsLoading(loading => !loading)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(loading => !loading)
        }
    }

    return (login, error, isLoading)
}