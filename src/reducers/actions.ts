import { Item } from "./reducer"

export enum ActionTypes {
    ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
    REMOVE_ITEM_IN_CART = 'REMOVE_ITEM_IN_CART',
    SUM_AMOUNT_FOR_ITEM_IN_CART = 'SUM_AMOUNT_FOR_ITEM_IN_CART',
    SUBSTRACT_AMOUNT_FOR_ITEM_IN_CART = 'SUBSTRACT_AMOUNT_FOR_ITEM_IN_CART'
}

export const AddItemInCartAction = (newItem: Item) => {
    return {
        type: ActionTypes.ADD_ITEM_IN_CART,
        payload: {
            newItem,
            },
    }
}

export const RemoveItemInCartAction = (newItem: Item) => {
    return {
        type: ActionTypes.REMOVE_ITEM_IN_CART,
        payload: {
            newItem,
            },
    } 
}

export const SumAmountForItemInCartAction = (newItem: Item) => {
    return {
        type: ActionTypes.SUM_AMOUNT_FOR_ITEM_IN_CART,
        payload: {
            newItem
            },
    } 
}

export const SubstractAmountForItemInCartAction = (newItem: Item) => {
    return {
        type: ActionTypes.SUBSTRACT_AMOUNT_FOR_ITEM_IN_CART,
        payload: {
            newItem,
            },
    } 
}