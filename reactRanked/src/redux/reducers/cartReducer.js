import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.cart.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.cart.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return cartItem;
                })
                return newState;
            }
            else {
                return [...state, { ...action.payload }]
            }
        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem => cartItem.product.id !== action.payload.id)
            return newState2;
        case actionTypes.TOTAL_PRICE:
            
            state.cart.map(cartItem => {
                state.totalPrice += cartItem.product.unitPrice * cartItem.quantity;
            })
            return totalPrice;
        default:
            return state.cart;
    }
}
