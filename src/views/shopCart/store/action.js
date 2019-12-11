import * as actionTypes from './action-type'

export const updateShopIdAction = (shopId) => ({
  type: actionTypes.UPDATE_SHOPID,
  shopId
})

export const updateTableNumAction = (tableNum) => ({
  type: actionTypes.UPDATE_TABLE_NUM,
  tableNum
})

export const updateBaseInfo = (shopId, tableNum) => {
  return dispatch => {
    dispatch(updateShopIdAction(shopId))
    dispatch(updateTableNumAction(tableNum))
  }
}