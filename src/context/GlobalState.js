import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
// intial state
const initialState = {
    transactions: [
       
    ]
}
// Create Context
export const GloablContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState);
//actions
function deleteTransaction(id ) {
    dispatch({
     type: 'Delete_Transaction',
     payload: id
    });
}
function addTransaction(transaction ) {
    dispatch({
     type: 'Add_Transaction',
     payload: transaction
    });
}
return (<GloablContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
    </GloablContext.Provider>)
}
 
