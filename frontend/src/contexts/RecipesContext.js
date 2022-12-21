import { createContext, useReducer } from 'react';

export const RecipesContext = createContext()

export const recipesReducer = (state, action) => {
    switch ( action.type ) {
        case ('CREATE_RECIPE'):
            return [action.payload, ...state.recipes]
        case ('SET_RECIPES'):
            return { recipes: action.payload }
        default: 
            return state
    }
}

export const RecipesContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(recipesReducer, {
        recipes: null
    })

    return (
        <RecipesContext.Provider value={{...state, dispatch}}>
            {children}
        </RecipesContext.Provider>
    )
}

