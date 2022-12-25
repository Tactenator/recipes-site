import { useState, useEffect } from 'react'

const CreateRecipe = () => {

    const [ name, setName ] = useState('');
    const [ author, setAuthor ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ time, setTime ] = useState('')
    const [ numOfIngredients, setNumOfIngredients ] = useState()
    const [ ingredients, setIngredients ] = useState()
    const [ instructions, setInstructions ] = useState()
    const [ notes, setNotes ] = useState('')
    const [ displayed, setDisplayed ] = useState(); 

    const displayArr = []; 
    const ingredientArr = [];
    const instructionsArr = [];

    useEffect(() => {
        const one = document.querySelector('.one')
        const two = document.querySelector('.two')
        const three = document.querySelector('.three')

        displayArr.push(one, two, three)

        setDisplayed(displayArr[0])
    }, [])

    const handleBack = () => {

    }

    const handleNext = () => {
        
    }

    const handleSubmit = () => {
        
    }

    return ( 
        <div className='create-container'>
            <h2>Your New Recipe</h2>
            <form className='create-form'>
                <div className='recipe-carousel one'>
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
                    <button onClick={handleNext} className='next-button'>Next</button>
                </div>
                <div className='recipe-carousel two hide'>
                    <label>Number of Ingredients:</label>
                    <input type='text' 
                    onChange={((e) => setNumOfIngredients(e.target.value))}
                    value={numOfIngredients}></input>

                    <div id='ingredients'>
                        <label>Ingredients:</label>
                        <div className='ingredients-add'>
                        <input type='text' 
                        onChange={((e) => setIngredients(e.target.value))}
                        value={ingredients}></input>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button onClick={handleBack} className='back-button'>Back</button>
                        <button onClick={handleNext} className='next-button'>Next</button>
                    </div>
                </div>
                
                <div className='recipe-carousel three hide'>
                    <label>Instructions:</label>
                    <input type='text' 
                    onChange={((e) => setInstructions(e.target.value))}
                    value={instructions}></input>
                    <label>Notes:</label>
                    <input type='text' 
                    onChange={((e) => setNotes(e.target.value))}
                    value={notes}></input>
                    <button onClick={handleBack} className='back-button'>Back</button>
                    <button onClick={handleSubmit} type='submit'>Add Recipe</button>
                </div>
            </form>
        </div>
     );
}
 
export default CreateRecipe;