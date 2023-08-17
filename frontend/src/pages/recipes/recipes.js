import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link } from 'react-router-dom'

const Recipes = () => {

    const [ data, setData ] = useState();
    const {user} = useAuthContext()

    useEffect(() => {
        async function fetchData() {
            const response  = await fetch('http://localhost:4000/recipes'
            // , 
            // {
            //     headers: {'Authorization': `Bearer ${user.token}`},
            // }
            )
            const recipes = await response.json(); 
            if(response.ok){
                console.log(recipes)
                setData(recipes)
            }
            else {
                console.log('NOPE')
            }
        }
        // if(user)
        // {
        //     fetchData()
        // }
        fetchData()
    },[])

    return ( 
        <div>
            <div className='recipeDetails-container'>
                {data && data.map(item => (
                    <div key={item._id} className='recipe-card'>
                        <Link to={`${item._id}`}>
                            <img src={item.file}  alt="icon"></img>
                        </Link>
                        <span>{item.author}</span>
                        <div className='recipe-card-description'>
                            <p>{item.description}</p>
                        </div>
                    </div>
            ))}
            </div>
        </div>
     );
}
 
export default Recipes;