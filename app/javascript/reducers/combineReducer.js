import {combineReducers} from 'redux'
import UserResultReducer from './userResult'
import questionsData from './questions'
import demographics from './demographics'
import TraigeResponseReducer from './traigeReducer'
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    userResult: UserResultReducer,
    TraigeResponse: TraigeResponseReducer,
    demographics: demographics,
    questionsData: questionsData,
    form: formReducer

})

export default allReducers;