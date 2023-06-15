import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'

const RecipeDetails = () => {

    const  [data, setData] = useState()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const { id } = useParams();

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/recipes/' + id, {
            headers: {'Authorization': `Bearer ${user.token}`},
        });
        const data = await response.json(); 
        setData(data) 
    }

    const deleteRecipe = () => {
        console.log('Recipe Deleted')
        fetch('http://localhost:4000/recipes/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }).then(() => {
            navigate("/recipes");})
    }
    return ( 
        <div>
            {data && 
            <div className='recipe-preview-details'>
                <div className='recipe-preview-image'>
                    <img src={data.file} alt="Recipe icon preview"></img>
                </div>
                <div className='recipe-preview-content'>
                    <h1>{data.name}</h1>
                    <h3>By {data.author}</h3>
                    <h4>{data.description} - {data.time}</h4>
                    <ul>
                        {data.ingredients.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                    <ol>
                        {data.instructions.map(item => (
                            <li>{item}</li>
                        ))}
                    </ol>
                    <p>*{data.notes}</p>
                    <div className='recipeButtonContainer'>
                        <button>Edit</button>
                        <button onClick={(() => deleteRecipe())}>Delete</button>
                    </div>
                </div>
            </div>}
        </div>
     );
}
 
export default RecipeDetails;