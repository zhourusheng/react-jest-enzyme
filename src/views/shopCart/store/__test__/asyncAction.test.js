import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import instance from '@lib/axios'
import { getShopInfo } from '../main'
import { LOAD_SHOP_INFO } from '../../actions/main'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const mockHttp = new MockAdapter(instance) // 继承了 axios.js 文件里的配置

test('getShopInfo', () => {
  const store = mockStore({})
  const expectPayloads = [{ type: LOAD_SHOP_INFO, shopInfo: { peopleCount: 0 } }]

  mockHttp.onGet('/shopInfo')
    .reply(200, {
      data: { peopleCount: 0 },
    })

  store.dispatch(getShopInfo())
    .then(() => {
      const actions = store.getActions()
      expect(actions).toEqual(expectPayloads)
    })
})