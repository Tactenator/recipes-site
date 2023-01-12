import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

const Recipes = () => {

    const [ data, setData ] = useState();
    const {user} = useAuthContext()

    useEffect(() => {
        async function fetchData() {
            const response  = await fetch('http://localhost:4000/recipes', {
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const recipes = await response.json(); 
            if(response.ok){
                console.log(recipes)
                setData(recipes)
            }
            else {
                console.log('penuis')
            }
        }
        if(user)
        {
            fetchData()
        }
    },[])

    return ( 
        <div>
            Penis
        </div>
     );
}
 
export default Recipes;