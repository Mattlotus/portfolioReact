import { createContext } from "react";
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const test = "testing"
    return(
        <AppContext.Provider value={{
            test
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider