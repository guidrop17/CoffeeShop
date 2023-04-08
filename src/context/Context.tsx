import { createContext, ReactNode, useReducer } from 'react';
import { SubstractAmountForItemInCartAction, SumAmountForItemInCartAction } from '../reducers/actions';
import { Item, ItemsReducer } from '../reducers/reducer';

interface itemsContext{
    items: Item[]
    amount: number
}

interface ContextProviderProps {
    children: ReactNode
}

export const Context = createContext({} as itemsContext)

export const ContextProvider = ({children}: ContextProviderProps) => {

    return(
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}