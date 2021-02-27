import React, { createContext, useReducer } from "react"
import { fonts } from "../helpers/fonts.js"
import { layout } from "../helpers/layout"

export const FIGLETSETTINGS_ACTIONS = {
    "SET_TEXT": "SET_TEXT",
    "SET_FONT": "SET_FONT",
    "SET_WIDTH": "SET_WIDTH",
    "SET_HORIZONTAL_LAYOUT": "SET_HORIZONTAL_LAYOUT",
    "SET_VERTICAL_LAYOUT": "SET_VERTICAL_LAYOUT",
    "SET_WHITESPACE_BREAK": "SET_WHITESPACE_BREAK",
}

const defaultState = Object.freeze({
    text: "Type Something",
    font: fonts.font_Standard,
    width: 80,
    horizontalLayout: layout.default,
    verticalLayout: layout.default,
    whitespaceBreak: true,
})

export const FigletSettingsContext = createContext({ state: defaultState, actionDispatch: () => { } })

export const FigletSettingsContextProvider = (props) => {
    const [state, actionDispatch] = useReducer((state, action) => {
        // console.debug("FigletSettingsContext reducer", state, action)
        if (action?.type) {
            switch (action.type) {
                case FIGLETSETTINGS_ACTIONS.SET_TEXT: {
                    return { ...state, text: action.value }
                }
                case FIGLETSETTINGS_ACTIONS.SET_FONT: {
                    return { ...state, font: action.value }
                }
                case FIGLETSETTINGS_ACTIONS.SET_WIDTH: {
                    const value = parseInt(action.value, 10)
                    if (value >= 20) {
                        return { ...state, width: action.value }
                    } else {
                        console.warn("Can not set this low value", action)
                        return state
                    }
                }
                case FIGLETSETTINGS_ACTIONS.SET_HORIZONTAL_LAYOUT: {
                    return { ...state, horizontalLayout: action.value }
                }
                case FIGLETSETTINGS_ACTIONS.SET_VERTICAL_LAYOUT: {
                    return { ...state, verticalLayout: action.value }
                }
                case FIGLETSETTINGS_ACTIONS.SET_WHITESPACE_BREAK: {
                    return { ...state, whitespaceBreak: action.value }
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
    }, defaultState)

    return (
        <FigletSettingsContext.Provider value={{ state, actionDispatch }} >
            {props.children}
        </FigletSettingsContext.Provider >
    )
}

export const FigletSettingsContextConsumer = FigletSettingsContext.Consumer
