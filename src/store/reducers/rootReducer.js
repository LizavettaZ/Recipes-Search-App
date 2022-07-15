import { combineReducers } from 'redux'
import { alertReducer } from './alert'
import { searchReducer } from './search'
import { layoutReducer } from './layout';


export default combineReducers({
  alert: alertReducer,
  search: searchReducer,
  layout: layoutReducer
})