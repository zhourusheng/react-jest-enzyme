import { loadShopInfoAction } from '../actions/main'
import shop from '../../api/shop'
import Loading from '../../components/common/Loading'

export const getShopInfo = (mtShopId, tableNum) => (dispatch) => {
  Loading.show()
  return shop.getShopInfo({ mtShopId, tableNum })
    .then((res) => {
      Loading.close()
      const result = res.data
      dispatch(loadShopInfoAction(result))
    })
    .catch((e) => {
      Loading.close()
      console.error(e)
    })
}