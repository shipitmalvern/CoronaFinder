import {combineReducers} from 'redux'
import UserResultReducer from './reducer-result'

const allReducers = combineReducers({
    userResult: UserResultReducer
})

export default allReducers;