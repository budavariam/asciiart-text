import React, { createContext, useEffect, useReducer } from "react"
import { getFavourites, setFavourites } from "./favourites"

export const FavouriteContext = createContext({ role: null })

export const FAVOURITE_ACTIONS = {
    "SET_FAVOURITE": "SET_FAVOURITE",
}

export const FavouriteContextProvider = (props) => {
    const [state, actionDispatch] = useReducer((state, action) => {
        // console.debug("FavouriteContext reducer", state, action)
        if (action?.type) {
            switch (action.type) {
                case FAVOURITE_ACTIONS.SET_FAVOURITE: {
                    if (!action.name) {
                        console.warn("Missing name", action)
                        return state
                    }
                    if (!(action.value === true || action.value === false)) {
                        console.warn("Missing value", action)
                        return state
                    }
                    if (state.favourites[action.name] === action.value) {
                        // Already in this state
                        return state
                    }
                    const newFavourites = { ...state.favourites }
                    if (action.value) {
                        newFavourites[action.name] = action.value
                    } else {
                        delete newFavourites[action.name]
                    }

                    return { ...state, favourites: newFavourites }
                }
                default: {
                    console.warn("Unimplemented action", action)
                    return state
                }
            }
        } else {
            console.error("Missing action for state", action)
            return state
        }
    }, {
        favourites: null,
    }, (state) => ({
        ...state,
        favourites: getFavourites(),
    }))

    useEffect(() => {
        // console.debug("Useffect updated favourites", state.favourites)
        setFavourites(state.favourites)
    }, [state.favourites])

    const contextValue = {
        actionDispatch,
        favourites: state.favourites,
    }

    return (
        <FavouriteContext.Provider value={contextValue} >
            {props.children}
        </FavouriteContext.Provider >
    )
}

export const FavouriteContextConsumer = FavouriteContext.Consumer
