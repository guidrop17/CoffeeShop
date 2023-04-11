import { Coffee } from "../components/CoffeeCard"


export enum ActionTypes {
    ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
    REMOVE_ITEM_IN_CART = 'REMOVE_ITEM_IN_CART',
}

export const AddItemInCartAction = (newItem: Coffee) => {
    return {
        type: ActionTypes.ADD_ITEM_IN_CART,
        payload: {
            newItem,
            },
    }
}

export const RemoveItemInCartAction = (newItem: Coffee) => {
    return {
        type: ActionTypes.REMOVE_ITEM_IN_CART,
        payload: {
            newItem,
            },
    } 
}