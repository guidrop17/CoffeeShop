import produce from "immer";
import { ReactNode } from "react";
import { ActionTypes } from "./actions";

export interface Item {
    id: string
    name: string,
    description:string,
    category: string,
    value: string,
    img: ReactNode,
    amount: number,
}

interface ItemState{
    Items: Item[]
    idActiveinCart: string | null
    amountCart: number
}

export const ItemsReducer = (state: ItemState, action: any) => { 
    switch (action.type){
        case ActionTypes.ADD_ITEM_IN_CART: {
            return produce(state, draft => {
                draft.Items.push(action.payload.newItem)
                draft.idActiveinCart = action.payload.newItem.id
            })
        }
        case ActionTypes.REMOVE_ITEM_IN_CART: {
            return produce(state, draft => {
                draft.Items.push(action.payload.newItem)
            })
        }
        case ActionTypes.SUM_AMOUNT_FOR_ITEM_IN_CART: {
            return produce(state, draft => {
                draft.Items.push(action.payload.newItem)
                draft.amountCart = (action.payload.newItem.amount)
            })
        }
    }

}