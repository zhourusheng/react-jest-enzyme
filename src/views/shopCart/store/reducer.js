import Immutable from 'immutable'
import * as actionTypes from './action-type'

export const initialState = Immutable.Map({
  cartDishList: Immutable.Map({}),
  cartDishSortMapList: Immutable.List([]),
})

export default (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CART_DISH_LIST:
      return state.merge({
        cartDishList: action.cartDishList
      })
    case actionTypes.UPDATE_CART_DISH_SORT_MAP_LIST:
        return state.merge({
          cartDishSortMapList: action.cartDishSortMapList
        })
    default:
      return state
  }
}