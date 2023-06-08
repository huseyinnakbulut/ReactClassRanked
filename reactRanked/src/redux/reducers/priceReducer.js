import * as actionTypes from '../actions/actionTypes'
import { totalPrice } from '../actions/cartActions'
import initialState from './initialState'

export default function (state = initialState.totalPrice, action) {
  switch (action.type) {
    case actionTypes.TOTAL_PRICE:
      return state.totalPrice
    default:
      return state
  }
}
