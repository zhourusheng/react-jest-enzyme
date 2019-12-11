import { combineReducers } from 'redux'
import { reducer as shopCartReducer } from '../views/shopCart/store'

const reducer = combineReducers({
  shopCartReducer
})

export default reducer