import produce from "immer";
import { ReactNode } from "react";
import { ActionTypes } from "./actions";
import { Coffee } from "../components/CoffeeCard";

interface ItemState{
    coffee: Coffee[]
}

export const ItemsReducer = (state: ItemState, action: any) => { 
    switch (action.type){
        case ActionTypes.ADD_ITEM_IN_CART: {
            return produce(state, draft => {
                draft.coffee.push(action.payload)
            })
        }
        case ActionTypes.REMOVE_ITEM_IN_CART: {
            return produce(state, draft => {
                draft.coffee.indexOf(action.payload)
                state.coffee.splice(action.payload)
            })
        }
    }

}