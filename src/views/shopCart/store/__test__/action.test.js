import * as actionTypes from '../action-type'
import { updateShopIdAction } from '../action'

test('更新shopId', () => {
  const expectedAction = {
    type: actionTypes.UPDATE_SHOPID,
    shopId: '123456'
  }
  expect(updateShopIdAction('123456')).toEqual(expectedAction)
});