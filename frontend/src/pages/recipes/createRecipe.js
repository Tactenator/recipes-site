import { useState, useEffect, useRef } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

const CreateRecipe = () => {

    const [ name, setName ] = useState('');
    const [ author, setAuthor ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ time, setTime ] = useState('')
    const [ oldNumber, setOldNumber ] = useState(0)
    const [ numOfIngredients, setNumOfIngredients ] = useState()
    const [ ingredients, setIngredients ] = useState([])
    const [ instructions, setInstructions ] = useState([])
    const [ notes, setNotes ] = useState('')
    const [count, setCount ] = useState(0)
    const [ displayed, setDisplayed ] = useState(); 

    const displayArr = []; 
    let ingredientArr = [];
    let instructionsArr = [];
    const ingredientEl = useRef(null)
    const instructionsRef = useRef(null)

    const {user} = useAuthContext()
    

    useEffect(() => {
        if(displayArr.length === 0) {
            const one = document.querySelector('.one')
            const two = document.querySelector('.two')
            const three = document.querySelector('.three')
            const four = document.querySelector('.recipe-preview')
            displayArr.push(one, two, three, four)
            setDisplayed(displayArr[count])
        }
        setOldNumber(parseInt(numOfIngredients))
        handleIngredients(oldNumber)

    }, [ numOfIngredients ])

    const handleBack = (e) => {
        e.preventDefault(); 

        setCount(oldCount => oldCount - 1 )

        setDisplayed(displayArr[count])
    }

    const handleNext = (e) => {
        e.preventDefault(); 
        setCount(oldCount => oldCount + 1 )
        setDisplayed(displayArr[count])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user) {
            return
        }

        const recipe = { name, author, description, time, ingredients, instructions, notes }

        const response = await fetch('http://localhost:4000/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe), 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json();

        if(!response.ok) {
            console.log('The following error occurred: ' + json.error)
        }
        if(response.ok){
            console.log('New Recipe Added!')
        }
    }

    const handleIngredients = (e) => {
        const parentDiv = ingredientEl.current;
        let num = 0; 
        if(e < numOfIngredients || e > numOfIngredients){
            switch(e !== numOfIngredients) {
                case (e < numOfIngredients):
                    // add more divs based on difference between the two numbers
                    num = numOfIngredients - e; 
                    for(let i = 0; i < num; i++){
                        const newInput = document.createElement("input");
                        newInput.setAttribute("type", "text")
                        parentDiv.appendChild(newInput)
                    }
                    return
                case ( e > numOfIngredients):
                    // remove excess input divs based on difference between the two numbers
                    num = e - numOfIngredients;
                    for(let i = 0; i < num; i++){
                        parentDiv.removeChild(parentDiv.lastElementChild)
                    }
                    return
                default: 
                    return
            }
        }
        else {
            for(let i = 0; i < numOfIngredients - 1; i++){
                const newInput = document.createElement("input");
                newInput.setAttribute("type", "text")
                parentDiv.appendChild(newInput)
            }
        }
    }

    const addNewInstruction = (e) => {
        e.preventDefault()
        const parentDiv = instructionsRef.current;
        const newInput = document.createElement("input");
        newInput.setAttribute("type", "text")
        parentDiv.appendChild(newInput)
    }

    const compileRecipe = (e) => {
        e.preventDefault()
        setIngredients([])
        setInstructions([])
        let ingredientsNode = ingredientEl.current.childNodes; 
        let instructionsNode = instructionsRef.current.childNodes; 
        instructionsArr = Array.from(instructionsNode)
        ingredientArr = Array.from(ingredientsNode)
        ingredientArr.forEach(ingredient => {
            setIngredients(ingredients => [...ingredients, ingredient.value])
        })
        instructionsArr.forEach(instruction => {
            setInstructions(instructions => [...instructions, instruction.value])
        })
        handleNext(e)
    }

    return ( 
        <div className='create-container'>
            <form className='create-form'>
                <div className={count === 0 ? 'recipe-carousel one' : 'recipe-carousel one hide'}>
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
                    <button onClick={((e) => handleNext(e))} className='next-button'>Next</button>
                </div>
                <div className={count === 1 ? 'recipe-carousel two' : 'recipe-carousel two hide'}>
                    <div className='number-dropdown'>
                        <label>Number of Ingredients:</label>
                        <select  
                        onChange={((e) => {
                            setNumOfIngredients(e.target.value) 
                        })}
                        value={numOfIngredients}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                        </select>
                    </div>
                    <label>Ingredients:</label>
                    <div ref={ingredientEl} id='ingredients'>
                        <input type='text'></input>
                    </div>
                    <button onClick={((e) => handleNext(e))} className='next-button'>Next</button>
                    <button onClick={((e) => handleBack(e))} className='back-button'>Back</button>
                </div>
                
                <div className={count === 2 ? 'recipe-carousel three' : 'recipe-carousel three hide'}>
                    <button onClick={((e) => addNewInstruction(e))}>+</button>
                    <label>Instructions:</label>
                    <div ref={instructionsRef} id='instructions'>
                        <input type='text'></input>
                    </div>
                    <div id='notes'>
                        <label>Notes:</label>
                        <textarea rows={10} cols={89} type='text' value={notes} onChange={((e) => setNotes(e.target.value))}></textarea>
                    </div>
                    <button onClick={((e) => compileRecipe(e))}>Review Recipe</button>
                    <button onClick={((e) => handleBack(e))} className='back-button'>Back</button>
                </div>
                <div className={count === 3 ? 'recipe-preview' : 'recipe-preview hide'}>
                    <div className='recipe-preview-content'>
                        <h1>{name}</h1>
                        <h3>{author}</h3>
                        <h4>{description} - {time}</h4>
                        <ul>
                            {ingredients.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <ol>
                            {instructions.map(item => (
                                <li>{item}</li>
                            ))}
                        </ol>
                        <p>*{notes}</p>
                        <button type='submit' onClick={((e) => handleSubmit(e))}>Add New Recipe</button><br></br>
                        <button onClick={((e) => handleBack(e))} className='back-button'>Back</button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default CreateRecipe;