import Immutable from 'immutable'
import * as actionTypes from '../action-type'
import reducer, { initialState } from '../reducer'

describe('cart reducer', () => {
  it('返回初始化的state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('更新购物车', () => {
   const state = Immutable.Map({ cartDishList: null })
    const action = {
      type: actionTypes.UPDATE_CART_DISH_LIST,
      cartDishList: Immutable.Map({})
    }
    const newState = Immutable.Map({ cartDishList: Immutable.Map({}) })
    expect(reducer(state, action)).toEqual(newState)
  });

  it('更新购物车商品顺序', () => {
    const state = Immutable.Map({ cartDishSortMapList: null })
    const action = {
      type: actionTypes.UPDATE_CART_DISH_SORT_MAP_LIST,
      cartDishSortMapList: Immutable.List([1])
    }
    const newState = Immutable.Map({ cartDishSortMapList: Immutable.List([1]) })
    expect(reducer(state, action)).toEqual(newState)
  });
})