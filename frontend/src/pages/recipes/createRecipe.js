import { useState } from 'react'

const CreateRecipe = () => {

    const [ name, setName ] = useState('');
    const [ author, setAuthor ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ time, setTime ] = useState('')
    const [ ingredients, setIngredients ] = useState()
    const [ instructions, setInstructions ] = useState()
    const [ notes, setNotes ] = useState('')

    return ( 
        <div>
            <form className='create-form'>
                <h3>Create a new recipe</h3>
                <label>Name:</label>
                <input type='text' 
                onChange={((e) => setName(e.target.value))}
                value={name}></input>

                <label>Author:</label>
                <input type='text' 
                onChange={((e) => setAuthor(e.target.value))}
                value={author}></input>

                <label>Description:</label>
                <input type='text' 
                onChange={((e) => setDescription(e.target.value))}
                value={description}></input>

                <label>Time:</label>
                <input type='text' 
                onChange={((e) => setTime(e.target.value))}
                value={time}></input>

                <label>Ingredients:</label>
                <input type='text' 
                onChange={((e) => setIngredients(e.target.value))}
                value={ingredients}></input>

                <label>Instructions:</label>
                <input type='text' 
                onChange={((e) => setInstructions(e.target.value))}
                value={instructions}></input>

                <label>Notes:</label>
                <input type='text' 
                onChange={((e) => setNotes(e.target.value))}
                value={notes}></input>
            </form>
        </div>
     );
}
 
export default CreateRecipe;