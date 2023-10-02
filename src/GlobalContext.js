import React, { createContext } from 'react'

const GlobalContext = createContext();

const WrapProvider = (props) => {
    const data = "ChildContextData";
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, WrapProvider};
