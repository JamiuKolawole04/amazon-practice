import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
const stateContext = createContext();

// wrap our app and provide Data layer
const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <stateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </stateContext.Provider>
    );
};

// Pull information from data layer
const useStateValue = () => useContext(stateContext);


export { StateProvider, stateContext, useStateValue }