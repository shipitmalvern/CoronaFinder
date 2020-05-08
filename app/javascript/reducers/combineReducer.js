import {combineReducers} from 'redux'
import UserResultReducer from './userResult'
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    userResult: UserResultReducer,
    form: formReducer
})

export default allReducers;