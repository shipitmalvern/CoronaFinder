import {combineReducers} from 'redux'
import UserResultReducer from './userResult'
import questionsData from './questions'
import TraigeResponseReducer from './traigeReducer'
import loaded from './loaded'
import { reducer as formReducer } from 'redux-form'
import News from '../reducers/NewsReducer'

const allReducers = combineReducers({
    userResult: UserResultReducer,
    TraigeResponse: TraigeResponseReducer,
    questionsData: questionsData,
    loaded: loaded,
    News: News,
    form: formReducer
})

export default allReducers;