import {combineReducers} from 'redux'
import UserResultReducer from './userResult'
import questionsData from './questions'
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    userResult: UserResultReducer,
    questionsData: questionsData,
    form: formReducer
})

export default allReducers;