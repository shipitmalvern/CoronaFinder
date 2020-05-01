import {combineReducers} from 'redux'
import UserResultReducer from './getResult_reducer'

const allReducers = combineReducers({
    userResult: UserResultReducer
})

export default allReducers;