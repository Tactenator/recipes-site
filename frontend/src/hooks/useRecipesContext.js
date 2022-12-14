import { RecipesContext } from "../contexts/RecipesContext";
import { useContext } from 'react'

export const useRecipesContext = () => {
    const context = useContext(RecipesContext)

    if(!context){
        throw Error('useRecipesContext must be used in the context provider')
    }

    return context
}