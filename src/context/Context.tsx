// import { createContext, ReactNode, useReducer, useState } from 'react';
// import { SubstractAmountForItemInCartAction, SumAmountForItemInCartAction } from '../reducers/actions';
// import { Item, ItemsReducer } from '../reducers/reducer';
// import { Coffee } from '../components/Products';

// interface Cartitems extends Coffee {
//     amount: number
// }

// interface ContextProviderProps {
//     children: ReactNode
// }

// export const CartContext = createContext({} as Cartitems)

// export const ContextProvider = ({children}: ContextProviderProps) => {

//     return(
//         <CartContext.Provider value={}>
//             {children}
//         </CartContext.Provider>
//     )
// }