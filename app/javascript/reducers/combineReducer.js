import {combineReducers} from 'redux'
import UserResultReducer from './userResult'

const allReducers = combineReducers({
    userResult: UserResultReducer
})

export default allReducers;