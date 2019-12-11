import configureStore from 'redux-mock-store'
import Immutable from 'immutable'
import thunk from 'redux-thunk'
import * as actionTypes from '../action-type'
import {
  updateShopIdAction,
  updateBaseInfo
} from '../action'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

test('更新shopId', () => {
  const expectedAction = {
    type: actionTypes.UPDATE_SHOPID,
    shopId: '123456'
  }
  expect(updateShopIdAction('123456')).toEqual(expectedAction)
});

// 测试带中间件的复合 Action
// 由于使用了 redux-thunk ，要使用 redux-mock-store 中间件模拟的 store
test('updateBaseInfo', () => {
  const store = mockStore(Immutable.Map({}))
  store.dispatch(updateBaseInfo('123', '456'))
  const actions = store.getActions()
  const expectPayloads = [
    {
      type: actionTypes.UPDATE_SHOPID,
      shopId: '123'
    },
    {
      type: actionTypes.UPDATE_TABLE_NUM,
      tableNum: '456'
    }
  ]
  expect(actions).toEqual(expectPayloads)
});