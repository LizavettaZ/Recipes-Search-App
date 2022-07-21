import { combineReducers } from 'redux'
import { alertReducer } from './alert'
import { searchReducer } from './search'
import { layoutReducer } from './layout'
import { authReducer } from './auth'
import { favoriteReducer } from './favorite'


export default combineReducers({
  alert: alertReducer,
  search: searchReducer,
  layout: layoutReducer,
  auth: authReducer,
  favorite: favoriteReducer
})
